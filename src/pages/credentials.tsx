import Link from "next/link";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/router";
import { validateToken } from "@/functions/api.request";
import { changeUser } from "@/functions/api.request";
import { RoleEnum } from "@/functions/role.enum";
import prisma from "@/functions/prisma";

function ChangeCredentials({user, oneUser}: any) {
    console.log(user, oneUser);
    const [email, setEmail] = useState(oneUser?.email as unknown as string);
    const [password, setPassword] = useState(oneUser?.password as unknown as string);
    
    const router = useRouter();

    function onChangeEmail(e: any) {
        setEmail(e.target.value);
    }
    function onChangePassword(e: any) {
        setPassword(e.target.value);
    }

    async function onSubmit(e: any) {
        e.preventDefault();
        const toastId = toast.loading("loading...");
        console.log("response");
        try {
            console.log(email, password);
            const response = await changeUser({ id: user.id, email, password });
            console.log({response});
            if (response.status == 201) {
              toast.success("Credentials changed succesfully.", {
                id: toastId,
              });
              router.push("/");
            }
        } catch (e) {
            console.error(e);
            toast.success("Can't update credentials.", {
              id: toastId,
            });
        }
    }

    return(
        <main className="flex h-screen w-full items-center justify-center bg-gray-800">
            <div className="h-screen py-20 px-5">
                <Link href="/">
                <h4 className=" text-xl font-bold text-red-500"> RT</h4>
                </Link>
            </div>
            <div className="w-96">
                <h4 className="mb-6 text-3xl font-semibold text-gray-100">Change credentials</h4>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="" className="text-gray-100">
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={onChangeEmail}
                            type="email"
                            className="mb-6 w-full appearance-none rounded-md bg-gray-600 px-2 py-2.5 text-gray-100 outline-none focus-within:ring-gray-700 focus:ring-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="" className="text-gray-100">
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={onChangePassword}
                            type="password"
                            className="w-full appearance-none rounded-md bg-gray-600 px-2 py-2.5 text-gray-100 outline-none focus-within:ring-gray-700 focus:ring-2"
                        />
                    </div>
                    <button className="mt-8 w-full rounded-lg bg-red-800 px-3 py-2.5 font-semibold text-red-100 ">
                      CHANGE
                    </button>
                </form>
            </div>
        </main>
    );
}

export default ChangeCredentials;

export const getServerSideProps = async ({ query, req }) => {
  let user;
  let oneUser;

  console.log(req.cookies.ACCESS_TOKEN);
  try {
    user = validateToken(req.cookies.ACCESS_TOKEN);
    oneUser = await prisma.user.findUnique({
      where: {
        id: user.id as unknown as string,
      },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });
    console.log(oneUser)
    if(oneUser.role == RoleEnum.User) {
      return {
        redirect: {
          permanent: false,
          destination: "/401",
        },
      };
    }
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  return {
    props: { user, oneUser },
  };
};