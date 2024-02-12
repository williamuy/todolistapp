import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="dark">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Todo List</a>
        </div>
        <div className="flex-none gap-2">
          <div className="btn">
            <SignInButton />
          </div>
          <div className="btn">
            <SignUpButton />
          </div>
          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
//test
