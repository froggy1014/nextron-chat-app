import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/index.css';
import Navbar from '../components/Navbar';
import { AuthContextProvider } from '../context/AuthContext';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
