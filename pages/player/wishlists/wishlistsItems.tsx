import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Pagination from "@/components/pagination"
import CategoryCard from "@/components/categoryCard"
import { PhotoBlog01, PhotoBlog02, PhotoBlog03, PhotoMainSlide } from "@/components/images"


const WishlistsItems = (props: any) => {
	const { wishlistsItems, renderPageNumbers, lastPage } = props
	return (
		<>
			<div className="row">
				{wishlistsItems && 
					wishlistsItems.map((data : any) => {
					return (
						<div className="col-lg-4" key={data.id}>
							<CategoryCard 
								tournamentId={data.id}
								title={data.title}
								link={`/production/tournament-detail/` + data.id}
								tag={data?.category?.name}
								date={data.start_date}
								text={'lorem ipsum'}
								img={process.env.ASSET_URL + data?.images[0]?.image}
								wishlist={true}
							/>
						</div>
					)
				})}
			</div>
			{wishlistsItems?.length > 0 ?
			<div className={style.pagination}>
				<ul>
				<li>
					<button type="button" className={style.prev}></button>
				</li>
					{renderPageNumbers()}
				<li>
					<a href="#">...</a>
				</li>
				<li>
					<a href="#">{lastPage}</a>
				</li>
				<li>
					<button type="button" className={style.next}></button>
				</li>
				</ul>
			</div>
			: null}
		</>
	)
}

export default WishlistsItems
