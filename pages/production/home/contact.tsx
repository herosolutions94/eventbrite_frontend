import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import ContactForm from "@/components/contactForm"
import { PhotoStreamBox } from "@/components/images"

const Contact = () => {

	return (
		<>
			<section id={style.in_touch}>
				<div className={style.contain}>
					<div className={style.content + " text-center"}>
						<h5 className={style.subheading}>Get in touch</h5>
						<h2>Contact Eventplus</h2>
					</div>
					<div className={style.main_row + " row flex-md-row-reverse"}>
						<div className="col-lg-6">
							<div className={style.contact_info_blk}>
								<div className={style.text}>
									<h5>Meet Eventplus</h5>
									<p>“With 14+ years of experience working and living in the South Orange County area, I am well-equipped to assist you with all your real estate needs.”</p>
								</div>
								<div className={style.image}>
									<Image width={1000} height={1000} src={PhotoStreamBox} alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Contact
