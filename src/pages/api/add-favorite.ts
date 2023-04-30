import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/functions/prisma";
import { validateToken } from "@/functions/api.request";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { authorId, movieId, image, title } = req.body;

  const user = validateToken(req.cookies.ACCESS_TOKEN);
  let favorite;

  try {
      favorite = await prisma.favorite.create({
      data: {
        movieId: movieId as number,
        image: image as string,
        title: title as string,
        author: {
          connect: {
            id: user.id,
          },
        }
      },
    });
    console.log(favorite)
  } catch (e) {
    console.log(e)
    res.status(401);
    res.json({ error: "Comment didn't go well." });
    return;
  }

  res.json({ status: 201, message: "Comment is created successfully." });
};

export default handler;