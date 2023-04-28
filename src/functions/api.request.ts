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

export function editUser(data: {
  id: string;
  email: string;
  password: string;
}) {
  return fetcher("/edit-user", data);
}