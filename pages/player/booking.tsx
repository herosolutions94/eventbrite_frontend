import Header from "@/components/header/header"
import React from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import TournamentsItems from "./booking/tournamentsItems"
import Link from "next/link"

const Booking = () => {
	return (
		<>
			<Header pageTitle="My Bookings" />
			<section className={style.dashboard} id={style.booking}>
				<div className={style.contain}>
					<div className={style.table_top_block}>
						<h5 className="me-auto">My Bookings</h5>
					</div>
					<TournamentsItems />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Booking
