import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await prisma.comment.findMany({
    include: {
      User: true,
    },
  });
  res.status(200).json({ name: "Posts Fetched" });
}
