import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import SubBanner from "@/components/subBanner"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import FaqData from "./faq/faqData"
import axios from "axios"

type FaqDataItem = {
    id: number;
    question: string;
    answer: string;
}

const Faq = () => {
	const [FAQ_LIST_01, setFAQ_LIST_01] = useState<FaqDataItem[]>([]);
	const [FAQ_LIST_02, setFAQ_LIST_02] = useState<FaqDataItem[]>([]);

	useEffect(() => {
		fetchFaqData();
	}, []);

	const fetchFaqData = async () => {
		try {
		  const response = await axios.get(
			`${process.env.API_URL}/faq`
		  );

		  if (response.status === 200) {
			setFAQ_LIST_01(response.data.data);
			setFAQ_LIST_02(response.data.data);
		  }
		} catch (error) {
		  console.log(error);
		}
	};
	

	if (FAQ_LIST_01.length === 0 || FAQ_LIST_02.length === 0) {
		return <div id={style.loader}></div>;
	}

	return (
		<>
			<Header pageTitle="FAQ's" />
			<SubBanner title="FAQ's" />
			<section id={style.faq}>
				<div className={style.contain}>
					<FaqData faqlist01={FAQ_LIST_01} faqlist02={FAQ_LIST_02} />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Faq
