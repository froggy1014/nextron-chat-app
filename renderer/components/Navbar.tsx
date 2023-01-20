import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-around">
      <Link href="/home">
        <a>홈</a>
      </Link>
      <Link href="/dashboard">
        <a>대시보드</a>
      </Link>
      <Link href="/login">
        <a>로그인</a>
      </Link>
      <Link href="/signup">
        <a>회원가입</a>
      </Link>
    </div>
  );
}

export default Navbar;
