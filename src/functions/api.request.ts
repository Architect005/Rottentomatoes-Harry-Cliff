import fetcher from "./fetcher";

export function register(data: {
  name: string;
  email: string;
  password: string;
}) {
  console.log("Submit");
  return fetcher("/register", data);
}

export function login(data: {email: string; password: string}) {
  return fetcher("/login", data);
}

export function createAdmin(data: {
  name: string;
  email: string;
  password: string;
}) {
  return fetcher("/create-admin", data);
}

export function editUser(data: {
  id: string;
  name: string;
  email: string;
  role: string;
}) {
  return fetcher("/edit-user", data);
}

export function deleteUser(data: { name: string; email: string }) {
  return fetcher("/delete-user", data);
}

export function getMovie(uri: string) {
  return fetch("https://api.themoviedb.org/3" + uri, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2Q3OWNkODVjNjMyYzZmMzE3OGMzMmMwNDg4NTAyNyIsInN1YiI6IjYwMjQzOTMxNDU4MTk5MDAzZmFlMDlkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7yEDvwGn2bRabvqesZHAV4OEEzeuejEtOlynxYaPkqA",
    },
  }).then((res) => res.json());
}

export function createMovie(data: { title: string; image: string }) {
  return fetcher("/create-movie", data);
}
