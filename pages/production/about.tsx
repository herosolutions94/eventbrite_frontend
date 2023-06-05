import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss"
import SubBanner from "@/components/subBanner"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import { PhotoAbout } from "@/components/images"
import Intro from "./about/intro"
import Affiliate from "./about/affiliate"
import Contact from "./home/contact"
import axios from "axios"
type IAbout = {
	title: string;
	content: string;
	image: string;
}
const About: React.FC = () => {

	const [aboutPageData, setAboutPageData] = useState<IAbout | null>(
		null
	  );
	useEffect(() => {
		fetchAboutContent();
	}, []);
	const fetchAboutContent = async () => {
		try {
		  const res = await axios.get(
			`${process.env.API_URL}/about-us`
		  );
		  if (res.status === 200) {
			setAboutPageData(res.data.data);
		  }
		} catch (err) {
		  console.log(err);
		}
	  };

	  if (!aboutPageData) {
		return <div id={style.loader}></div>;
	  }

	return (
		
		<>
		
			<Header pageTitle={aboutPageData?.title} />
			<SubBanner 
				title={aboutPageData?.title} 
				background={aboutPageData?.image ? process.env.ASSET_URL + aboutPageData.image : ''}
			/>
			<Intro content={aboutPageData}/>
			<Affiliate content={aboutPageData}/>
			<Contact content={aboutPageData}/>
			<Footer />
	
		</>
	)
}

export default About
