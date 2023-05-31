import React from "react"
import style from "@/styles/scss/app.module.scss"
import Slider from "react-slick"
import CategoryCard from "./categoryCard"
import { PhotoBlog01, PhotoBlog02, PhotoBlog03 } from "./images"

const CATEGORIES = [
	{
		id: 1,
		title: "White Keep Assault",
		link: "/production/tournament-detail",
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog01,
	},
	{
		id: 2,
		title: "Dota 2 Tournament",
		link: "/production/tournament-detail",
		tag: "esports",
		date: "July 07, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog02,
	},
	{
		id: 3,
		title: "Winners on ESL Pro",
		link: "/production/tournament-detail",
		tag: "esports",
		date: "January 31, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog03,
	},
	{
		id: 4,
		title: "White Keep Assault",
		link: "/production/tournament-detail",
		tag: "esports",
		date: "September 14, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog01,
	},
	{
		id: 5,
		title: "Dota 2 Tournament",
		link: "/production/tournament-detail",
		tag: "esports",
		date: "July 07, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog02,
	},
	{
		id: 6,
		title: "Winners on ESL Pro",
		link: "/production/tournament-detail",
		tag: "esports",
		date: "January 31, 2021",
		text: "Maecenas tempus, tellus eget rhoncus, sem quam tempus, tellus eget rhoncus vel velit auctor aliquet",
		img: PhotoBlog03,
	},
]
type Tournament = {
	id: number
	title: string
	link: string
	tag: string
	date: string
	text: string
	img: string
}

type CategorySliderProps = {
	tournaments: Tournament[]
}
const CategorySlider = (props: CategorySliderProps) => {
	const { tournaments } = props
	var settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	}
	return (
		<Slider {...settings} className={`${style.slick_category} slick-carousel`}>
			{tournaments?.length > 0 && tournaments.map((data: any) => {
			
				return <CategoryCard 
					title={data.title}
					link="/production/tournament-detail"
					tag={data?.category?.name}
					date={data.start_date}
					text={'lorem ipsum'}
					img={process.env.ASSET_URL + data?.images[0]?.image}
				/>
			})}
		</Slider>
	)
}

export default CategorySlider
