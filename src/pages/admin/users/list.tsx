import { validateToken } from "@/functions/auth";
import prisma from "@/functions/prisma";
import Link from "next/link";
import { RoleEnum } from "@/functions/role.enum";
import { deleteUser } from "@/functions/api.request";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

export default function userList({}) {
  const router = useRouter();
  
  async function onDeleteUser(id: string) {
    const toastId = toast.loading("loading...");
    try {
      const response = await deleteUser({ id });
      if (response.status == 201) {
        toast.success("User is deleted succesfully.", {
          id: toastId,
        });
        router.reload();
      }
    } catch (e) {
      console.error(e);
      toast.success("An error occur", {
        id: toastId,
      });
    }
  }

    return (
    <main className="flex h-screen w-full  flex-1">
      <nav className="h-full w-80 bg-gray-800">
        <div className="space-y-6 px-6 py-6">
          <h4 className="text-xl font-bold text-red-800 ">Admin</h4>
          <div className="space-y-4">
            <Link
              href="/admin/movies/list"
              className=" block w-full rounded-lg bg-gray-700 px-3 py-3 text-gray-100"
            >
              Movie
            </Link>
            <Link
              href="/admin/users/list"
              className=" block w-full rounded-lg bg-gray-700 px-3 py-3 text-gray-100"
            >
              User
            </Link>
          </div>
        </div>
      </nav>
      <section className="w-full p-16">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold text-gray-800">User</h4>

          <Link
            href="/admin/users/create"
            className="ml mt-4 rounded-lg bg-red-800 px-3 py-2.5 font-semibold text-red-100"
          >
            Créer
          </Link>
        </div>

        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-gray-50 ">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal rtl:text-right "
                      >
                        <div className="flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-blue-500"
                          />
                          <span>Name</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal rtl:text-right"
                      >
                        Email address
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal rtl:text-right"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Role</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                            />
                          </svg>
                        </button>
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white ">
                    {userList.map((u) => (
                      <tr key={u.id}>
                        <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-700">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              <div>
                                <h2 className="font-medium text-gray-800">
                                  {u.name}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4 text-sm font-medium text-gray-700">
                          <p>{u.email}</p>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm">
                          <div className="flex items-center gap-x-2">
                            {u.role === RoleEnum.Admin && (
                              <p className="rounded-full bg-indigo-100/60 px-3 py-1 text-xs  text-indigo-500">
                                Admin
                              </p>
                            )}
                            {u.role === RoleEnum.User && (
                              <p className="rounded-full bg-pink-100/60 px-3 py-1 text-xs text-pink-500">
                                User
                              </p>
                            )}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm">
                          <div className="flex items-center gap-x-6">
                            <button
                              onClick={() => void onDeleteUser(u.id)}
                              className="text-gray-500 transition-colors duration-200 hover:text-red-500  focus:outline-none dark:hover:text-red-500"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                            <Link
                              href={`/admin/user/edit/${u.id}`}
                              className="text-gray-500 transition-colors duration-200 hover:text-yellow-500  focus:outline-none dark:hover:text-yellow-500"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

}

export const getServerSideProps = async ({ query, req }) => {
  let user;

  const userList = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
    },
  });

  try {
    user = validateToken(req.cookies.ACCESS_TOKEN);
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  return {
    props: { user, userList },
  };
};
