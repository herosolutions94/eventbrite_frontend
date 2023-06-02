import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import ContactForm from "@/components/contactForm"
import { PhotoStreamBox } from "@/components/images"

const Contact = (props: any) => {
	const { content } = props;
	return (
		<>
			<section id={style.in_touch}>
				<div className={style.contain}>
					<div className={style.content + " text-center"}>
						<h5 className={style.subheading}>{content?.contact_section_title}</h5>
						<h2>{content?.contact_section_heading}</h2>
					</div>
					<div className={style.main_row + " row flex-md-row-reverse"}>
						<div className="col-lg-6">
							<div className={style.contact_info_blk}>
								<div className={style.text}>
									<h5>{content?.contact_section_lower_title}</h5>
									<p>{content?.contact_section_lower_description}</p>
								</div>
								<div className={style.image}>
									<Image width={1000} height={1000} src={content?.contact_image ? content.contact_image : PhotoStreamBox} alt="" />
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
