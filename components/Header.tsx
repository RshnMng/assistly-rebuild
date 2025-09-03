"use client";

import Link from "next/link";
import Avatar from "./Avatar";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <header className="bg-white shadow-sm p-5 flex justify-between">
      <Link
        href="/"
        className="flex items-center text-gray-500 text-3xl font-thin"
      >
        <Avatar seed="PAPAFAM Support Agent" />
        <div className="space-y-1">
          <h1> Assistly </h1>
          <h2 className="text-sm">Your customizable AI Chat Agent</h2>
        </div>
      </Link>

      <div className="flex items-center">
        <SignedIn>
          <UserButton showName />
        </SignedIn>

        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
}
export default Header;
