import { getMovie } from "@/functions/api.request";
import { validateRoute } from "@/functions/auth";
import { NextApiRequest, NextApiResponse } from "next";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    try {
      const res = await getMovie("/genre/movie/list");
      console.log(res);
      res.status(res);
    } catch (e) {
      console.log(e);
    }
  }
);
