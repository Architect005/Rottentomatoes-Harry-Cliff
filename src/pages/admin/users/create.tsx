import { validateToken } from "@/functions/auth";
import prisma from "@/functions/prisma";
import Link from "next/link";
import { RoleEnum } from "@/functions/role.enum";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

export default function OneUser({ user }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function onChangeName(e: any) {
    setName(e.target.value);
  }

  function onChangeEmail(e: any) {
    setEmail(e.target.value);
  }

  function onChnagePassword(e: any) {
    setPassword(e.target.value);
  }

  return (
    <main className="flex h-screen w-full  flex-1">
      <nav className="h-full w-80 bg-gray-800">
        <div className="space-y-6 px-6 py-6">
          <h4 className="text-xl font-bold text-red-800 ">Admin</h4>
          <div className="space-y-4">
            <Link
              href="/admin/movie"
              className=" block w-full rounded-lg bg-gray-700 px-3 py-3 text-gray-100"
            >
              Movie
            </Link>
            <Link
              href="/admin/user"
              className=" block w-full rounded-lg bg-gray-700 px-3 py-3 text-gray-100"
            >
              User
            </Link>
          </div>
        </div>
      </nav>
      <section className="w-full p-16">
        <div className="mb-12 flex items-center justify-between">
          <h4 className="text-xl font-bold text-gray-800">Create User</h4>
        </div>

        <div>
          <form>
            <div>
              <label htmlFor="" className="text-gray-700">
                Name
              </label>
              <input
                name="name"
                value={name}
                onChange={onChangeName}
                type="text"
                className=" mb-6 w-full appearance-none rounded-md bg-gray-200 px-2 py-2.5 text-gray-700 outline-none focus-within:ring-gray-700 focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-700">
                Email
              </label>
              <input
                value={email}
                onChange={onChangeEmail}
                type="email"
                className=" mb-6 w-full appearance-none rounded-md bg-gray-200 px-2 py-2.5 text-gray-700 outline-none focus-within:ring-gray-700 focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-700">
                Password
              </label>
              <input
                value={password}
                onChange={onChnagePassword}
                type="password"
                className=" mb-6 w-full appearance-none rounded-md bg-gray-200 px-2 py-2.5 text-gray-700 outline-none focus-within:ring-gray-700 focus:ring-2"
              />
            </div>
            <button className="mb-6 mt-6 w-full rounded-lg bg-red-800 px-3 py-2.5 font-semibold text-red-100 ">
              SAVE
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export const getServerSideProps = async ({ query, req }) => {
  let user;
  console.log(req.query);

  try {
    user = validateToken(req.cookies.ACCESS_TOKEN);

    const oneUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    });
    if(oneUser.role !== RoleEnum.Admin) {
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
        destination: "/admin/",
      },
    };
  }

  return {
    props: { user },
  };
};
