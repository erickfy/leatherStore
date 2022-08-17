import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <Link href={{ pathname: "/categories", query: { keyword: "thisway" } }}>
        <a>path</a>
      </Link>
    </div>
  );
};

export default Login;
