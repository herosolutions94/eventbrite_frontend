import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoGallery01 } from "@/components/images"
type ReportProps = {
	title: string;
	subheading: string;
	content: string;
	buttonText: string;
	buttonLink: string;
	image: string;
}

const Report = (props: ReportProps) => {
	const { title, subheading, content, buttonText, buttonLink, image } = props;
	return (
		<>
			<section id={style.report}>
				<div className={style.contain}>
					<div className="row align-items-center">
						<div className="col-lg-6 col-sm-5">
							<div className={style.content}>
								<h5 className={style.subheading}>{title}</h5>
								<h2 className="h1">{subheading}</h2>
								<p>{content}</p>
								<div className={style.btn_blk + " " + style.btn_blk_desktop}>
									<a href={buttonLink} className={style.site_btn + " " + style.pop_btn}>
										{buttonText}
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-sm-7">
							<div className={style.image}>
								<Image width={1000} height={1000} src={process.env.ASSET_URL + image} alt="" />
							</div>
							<div className={style.btn_blk + " " + style.btn_blk_mobile + " justify-content-center"}>
								<a href={buttonLink} className={style.site_btn + " " + style.pop_btn}>
										{buttonText}
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Report
