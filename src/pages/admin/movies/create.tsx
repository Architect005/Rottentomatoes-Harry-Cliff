import { validateToken } from "@/functions/auth";
import prisma from "@/functions/prisma";
import Link from "next/link";
import { RoleEnum } from "@/functions/role.enum";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { createAdmin, createMovie, getMovie } from "@/functions/api.request";
import Image from "next/image";

export default function OneUser({ user }: any) {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState();
  const [selectedMovie, setSelectedMovie] = useState();

  const router = useRouter();

  useEffect(() => {
    getMovie("/movie/popular")
      .then((res) => {
        setMovieList(res.results);
      })
      .catch(console.log);
  }, []);

  function onChangeFilm(e) {
    setSelectedMovieId(e.target.value);
    getMovie("/movie/" + e.target.value)
      .then((res) => setSelectedMovie(res))
      .catch(console.log);
  }

  async function onSubmit(e: any) {
    e.preventDefault();
    const toastId = toast.loading("loading...");
    try {
      const response = await createMovie({
        title: selectedMovie.title,
        image: selectedMovie.poster_path,
      });
      if (response.status == 201) {
        toast.success("Movie is created succesfully.", {
          id: toastId,
        });
        router.push("/admin/movie");
      }
    } catch (e) {
      console.error(e);
      toast.success("An error occur.", {
        id: toastId,
      });
    }
  }

  return (
    <main className="flex h-screen w-full  flex-1">
      <nav className="h-full w-80 bg-gray-800">
        <div className="space-y-6 px-6 py-6">
          <h4 className="text-xl font-bold text-red-800 ">TM</h4>
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
          {selectedMovie && (
            <div className="flex gap-x-2">
              <div className="relative h-40 w-32 flex-none rounded-lg">
                <Image
                  priority
                  className="rounded-xl"
                  alt="Image"
                  src={
                    "https://image.tmdb.org/t/p/w500/" +
                    selectedMovie.poster_path
                  }
                  fill
                />
              </div>
              <div>
                <p>{selectedMovie.title}</p>
                <p>{selectedMovie.overview}</p>
                <p>
                  {selectedMovie.genres.map((genre) => (
                    <span id={genre.id} className="mr-1">
                      {genre.name}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          )}
          <form onSubmit={onSubmit} className="grid grid-cols-2 gap-x-4">
            <div>
              <label htmlFor="" className="text-gray-700">
                Movie
              </label>
              <select
                value={selectedMovieId}
                onChange={onChangeFilm}
                className=" mb-6 w-full appearance-none rounded-md bg-gray-200 px-2 py-2.5 text-gray-700 outline-none focus-within:ring-gray-700 focus:ring-2"
              >
                {movieList.map((movie) => (
                  <option key={movie.id} value={movie.id}>
                    {movie.title}
                  </option>
                ))}
              </select>
            </div>

            <button
              disabled={!selectedMovie}
              className="mb-6 mt-6 w-full rounded-lg bg-red-800 px-3 py-2.5 font-semibold text-red-100 disabled:bg-red-800/40 "
            >
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
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  return {
    props: { user },
  };
};
