import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss";
import TermsContent from "./privacy-policy/termsContent";
import SubBanner from "@/components/subBanner";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import axios from "axios";

type PrivacyPolicyData = {
  title: string;
  content: string;
  image: string;
};

const PrivacyPolicy: React.FC = () => {

  const [privacyPolicy, setPrivacyPolicy] = useState<PrivacyPolicyData | null>(
    null
  );

  useEffect(() => {
    getPrivacyPolicy();
  }, []);

  const getPrivacyPolicy = async () => {
    try {
      const res = await axios.get(
        `${process.env.API_URL}/privacy-policy`
      );
      if (res.status === 200) {
		setPrivacyPolicy(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!privacyPolicy) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header pageTitle={privacyPolicy.title} />
      <SubBanner
        title={privacyPolicy.title}
        background={process.env.ASSET_URL + privacyPolicy.image}
      />
      <section id={style.terms}>
        <div className={style.contain}>
          <TermsContent content={privacyPolicy.content} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
