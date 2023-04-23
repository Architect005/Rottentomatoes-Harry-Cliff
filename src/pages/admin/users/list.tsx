
import Link from "next/link";

export default function userList({}) {
  
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
                    Oops !
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

