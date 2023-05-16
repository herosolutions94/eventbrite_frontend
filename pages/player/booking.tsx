import Header from "@/components/header/header"
import React from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import BookingTable from "./booking/bookingTable"
import BookingTopBlock from "./booking/bookingTopBlock"

const Booking = () => {
	return (
		<>
			<Header pageTitle="Booking" />
			<section className={style.dashboard} id={style.booking}>
				<div className={style.contain}>
					<h5 className="mb-4">My Bookings</h5>
					<BookingTopBlock />
					<BookingTable />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Booking
