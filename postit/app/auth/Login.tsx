"use client";

import { signIn } from "next-auth/react";

function Login() {
  return (
    <li>
      <button className="bg-lime-400 p-2 rounded" onClick={() => signIn()}>
        Sign In
      </button>
    </li>
  );
}

export default Login;
