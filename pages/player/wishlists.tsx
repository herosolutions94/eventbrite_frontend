import Header from "@/components/header/header"
import React from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import WishlistsItems from "./wishlists/wishlistsItems"
import WishlistsTopBlock from "./wishlists/wishlistsTopBlock"

const Wishlists = () => {
	return (
		<>
			<Header pageTitle="Wishlists" />
			<section className={style.dashboard} id={style.booking}>
				<div className={style.contain}>
					<h5 className="mb-4">My Wishlists</h5>
					<WishlistsTopBlock />
					<WishlistsItems />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Wishlists
