import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/functions/prisma";
import * as argon2 from "argon2";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;
  console.log(id);

  try {
    const res = await prisma.user.delete({
      where: {
        id: id as unknown as string,
      },
    });
    console.log({ res });
  } catch (e) {
    res.status(401);
    res.json({ error: "User has been deleted." });
    return;
  }

  res.json({ status: 201, message: "User is deleted succesfully." });
};

export default handler;
