"use client";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "@/slices/userSlice";
import { AppDispatch, RootState } from "@/store/store";

import React, { useEffect } from "react";
import style from "@/styles/scss/app.module.scss";
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import NewCreditBuyForm from "../../components/new-credit-form";
// Replace with the actual path
const stripePromise = loadStripe(
    "pk_test_51Moz1CFV8hMVqQzQH96smahOCpKUnMix9OMtfhQe3YjnaL4kpLa6An91ycTRcs26A7hZwgr0HelG4ElEdYBAEwbb00MpdTNJhb"
  );

const BuyCredits = () => {
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
      <Header pageTitle="Buy Credits" profileData={profileData} />
      <section className={style.dashboard} id={style.new_tournament}>
        <div className={style.contain}>
            <div className={`${style.table_top_block} mt-0 align-items-center`}>
                <h5 className="me-auto">Buy Credits</h5>
            </div>
            <div className={style.credits_blk}>
                <ul className={style.blans}>
                    <li>Available Credite: <span className={style.price}>{profileData?.total_credits} points</span></li>
                    {/* <li>Spent Credits: <span>$86</span></li> */}
                </ul>
            </div>
            <Elements stripe={stripePromise}>
                <NewCreditBuyForm />
          </Elements>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BuyCredits;
