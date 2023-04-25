import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/functions/prisma";

export const validateRoute = (
  handler: (
    req: NextApiRequest,
    res: NextApiResponse,
    user: any
  ) => Promise<void>
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.ACCESS_TOKEN;

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, "hello");
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("Not real user");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not Authorizied" });
        return;
      }

      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "Not Authorizied" });
  };
};

export const validateToken = (token: string) => {
  const user = jwt.verify(token, "hello");
  return user;
};
