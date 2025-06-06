import { getAuthSession } from "@/lib/nextAuth";
import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";
import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./ThemeToggle";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();
  // if(session?.user){
  //   return (
  //     <pre>{JSON.stringify(session.user, null, 2)}</pre>
  //   )
  // }else{
  //   return(<div>Not Signed In</div>)
  // }
  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-purple-800 text-purple-900 dark:border-purple-800 dark:text-white px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block ">
            QuizFun
          </p>
        </Link>
        <div className="flex items-center">
          <ThemeToggle className="mr-4" />
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <SignInButton text={"Sign In"} />
          )}
          {/* <SignInButton text={"Sign In"}/> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
