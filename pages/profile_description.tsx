import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import { PhotoAbout } from "@/components/images";
import Smallbanner from "./profile-description/smallbanner";
import Sellerdetail from "./profile-description/sellerdetails";

export default function Profile_description() {
  return (
    <div>
      <Header pageTitle="Profile description" />
      <Smallbanner />
      <Sellerdetail />
      <Footer />
    </div>
  );
}
