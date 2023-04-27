import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/functions/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, image } = req.body;

  let movie;

  try {
    movie = await prisma.movie.create({
      data: {
        title: title as string,
        image: image as string,
      },
    });
  } catch (e) {
    res.status(401);
    res.json({ error: "Movie already exists" });
    return;
  }

  res.json({ status: 201, message: "Movie is created successfully." });
};

export default handler;
