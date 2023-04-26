import fetcher from "./fetcher";

export function getMovie(uri: string) {
  return fetch("https://api.themoviedb.org/3" + uri, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2Q3OWNkODVjNjMyYzZmMzE3OGMzMmMwNDg4NTAyNyIsInN1YiI6IjYwMjQzOTMxNDU4MTk5MDAzZmFlMDlkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7yEDvwGn2bRabvqesZHAV4OEEzeuejEtOlynxYaPkqA",
    },
  }).then((res) => res.json());
}

// Comment
export function createCommentAndRate(data: { comment: string; rate: number; Id: string | string[] | undefined }) {
  return fetcher("/create-comment", data);
}