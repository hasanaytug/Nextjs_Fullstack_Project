import { Inter } from "@next/font/google";
import AddPost from "./components/AddPost";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const session = await getServerSession(authOptions);
  return <main>{session ? <AddPost></AddPost> : null}</main>;
}
