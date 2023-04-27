export default function fetcher(url: string, data: any = undefined) {
  return fetch(`${window.location.origin}/api${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status > 399 && res.status < 200) {
      throw new Error();
    }
    console.log(res.json());
    return res.json();
  });
}

// export default function idfetcher(url: string, data: any = undefined) {
//     return axios.get(`${window.location.origin}/api${url}`, {
//       method: data ? "POST" : "GET",
// //      credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: data,
//     }).then((res) => {
//       if (res.status > 399 && res.status < 200) {
//         throw new Error();
//       }
//       return res;
//     });
// }