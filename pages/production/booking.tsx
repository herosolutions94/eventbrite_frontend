import React from "react"
import style from "@/styles/scss/app.module.scss"
import SubBanner from "@/components/subBanner"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import BookingForm from "./booking/bookingForm"

const Booking = () => {
	return (
		<>
			<Header pageTitle="Booking" />
			<SubBanner title="Booking" />
			<section id={style.booking}>
				<div className={style.contain}>
					<div className={style.blk}>
						<BookingForm />
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Booking
