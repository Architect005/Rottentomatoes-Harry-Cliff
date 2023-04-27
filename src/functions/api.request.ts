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