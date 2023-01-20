import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../config/firebase';

const AuthContext = createContext<any>({});

// useAuth 라는 커스텀훅으로 useContext() 콜백하여, 전역 상태들을 반환받는다.  
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // 현재 사용자에 대한 정보를 스토어해준다.
  const [ user, setUser] = useState<any>(null);
  // 로딩을 위한 상태
  const [loading, setLoadig] = useState(true);

  useEffect(() => {
    // onAuthStateChanged가 변경될때마다 실행되서 
    // user값이 나오면, setUser를 통해 유저 정보 store
    // 없다면 Null로 바꿔준다. 
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if(user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        })
      } else {
        setUser(null)
      }
      setLoadig(false)
    }) 

    // 클린업으로 파이어베이스 현재 리슨 이벤트 없애줌
    return () => unsubscribe(); 
  }, [onAuthStateChanged])

  // 회원가입, auth가 필수 인자
  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword( auth, email, password)
  }

  // 로그인, auth가 필수인자
  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword( auth, email, password)
  }

  // 로그아웃, 현재 사용유저에 대한 정보 null로 바꾸고,
  // signOut이 Promise를 반환하기때문에 await 처리를 해준다. 
  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  // children으로 들어온 컴포넌트들을 프로파이더로 감싸준다. 
  return <AuthContext.Provider value={{ user, login, signup, logout }}>
    {loading ? null : children}
  </AuthContext.Provider>;
};
