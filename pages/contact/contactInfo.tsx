import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"

const ContactInfo = (props: any) => {
	const { content } = props;
	return (
		<>
			<div className={style.content}>
				<h5 className={style.subheading}>{content?.title}</h5>
				<h2>{content?.heading}</h2>
				<p>{content?.description}</p>
				<ul className={`${style.info_list} mt-5`}>
					<li>
						<Image width={100} height={100} src="/images/icon-location.svg" alt="Location" />
						<span>
							{content?.address}
						</span>
					</li>
					<li>
						<Image width={100} height={100} src="/images/icon-sms-tracking.svg" alt="Envelope" />
						<a href="mailto:support@ukvisajobs.com">{content?.email}</a>
					</li>
					<li>
						<Image width={100} height={100} src="/images/icon-call-incoming.svg" alt="Phone" />
						<a href="tel:0112-345-345-5544">{content?.phone}</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default ContactInfo
