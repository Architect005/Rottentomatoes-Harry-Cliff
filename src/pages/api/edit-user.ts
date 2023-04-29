import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/functions/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, name, email } = req.body;

  console.log(id, name, email)
  try {
    await prisma.user.update({
      where: {
        id: id as unknown as string,
      },
      data: {
        name: name as unknown as string,
        email: email as unknown as string,
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
