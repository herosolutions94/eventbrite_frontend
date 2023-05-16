import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"

const ContactInfo = () => {
	return (
		<>
			<div className={style.content}>
				<h5 className={style.subheading}>Contact us</h5>
				<h2>Connect With Our Best Support Team To Grow Your Business</h2>
				<p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
				<ul className={`${style.info_list} mt-5`}>
					<li>
						<Image width={100} height={100} src="/images/icon-location.svg" alt="Location" />
						<span>
							Kemp House, 152 - 160 City Road, <br /> London, EC1V 2NX
						</span>
					</li>
					<li>
						<Image width={100} height={100} src="/images/icon-sms-tracking.svg" alt="Envelope" />
						<a href="mailto:support@ukvisajobs.com">support@ukvisajobs.com</a>
					</li>
					<li>
						<Image width={100} height={100} src="/images/icon-call-incoming.svg" alt="Phone" />
						<a href="tel:0112-345-345-5544">0112-345-345-5544</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default ContactInfo
