import React from "react"
import style from "@/styles/scss/app.module.scss"
import Slider from "react-slick"
import CategoryCard from "./categoryCard"
import { PhotoBlog01, PhotoBlog02, PhotoBlog03 } from "./images"

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
			{tournaments?.length > 0 && tournaments.map((data: any, index: number) => {
			
				return <CategoryCard 
					tournamentId={data.id}
					title={data.title}
					link={`/production/tournament-detail/` + data.id}
					tag={data?.category?.name}
					date={data.start_date}
					text={'lorem ipsum'}
					img={process.env.ASSET_URL + data?.images[0]?.image}
					key={index}
				/>
			})}
		</Slider>
	)
}

export default CategorySlider
