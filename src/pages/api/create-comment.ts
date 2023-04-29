import { NextApiRequest, NextApiResponse } from "next";
import { validateToken } from "@/functions/api.request";
import prisma from "@/functions/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { movieId, authorId, content, rate } = req.body;

  let comment;

  const user = validateToken(req.cookies.ACCESS_TOKEN);

  try {
      comment = await prisma.comment.create({
      data: {
        authorId: authorId as string,
        content: content as string,
        rate: rate as number,
        movieId: movieId as number,
        author: {
          connect: {
            id: user.id,
          },
        }
      },
    });
  } catch (e) {
    console.log(res)
    res.status(401);
    res.json({ error: "Comment didn't go well." });
    return;
  }

  res.json({ status: 201, message: "Comment is created successfully." });
};

export default handler;