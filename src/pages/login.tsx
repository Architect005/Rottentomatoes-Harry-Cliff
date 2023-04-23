import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onChangeEmail() {
    }
    function onChangePassword() {
    }

    return(
        <main className="flex h-screen w-full items-center justify-center bg-gray-800">
            <div className="h-screen py-20 px-5">
                <Link href="/">
                    <>
                        <Image
                        width={40}
                        height={40}
                        alt="logo"
                        src="/index.jpg"
                        />
                    </>
                </Link>
            </div>
            <div className="w-96">
                <h4 className="mb-6 text-3xl font-semibold text-gray-100">Sign In</h4>
                <form>
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
                    <p className="mt-4 text-center text-sm text-gray-100">
                      Don't have an account ? {" "}
                      <Link href="/register" className="cursor-pointer text-red-800">
                        Create an account
                      </Link>
                    </p>
                </form>
            </div>
        </main>
    );
}

export default LoginPage;