import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import CategoryCard from "@/components/categoryCard"
import { PhotoBlog01, PhotoBlog02, PhotoBlog03 } from "@/components/images"
import { PhotoMainSlide } from "@/components/images"
import Pagination from "@/components/pagination"
import TopFilters from "./search/topFilters"
import MapBlock from "./search/mapBlock"

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
	const showMapHandle = () => {
		setShowMap(!showMap)
	}
	return (
		<>
			<Header pageTitle="Search" />
			<section id={style.search}>
				<div className={style.contain}>
					<TopFilters />
					<div className={style.outer}>
						<div className={style.items_blk}>
							<div className="row">
								{SEARCH_RESULTS.map((data) => {
									return (
										<div className="col-lg-6 col-md-12 col-sm-6" key={data.id}>
											<CategoryCard {...data} />
										</div>
									)
								})}
							</div>
							<Pagination />
						</div>
						<div className={`${style.map_blk} ${showMap ? style.active : ""}`}>
							<MapBlock />
						</div>
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
