import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth()
  const router = useRouter();
  return (
    <div className="flex justify-around">
      <Link href="/home">
        <a>홈</a>
      </Link>
      { user ? (
        <>
          <Link href="/dashboard">
            <a>대시보드</a>
          </Link>
          <div onClick={() => {
            logout()
            router.push('/login');
          }}>
          로그아웃
          </div>
        </>
      ) : (
      <>
        <Link href="/login">
          <a>로그인</a>
        </Link>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </>
      )}
    </div>
  );
}

export default Navbar;
