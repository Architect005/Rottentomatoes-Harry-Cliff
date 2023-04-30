import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { register } from "@/functions/api.request";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function sleep() {
  return new Promise(resolve => setTimeout(resolve, 3000));
}

function RegisterPage() {
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
    function onChangePassword(e: any) {
        setPassword(e.target.value);
    }

    async function onSubmit(e: any) {
        e.preventDefault();
        console.log("Submit");
        const response = await register({ name, email, password });
        try {
            if (response.status == 201) {
              toast.success("Welcome !")
              sleep();
              router.push("/login");
            }
        } catch (e) {
            if (response.status == 401) {
                toast.error("User already exist !");
            }
            console.error(e);
      }
    }

    return (
        <main className="flex h-screen w-full items-center justify-center bg-gray-800">
            <div className="h-screen py-20 px-5">
                <Link href="/">
                <h4 className=" text-xl font-bold text-red-500"> RT</h4>
                </Link>
            </div>
            <div className="w-96">
                <h4 className="mb-6 text-3xl font-semibold text-gray-100">Sign Up</h4>
                <form onSubmit={onSubmit}>
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
                    <ToastContainer/>
                </form>
            </div>
        </main>
    );
}

export default RegisterPage;