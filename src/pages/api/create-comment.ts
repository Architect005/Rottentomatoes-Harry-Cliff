import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/functions/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { authorId, content, movieId } = req.body;

  let comment;

  try {
    comment = await prisma.comment.create({
      data: {
        authorId: authorId as string,
        movieId: movieId as number,
        content: content as string,
      },
    });
  } catch (e) {
    res.status(401);
    res.json({ error: "Movie already exists" });
    return;
  }

  res.json({ status: 201, message: "Comment is created successfully." });
};

export default handler;