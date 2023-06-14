import React from "react"
import style from "@/styles/scss/app.module.scss"
import { IconCalendar } from "./images"
import Image from "next/image"
import Link from "next/link"
import RatingStars from "./ratingStars"
import axios from "axios"
import { toast } from 'react-toastify';
import Cookies from "js-cookie"

const CategoryCard = (props: any) => {
	const { tournamentId,title, link, tag, date, text, img, wishlist, rating } = props
	const AddToWishlist = async () => {
		try {
			const user_id = Cookies.get("user_id");
			if(!user_id) {
				toast.error("Please login first");
				return;
			}
			const response = await axios.post(`${process.env.API_URL}/add-to-wishlist`, {
				tournament_id: tournamentId,
				user_id: Cookies.get("user_id"),
			});
			if (response.status === 200) {
				toast.success("Added to wishlist");
				const wishList = JSON.parse(localStorage.getItem("wishlist") || "[]");
				wishList.push(tournamentId);
				localStorage.setItem("wishlist", JSON.stringify(wishList));
			}
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			<div className={style.category_card}>
				<button 
					type="button" 
					className={`${style.heart} ${wishlist ? `${style.fill}` : ""}`}
					onClick={AddToWishlist}
				></button>
				<div className={style.fig}>
					<Image width={1000} height={1000} src={img} alt="" />
				</div>
				<div className={style.txt}>
					<span className={style.tag}>{tag}</span>
					<h4>
						<Link 
							href={link}
						>{title}</Link>
					</h4>
					<div className={style.date}>
						<Image width={100} height={100} src={IconCalendar} alt="" /> {date}
					</div>
					<RatingStars value={rating} />
					<p>{text}</p>
				</div>
			</div>
		</>
	)
}

export default CategoryCard
