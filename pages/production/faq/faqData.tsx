import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss"
import FaqBlock from "@/components/faqBlock"

type FaqDataProps = {
	faqlist01: {
	  id: number;
	  question: string;
	  answer: string;
	}[];
	faqlist02: {
	  id: number;
	  question: string;
	  answer: string;
	}[];
  };
  

const FaqData: React.FC<FaqDataProps> = ({ faqlist01, faqlist02 }) => {

	return (
		<>
			<h4 className="mb-4">General questions</h4>
			<div className={style.faq_lst}>
				{faqlist01.map((data) => {
					return <FaqBlock {...data} key={data.id} />
				})}
			</div>
			<hr className="my-5" />
			<h4 className="mb-4">Most asked questions</h4>
			<div className={style.faq_lst}>
				{faqlist02.map((data) => {
					return <FaqBlock {...data} key={data.id} />
				})}
			</div>
		</>
	)
}

export default FaqData
