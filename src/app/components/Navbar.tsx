import { SignUpButton, UserButton } from "@clerk/nextjs";
import React from "react";
// Navbar component
import { SignInButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  return (
    <div className="dark">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Todo List</a>
        </div>
        <div className="flex-none gap-2">
          <SignInButton className="btn" />
          <SignUpButton className="btn" />
          <UserButton className="btn" afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
