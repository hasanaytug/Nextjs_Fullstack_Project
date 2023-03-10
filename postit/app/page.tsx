import { Inter } from "@next/font/google";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      {session ? <AddPost email={session.user?.email || ""}></AddPost> : null}
      {/* @ts-expect-error Server Component */}
      <Posts></Posts>
    </main>
  );
}
