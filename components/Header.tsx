"use client";

import Link from "next/link";
import Avatar from "./Avatar";

function Header() {
  return (
    <header className="bg-white shadow-sm p-5">
      {/* header div is supposed to have flex and justify-between, but i dont understand why yet */}
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
    </header>
  );
}
export default Header;
