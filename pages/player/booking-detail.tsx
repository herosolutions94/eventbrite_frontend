import Header from "@/components/header/header"
import React from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import BookingContent from "./bookingDetail/bookingContent"

const BookingDetail = () => {
	return (
		<>
			<Header pageTitle="Booking Detail" />
			<section className={style.dashboard} id={style.booking}>
				<div className={style.contain}>
					<h5 className="mb-4">Booking Detail</h5>
					<BookingContent />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default BookingDetail
