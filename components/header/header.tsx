import Head from "next/head";
import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss";
import Navigation from "./navigation";
import Logo from "../logo";
import HeaderStrip from "./headerStrip";
import Router from "next/router";
import Cookies from "js-cookie";
import Script from "next/script";
import { fetchUsers } from "@/slices/userSlice";
// Replace with the actual path
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";

const Header = (props: { pageTitle: string; profileData?: any }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { pageTitle } = props;
  const email = Cookies.get("email");
  const user_id = Cookies.get("user_id");
  // useEffect(() => {
  //   if (email === undefined || email === null || email === '') {
  //     Cookies.remove("email");
  //     Cookies.remove("role");
  //     Cookies.remove("token");
  //     Cookies.remove("user_id");
  //     Router.push("/login");
  //   }
  //   if (user_id === undefined || user_id === null || user_id === '') {
  //     Cookies.remove("email");
  //     Cookies.remove("role");
  //     Cookies.remove("token");
  //     Cookies.remove("user_id");
  //     Router.push("/login");
  //   }
  // }, [email, user_id]);

  const { profileData, loading, value } = useSelector(
    (state: RootState) => state.user
  );
  useEffect(() => {
    if (email !== undefined && email !== null && email !== "") {
      if (
        profileData === null ||
        profileData === undefined ||
        profileData === ""
      ) {
        // Get rowId or any other necessary data
        const rowId = 123; // Replace with the actual rowId or data you need

        // Dispatch the fetchUsers action with the payload
        dispatch(fetchUsers({ rowId }));
      }
    }
  }, [profileData, email]);

  const [header, setHeader] = useState("production");
  const [navActive, setNavActive] = useState(false);
  const navToggleHandle = () => {
    setNavActive(!navActive);
  };
  const role = Cookies.get("role");

  useEffect(() => {
    const { pathname } = Router;
    // console.log(Router.query,pathname)
    if (
      pathname == "/player" ||
      pathname == "/player/notifications" ||
      pathname == "/player/booking" ||
      pathname == "/player/booking-detail" ||
      pathname == "/player/tournaments" ||
      pathname == "/player/transactions" ||
      pathname == "/player/wishlists" ||
      pathname == "/player/messages" ||
      pathname == "/player/tournament-detail/[id]"
    ) {
      setHeader("player");
    } else if (
      pathname == "/organizer" ||
      pathname == "/organizer/notifications" ||
      pathname == "/organizer/buy-credits" ||
      pathname == "/organizer/booking" ||
      pathname == "/organizer/booking-detail" ||
      pathname == "/organizer/tournaments" ||
      pathname == "/organizer/add-new-tournament" ||
      pathname == "/organizer/transactions" ||
      pathname == "/organizer/wishlists" ||
      pathname == "/organizer/messages" ||
      pathname == "/organizer/tournament-detail/[id]" ||
      pathname == "/organizer/tournament-match/[id]" ||
      pathname == "/organizer/edit-tournament/[id]" ||
      pathname == "/profile/[id]/[username]"
    ) {
      setHeader("organizer");
    } else {
      setHeader("production");
    }
  }, []);
  if (loading) {
    return (
      <div className={style.loading_page}>
        <img src="/images/loading.gif" />
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>{pageTitle} — Eventplus</title>
        <meta name="description" content="Eventplus" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes"
        />
        <link rel="icon" href="/images/logo.png" />
        {/* <script
					src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmqmsf3pVEVUoGAmwerePWzjUClvYUtwM&libraries=places"
					async
					defer
				></script> */}
        {/* <link rel="stylesheet" href="https://jquery.app/jqueryscripttop.css" /> */}
        {/* <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js" async></script> */}
        {/* <script type="text/javascript" src="https://www.jqueryscript.net/demo/Single-Elimation-Tournament-Bracket-Generator-Gracket/jquery.gracket.min.js" async></script>
				<script type="text/javascript" src="https://www.jqueryscript.net/demo/Single-Elimation-Tournament-Bracket-Generator-Gracket/test.js" async></script> */}
      </Head>
      <header
        id={style.header}
        className={`${header !== "production" ? style.logged : ""}`}
      >
        <div className={style.contain}>
          <Logo />
          <button
            type="button"
            className={`${style.toggle} ${navActive ? style.active : ""}`}
            onClick={navToggleHandle}
          >
            <span></span>
          </button>
          {header === "production" ? <HeaderStrip /> : null}
          <Navigation
            headerType={header}
            navActive={navActive}
            profileData={profileData}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
