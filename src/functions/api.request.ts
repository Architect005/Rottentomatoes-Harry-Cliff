import fetcher from "./fetcher";
import jwt from "jsonwebtoken";

export const validateToken = (token: string) => {
  const user = jwt.verify(token, "hello");
  return user;
};

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

export function logadmin(data: {email: string; password: string}) {
  return fetcher("/logadmin", data);
}

export function logsadmin(data: {email: string; password: string}) {
  return fetcher("/logsadmin", data);
}

export function editUser(data: {
  id: string;
  name: string;
  email: string;
  role: string;
}) {
  return fetcher("/edit-user", data);
}

export function changeUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  return fetcher("/edit-credential", data);
}

export function createAdmin(data: {
  name: string;
  email: string;
  password: string;
}) {
  return fetcher("/create-admin", data);
}

export function deleteUser(data: { name: string; email: string }) {
  return fetcher("/delete-user", data);
}

export function getMovie(uri: string) {
  return fetch("https://api.themoviedb.org/3" + uri, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTkxZmExNDY0MWIxZDY4MzJlZWU0NTk1NTRkNDVhMSIsInN1YiI6IjY0NDQyZWY0Y2VlMmY2MDQ3NTM2YzcwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cKFkF9DCTKEBDfqO3a-JZj8LZFgESX7Lcmc-6KRIhN4",
    },
  }).then((res) => res.json());
}

export function createMovie(data: { title: string; image: string }) {
  return fetcher("/create-movie", data);
}

export function createCommentAndRate(data: { authorId: string; movieId: string; content: string; rate: number }) {
  return fetcher("/create-comment", data);
}

export function addFavorite(data: { authorId: string, movieId: number, image: string, title: string }) {
  return fetcher("/add-favorite", data);
}

export function logout() {
  return fetcher("/logout")
}