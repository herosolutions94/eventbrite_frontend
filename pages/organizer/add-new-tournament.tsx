"use client";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "@/slices/userSlice";
import { AppDispatch, RootState } from "@/store/store";

import React, { useEffect } from "react";
import style from "@/styles/scss/app.module.scss";
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import NewTournamentForm from "../../components/tournament/newTournamentForm";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
// Replace with the actual path

import Cookies from "js-cookie";
const stripePromise = loadStripe(
  "pk_test_51Moz1CFV8hMVqQzQH96smahOCpKUnMix9OMtfhQe3YjnaL4kpLa6An91ycTRcs26A7hZwgr0HelG4ElEdYBAEwbb00MpdTNJhb"
);

const AddNewTournament = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    // Get rowId or any other necessary data
    const rowId = 123; // Replace with the actual rowId or data you need

    // Dispatch the fetchUsers action with the payload
    dispatch(fetchUsers({ rowId }));
  }, [dispatch]);
  const { profileData, loading, value } = useSelector(
    (state: RootState) => state.user
  );
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (
        router.asPath !== url &&
        !confirm("Are you sure you want to continue?")
      ) {
        router.events.emit("routeChangeError");
        throw new Error("Abort route change. Please ignore this error.");
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);
  useEffect(() => {
    if (profileData?.role === "player") {
      router.push("/player");
    }
  }, [profileData]);
  if (loading) {
    return (
      <div className={style.loading_page}>
        <img src="/images/loading.gif" />
      </div>
    );
  }
  return (
    <>
      <Header pageTitle="Add New Tournament" profileData={profileData} />
      <section className={style.dashboard} id={style.new_tournament}>
        <div className={style.contain}>
          <div className={`${style.table_top_block} mt-0 align-items-center`}>
            <h5 className="me-auto">Add New Tournament</h5>
            <div className={style.btn_blk}>
              <Link
                href="/organizer/tournaments"
                className={`${style.site_btn} ${style.simple}`}
              >
                Back
              </Link>
            </div>
          </div>
          {/* <Elements stripe={stripePromise}> */}
          <NewTournamentForm />
          {/* </Elements> */}
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default AddNewTournament;
