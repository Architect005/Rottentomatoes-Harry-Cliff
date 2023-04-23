import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function CreateAdmin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");


    function onChangeEmail(e: any) {
    }
    function onChnagePassword(e: any) {
    }
    function onChangeRole(e: any) {
    }



    return(
        <main className="flex h-screen w-full items-center justify-center bg-white-800">
            <div className="flex h-screen text-xl font-bold text-red-800">
              Super Admin
            </div>
            <section className="w-full p-16">
              <div className="mb-12 flex items-center justify-between">
                <h4 className="text-xl font-bold text-gray-800">Create User</h4>
              </div>

              <div>
                <form className="grid grid-cols-4 gap-x-4">
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
                  <div>
                      <label htmlFor="" className="text-gray-700">
                        Role
                      </label>
                      <select
                        value={role}
                        onChange={onChangeRole}
                        className=" mb-6 w-full appearance-none rounded-md bg-gray-200 px-2 py-2.5 text-gray-700 outline-none focus-within:ring-gray-700 focus:ring-2"
                        >
                        <option>Admin</option>
                      </select>
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

export default CreateAdmin;