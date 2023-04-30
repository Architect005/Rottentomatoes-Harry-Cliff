import { NextApiRequest, NextApiResponse } from "next";
import * as argon2 from "argon2";
import prisma from "@/functions/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, email, password} = req.body;

  try {
      await prisma.user.update({
        where: {
            id: id as unknown as string,
        },
          data: {
          email: email as unknown as string,
          password: await argon2.hash(password as unknown as string),
      },
    });
    console.log(id);
  } catch (e) {
    res.status(401);
    res.json({ error: "Something went wrong." });
    return;
  }
  return res.json({ status: 201, message: "User is updated succesfully." });
};

export default handler;