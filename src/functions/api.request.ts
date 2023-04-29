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

export function changeUser(data: {
  id: string;
  email: string;
  password: string;
}) {
  return fetcher("/edit-user", data);
}

export function editUser(data: {
  id: string;
  name: string;
  email: string;
  role: string;
}) {
  return fetcher("/edit-user", data);
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

export function createCommentAndRate(data: { comment: string; rate: number; movieId: number }) {
  return fetcher("/create-comment", data);
}
