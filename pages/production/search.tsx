import React, { useState,useEffect } from "react"
import style from "@/styles/scss/app.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import CategoryCard from "@/components/categoryCard"
import { PhotoBlog01, PhotoBlog02, PhotoBlog03 } from "@/components/images"
import { PhotoMainSlide } from "@/components/images"
import Pagination from "@/components/pagination"
import TopFilters from "./search/topFilters"
import MapBlock from "./search/mapBlock"
import axios from "axios"

const SEARCH_RESULTS = [
	{
		id: 1,
		title: "White Keep Assault",
		link: "/production/tournament-detail",
		wishlist: true,
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog01,
	},
	{
		id: 2,
		title: "Dota 2 Tournament",
		link: "/production/tournament-detail",
		wishlist: true,
		tag: "esports",
		date: "July 07, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog02,
	},
	{
		id: 3,
		title: "Winners on ESL Pro",
		link: "/production/tournament-detail",
		wishlist: false,
		tag: "esports",
		date: "January 31, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog03,
	},
	{
		id: 4,
		title: "Keep Winner DOTA",
		link: "/production/tournament-detail",
		wishlist: false,
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoMainSlide,
	},
	{
		id: 5,
		title: "White Keep Assault",
		link: "/production/tournament-detail",
		wishlist: true,
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog01,
	},
	{
		id: 6,
		title: "Dota 2 Tournament",
		link: "/production/tournament-detail",
		wishlist: true,
		tag: "esports",
		date: "July 07, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog02,
	},
	{
		id: 7,
		title: "Winners on ESL Pro",
		link: "/production/tournament-detail",
		wishlist: false,
		tag: "esports",
		date: "January 31, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog03,
	},
	{
		id: 8,
		title: "Keep Winner DOTA",
		link: "/production/tournament-detail",
		wishlist: false,
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoMainSlide,
	},
	{
		id: 9,
		title: "White Keep Assault",
		link: "/production/tournament-detail",
		wishlist: true,
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog01,
	},
	{
		id: 10,
		title: "Dota 2 Tournament",
		link: "/production/tournament-detail",
		wishlist: true,
		tag: "esports",
		date: "July 07, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog02,
	},
	{
		id: 11,
		title: "Winners on ESL Pro",
		link: "/production/tournament-detail",
		wishlist: false,
		tag: "esports",
		date: "January 31, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog03,
	},
	{
		id: 12,
		title: "Keep Winner DOTA",
		link: "/production/tournament-detail",
		wishlist: false,
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoMainSlide,
	},
	{
		id: 13,
		title: "Winners on ESL Pro",
		link: "/production/tournament-detail",
		wishlist: false,
		tag: "esports",
		date: "January 31, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog03,
	},
	{
		id: 14,
		title: "Keep Winner DOTA",
		link: "/production/tournament-detail",
		wishlist: false,
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoMainSlide,
	},
	{
		id: 15,
		title: "White Keep Assault",
		link: "/production/tournament-detail",
		wishlist: true,
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog01,
	},
]


const Search = () => {
	const [showMap, setShowMap] = useState(false)
	const [activeTab, setActiveTab] = useState('list');

	const [tournaments, setTournaments] = useState<any | null>([]);

	useEffect(() => {
		fetchTournaments();
	}, []);
	
	const fetchTournaments = async () => {
		try {
			const response = await axios.get(`${process.env.API_URL}/tournaments`);
			if (response.status === 200) {
				setTournaments(response.data.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	if (!tournaments) {
		return <div>Loading...</div>;
	}

	const showMapHandle = () => {
		setShowMap(!showMap)
	}
	return (
		<>
			<Header pageTitle="Search" />
			<section id={style.search}>
				<div className={style.contain}>
					<TopFilters  setActiveTab={setActiveTab} activeTab={activeTab} />
					<div className={style.outer}>
						{activeTab === "list" && (
						<div className="w-100">
							<div className="row">
								{tournaments.map((data:any) => {
									return (
										<div className="col-lg-4 col-md-6 col-sm-4" key={data.id}>
											<CategoryCard 
												title={data.title}
												link="/production/tournament-detail"
												tag={data?.category?.name}
												date={data.start_date}
												text={'lorem ipsum'}
												img={data?.images[0]?.image}
											/>
										</div>
									)
								})}
							</div>
							<Pagination />
						</div>
						)}
						{activeTab === "map" && (
							<div className={`${style.map_blk} ${showMap ? style.active : ""} w-100`}>
								<MapBlock tournaments={tournaments}/>
							</div> 
						)}
					</div>
				</div>
				<div className={style.map_btn_blk}>
					<button type="button" className={`${style.site_btn} w-100`} onClick={showMapHandle}>
						{!showMap ? "Show Map" : "Hide Map"}
					</button>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Search
