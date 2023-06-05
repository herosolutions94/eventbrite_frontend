import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss";
import TermsContent from "./terms-conditions/termsContent";
import SubBanner from "@/components/subBanner";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import axios from "axios";

type TermsAndConditionsData = {
  title: string;
  content: string;
  image: string;
};

const TermsConditions: React.FC = () => {
  const [termsAndConditions, setTermsAndConditions] = useState<
    TermsAndConditionsData | null
  >(null);

  useEffect(() => {
    getTermsAndConditions();
  }, []);

  const getTermsAndConditions = async () => {
    try {
      const res = await axios.get(
        `${process.env.API_URL}/terms-and-conditions`
      );
      if (res.status === 200) {
        setTermsAndConditions(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!termsAndConditions) {
    return <div id={style.loader}></div>;
  }

  return (
    <>
      <Header pageTitle={termsAndConditions.title} />
      <SubBanner
        title={termsAndConditions.title}
        background={process.env.ASSET_URL + termsAndConditions.image}
      />
      <section id={style.terms}>
        <div className={style.contain}>
          <TermsContent content={termsAndConditions.content} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsConditions;
