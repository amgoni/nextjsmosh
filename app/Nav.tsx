import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        NextJS
      </Link>
      <Link href="/admin" className="mr-5">
        Admin
      </Link>
    </div>
  );
};

export default Nav;
