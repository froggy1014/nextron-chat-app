import { useRouter } from "next/router";
import React, { useState } from "react";

function login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log(data)
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>로그인</h1>
      <form onSubmit={handleLogin} className="w-4/5">
        <div className="flex flex-col text-black">
          <label htmlFor="id">아이디</label>
          <input
            type="email"
            id="id"
            className="outline"
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="pass">비밀번호</label>
          <input
            type="password"
            id="pass"
            className="outline"
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
          />
        </div>

        <button className="btn-blue" type="submit">Login</button>
      </form>
    </div>
  );
}

export default login;
