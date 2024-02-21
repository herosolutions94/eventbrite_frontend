import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Header from "@/components/header/header"
import Banner from "./home/banner"
import Footer from "@/components/footer"
import Contact from "./home/contact"
import Report from "./home/report"
import Categories from "./home/categories"
import Matches from "./home/matches"
import axios from "axios"
import Cookies from "js-cookie"

type HomePageData = {
	banner_img: string;
	banner_title: string;
	banner_des: string;
	gamers_title: string;
	gamers_sub_title: string;
	gamers_des: string;
	resource_title: string;
	resource_sub_title: string;
	resource_des: string;
	resource_btn_txt: string;
	resource_btn_link: string;
	resource_img: string;
	tournament_title: string;
	tournament_des: string;
}

const Home = () => {
	const [homePageData, setHomePageData] = useState<HomePageData | null>(null);
	const [tournaments, setTournaments] = useState<any[]>([]);
	const [trandingMatches, setTrandingMatches] = useState<any[]>([]);
	const [categories, setCategories] = useState<any[]>([]);
	const [contactUs, setContactUs] = useState<any[]>([]);

	useEffect(() => {
		fetchHomePageData();
	}, []);

	const fetchHomePageData = async () => {
		try {
			const response = await axios.get(`${process.env.API_URL}/home`);
			if (response.status === 200) {
				setHomePageData(response.data.data);
				setTournaments(response.data.tournaments);
				setCategories(response.data.categories);
				setTrandingMatches(response.data.trending_tournaments);
				let contact_content = response.data.contact_us
				contact_content = { ...contact_content, contact_section_title: "Organise a tournament today" }
				setContactUs(contact_content);
			}
		} catch (error) {
			console.log(error);
		}
	};

	if (!homePageData) {
		return <div id={style.loader}></div>;
	}
	return (
		<>
			<Header pageTitle="Home" />
			<Banner
				title={homePageData.banner_title}
				content={homePageData.banner_des}
				image={process.env.ASSET_URL + homePageData.banner_img}
				categories={categories}
			/>
			<Categories
				title={homePageData.gamers_title}
				subheading={homePageData.gamers_sub_title}
				content={homePageData.gamers_des}
				tournaments={tournaments}
			/>
			<Report
				title={homePageData.resource_title}
				subheading={homePageData.resource_sub_title}
				content={homePageData.resource_des}
				buttonText={homePageData.resource_btn_txt}
				buttonLink={homePageData.resource_btn_link}
				image={homePageData.resource_img}
			/>
			{trandingMatches.length > 0 &&
				<Matches
					trandingMatches={trandingMatches}
				/>
			}

			<Contact
				content={contactUs}
			/>
			<Footer />
		</>
	)
}

export default Home
