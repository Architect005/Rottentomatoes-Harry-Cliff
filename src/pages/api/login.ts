import * as argon2 from "argon2";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/functions/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: email as unknown as string,
    },
  });

  if (!user) {
    res.json({ status: 422, message: "You don't have an account." });
  }

  const isMatched = await argon2.verify(
    user.password,
    password as unknown as string
  );
  if (user && isMatched) {
    console.log({ isMatched });
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        time: Date.now(),
      },
      "hello",
      {
        expiresIn: "8h",
      }
    );
    
    console.log({  });
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("ACCESS_TOKEN", token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
      );
      
      res.json({ status: 200, user });
    } else {
    res.status(401);
    res.json({ error: "Email or Password is wrong" });
  }
};

export default handler;
