import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Pagination from "@/components/pagination"
import CategoryCard from "@/components/categoryCard"
import { PhotoBlog01, PhotoBlog02, PhotoBlog03, PhotoMainSlide } from "@/components/images"
import axios from "axios"
import Cookies from "js-cookie"
import { toast } from "react-toastify"

const WishlistsItems = () => {
	const [wishlistsItems, setWishlistsItems] = useState<any>([]);
	useEffect(() => {
		fetchWishlistsItems();
	}, []);
	
	const fetchWishlistsItems = async () => {
		try {
			const response = await axios.post(`${process.env.API_URL}/wishlist`, {
				user_id: Cookies.get("user_id"),	
			});
			if (response.status === 200) {
				setWishlistsItems(response.data.data);
			}
		} catch (error : any) {
			toast.error(error.response.data.message);
		}
	};
	return (
		<>
			<div className="row">
				{wishlistsItems.length > 0 && 
					wishlistsItems.map((data : any) => {
					return (
						<div className="col-lg-4" key={data.id}>
							<CategoryCard 
								tournamentId={data.id}
								title={data.title}
								link={`/production/tournament-detail?id=` + data.id}
								tag={data?.category?.name}
								date={data.start_date}
								text={'lorem ipsum'}
								img={process.env.ASSET_URL + data?.images[0]?.image}
							/>
						</div>
					)
				})}
			</div>
			<Pagination />
		</>
	)
}

export default WishlistsItems
