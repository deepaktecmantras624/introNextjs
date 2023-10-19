import React from "react";
import { WishlistProvider } from "../context/WishlistContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../app/globals.css"
import Header from "../navbar/Header";
import Footer from "../Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <WishlistProvider>
        <Header/>
      <Component {...pageProps} />
      <Footer/>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} closeOnClick pauseOnHover draggable />

    </WishlistProvider>
  );
}

export default MyApp;