import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { logsadmin } from "@/functions/api.request";

function SuperAdminLog() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
            const response = await logsadmin({ email, password });
            console.log({response});
            if (response.status == 201) {
              toast.success("User log succesfully.", {
                id: toastId,
              });
              router.push("/superadmin/users/create");
            }
            if (response.status == 422) {
                toast.error("Email or password incorrect", {
                    id: toastId,
                });
            } 
        } catch (e) {
            console.error(e);
        }
    }

    return(
        <main className="flex h-screen w-full items-center justify-center bg-gray-800">
            <div className="w-96">
                <h4 className="mb-6 text-3xl font-semibold text-gray-100">Super Admin</h4>
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
                      SIGN IN
                    </button>
                </form>
            </div>
        </main>
    );
}

export default SuperAdminLog;