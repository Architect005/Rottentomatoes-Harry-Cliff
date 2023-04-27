import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/functions/prisma";
import * as argon2 from "argon2";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, name, email, role } = req.body;

  try {
    await prisma.user.update({
      where: {
        id: id as unknown as string,
      },
      data: {
        name: name as unknown as string,
        email: email as unknown as string,
        role: role as unknown as string,
      },
    });
  } catch (e) {
    res.status(401);
    res.json({ error: "Email has been taken." });
    return;
  }

  res.json({ status: 201, message: "User is updated succesfully." });
};

export default handler;
