import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useState } from "react";

function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onChangeName() {
    }
    function onChangeEmail() {
    }
    function onChangePassword() {
    }

    return (
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
                <h4 className="mb-6 text-3xl font-semibold text-gray-100">Sign Up</h4>
                <form>
                    <div>
                        <label htmlFor="" className="text-gray-100">
                            User name
                        </label>
                        <input
                            value={name}
                            onChange={onChangeName}
                            type="name"
                            className="mb-6 w-full appearance-none rounded-md bg-gray-600 px-2 py-2.5 text-gray-100 outline-none focus-within:ring-gray-700 focus:ring-2"
                        />
                    </div>
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
                      SIGN UP
                    </button>
                    <p className="mt-4 text-center text-sm text-gray-100">
                      Already have an account?{" "}
                      <Link href="/login" className="cursor-pointer text-red-800">
                        Sign In
                      </Link>
                    </p>
                </form>
            </div>
        </main>
    );
}

export default RegisterPage;