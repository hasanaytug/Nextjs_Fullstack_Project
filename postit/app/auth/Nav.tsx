import Link from "next/link";
import Login from "./Login";
import Logged from "./Logged";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

async function Nav() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex justify-between">
      <Link href="/">Post It</Link>
      <ul className="flex ">
        {session?.user && <Logged image={session.user?.image || ""} />}
        {!session?.user && <Login />}
      </ul>
    </nav>
  );
}

export default Nav;
