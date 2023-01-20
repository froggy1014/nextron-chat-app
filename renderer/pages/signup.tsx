import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

function signup() {
  const { user, signup } = useAuth();
  console.log(user)
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      await signup(data.email, data.password);
    } catch (error) {
      console.log(error)
    }
}

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>회원가입</h1>
      <form onSubmit={handleSignup} className="w-4/5">
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

        <button className="btn-blue" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default signup;
