import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/functions/prisma";
import * as argon2 from "argon2";
import { RoleEnum } from "@/functions/role.enum";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, password } = req.body;

  let user;

  try {
    const hashPassword = await argon2.hash(password as unknown as string);
    user = await prisma.user.create({
      data: {
        name: name as string,
        email: email as string,
        password: hashPassword,
        role: RoleEnum.Admin,
      },
    });
  } catch (e) {
    res.status(401);
    res.json({ error: "Admin already exists" });
    return;
  }

  res.json({ status: 201, message: "Admin is created successfully." });
};

export default handler;
