import React from "react"
import style from "@/styles/scss/app.module.scss"
import Pagination from "@/components/pagination"
import CategoryCard from "@/components/categoryCard"
import { PhotoBlog01, PhotoBlog02, PhotoBlog03, PhotoMainSlide } from "@/components/images"

const SEARCH_RESULTS = [
	{
		id: 1,
		title: "White Keep Assault",
		link: "?",
		wishlist: true,
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog01,
	},
	{
		id: 2,
		title: "Dota 2 Tournament",
		link: "?",
		wishlist: true,
		tag: "esports",
		date: "July 07, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog02,
	},
	{
		id: 3,
		title: "Winners on ESL Pro",
		link: "?",
		wishlist: true,
		tag: "esports",
		date: "January 31, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog03,
	},
	{
		id: 4,
		title: "Keep Winner DOTA",
		link: "?",
		wishlist: true,
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoMainSlide,
	},
	{
		id: 5,
		title: "White Keep Assault",
		link: "?",
		wishlist: true,
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog01,
	},
	{
		id: 6,
		title: "Dota 2 Tournament",
		link: "?",
		wishlist: true,
		tag: "esports",
		date: "July 07, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog02,
	},
	{
		id: 7,
		title: "Winners on ESL Pro",
		link: "?",
		wishlist: true,
		tag: "esports",
		date: "January 31, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog03,
	},
	{
		id: 8,
		title: "Keep Winner DOTA",
		link: "?",
		wishlist: true,
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoMainSlide,
	},
]
const WishlistsItems = () => {
	return (
		<>
			<div className="row">
				{SEARCH_RESULTS.map((data) => {
					return (
						<div className="col-lg-4" key={data.id}>
							<CategoryCard {...data} />
						</div>
					)
				})}
			</div>
			<Pagination />
		</>
	)
}

export default WishlistsItems
