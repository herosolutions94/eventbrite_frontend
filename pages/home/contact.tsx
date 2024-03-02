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
						{/* {content?.contact_section_title ?
							<h5 className={style.subheading}>{content?.contact_section_title}</h5>
							: */}
						<h5 className={style.subheading}>{content?.title}</h5>
						{/* } */}
						<h2>{content?.heading}</h2>
					</div>
					<div className={style.main_row + " row flex-md-row-reverse"}>
						<div className="col-lg-6">
							<div className={style.contact_info_blk}>
								<div className={style.text}>
									{/* <h5>{content?.heading}</h5> */}
									<p>{content?.description}</p>
								</div>
								<div className={style.image}>
									{content?.image ?
										<Image width={1000} height={1000} src={process.env.ASSET_URL + content.image} alt="" />
										:
										<Image width={1000} height={1000} src={process.env.ASSET_URL + content?.contact_image} alt="" />
									}

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
