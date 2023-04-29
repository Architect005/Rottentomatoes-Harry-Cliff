import * as argon2 from "argon2";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/functions/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = req.body;
    console.log(req.body);

    res.setHeader(
        "Set-Cookie", [
        `ACCESS_TOKEN=deleted; Max-Age=0; path=/`,
        `refresh=deleted; Max-Age=0; path=/`]
    );

    return res.status(201).json({
        success: 'Successfully logged out'
    });
};

export default handler;