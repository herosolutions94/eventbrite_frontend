import React from "react"
import style from "@/styles/scss/app.module.scss"

const BookingContent = () => {
	return (
		<>
			<div className={`${style.blk} ${style.detail_blk}`}>
				<h4 className="mb-5">
					Booking No: <span className={style.text_prime}>#000010</span>
				</h4>
				<ul className={style.list}>
					<li>
						<strong>Name:</strong>
						<span>Samira Jones</span>
					</li>
					<li>
						<strong>Phone Number:</strong>
						<span>02077829920</span>
					</li>
					<li>
						<strong>Email Address:</strong>
						<span>buyer@gmail.com</span>
					</li>
					<li>
						<strong>Price:</strong>
						<span>$320.00</span>
					</li>
					<li>
						<strong>From Date &amp; Time:</strong>
						<span>Wed, 10 Nov 2021 - 7:00 - 8:00</span>
					</li>
					<li>
						<strong>Until Date &amp; Time:</strong>
						<span>Fri, 12 Nov 2021 - 7:00 - 8:00</span>
					</li>
					<li>
						<strong>Address:</strong>
						<span>13656 N 12th St Tampa, FL 33613 New York</span>
					</li>
					<li>
						<strong>Comments:</strong>
						<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus fugiat sapiente, eius facere neque maiores expedita quas aspernatur. Illo voluptatem obcaecati doloremque blanditiis, eius error odio possimus nulla eligendi.</span>
					</li>
				</ul>
			</div>
		</>
	)
}

export default BookingContent
