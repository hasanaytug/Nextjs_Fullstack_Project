import Link from "next/link";
import Login from "./Login";
import Logged from "./Logged";
import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

async function Nav() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex justify-between">
      <Link href="/">
        <Image
          className="ml-4 rounded-full"
          width={64}
          height={64}
          src="https://img.lovepik.com/free-png/20210919/lovepik-cartoon-birds-png-image_400384259_wh1200.png"
          alt="logo"
        />
      </Link>
      <ul className="flex ">
        {session?.user && <Logged image={session.user?.image || ""} />}
        {!session?.user && <Login />}
      </ul>
    </nav>
  );
}

export default Nav;
