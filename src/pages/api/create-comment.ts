import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/functions/prisma";
import { validateToken } from "@/functions/api.request";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { movieId, authorId, content, rate } = req.body;

  const user = validateToken(req.cookies.ACCESS_TOKEN);
  let comment;

  try {
      comment = await prisma.comment.create({
      data: {
        content: content as string,
        rate: Number(rate),
        movieId: Number(movieId),
        author: {
          connect: {
            id: user.id,
          },
        }
      },
    });
    console.log(comment)
  } catch (e) {
    console.log(e)
    res.status(401);
    res.json({ error: "Comment didn't go well." });
    return;
  }

  res.json({ status: 201, message: "Comment is created successfully." });
};

export default handler;