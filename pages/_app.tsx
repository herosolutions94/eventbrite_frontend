import React, { useState, useEffect } from "react";

import "@/styles/css/bootstrap.min.css";
import "@/styles/css/slick.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/scss/app.generic.scss";
// import "@/styles/scss/global.module.scss"
import type { AppProps } from "next/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Providers } from "@/components/provider";
import { Provider } from "react-redux";
import { store } from "@/store/store";
// import store from "../states/store";
import NextNProgress from "nextjs-progressbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <NextNProgress color="#f05537" />
        <ToastContainer />
        <Component {...pageProps} toast={toast} />
      </Provider>
    </>
  );
}
