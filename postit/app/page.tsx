import { Inter } from "@next/font/google";
import AddPost from "./components/AddPost";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <AddPost></AddPost>
    </main>
  );
}
