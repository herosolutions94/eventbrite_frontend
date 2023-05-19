import React from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"
import Image from "next/image"
import { PhotoAboutMe } from "@/components/images"

const Intro = (props: any) => {
	const { content } = props;
	console.log(content);
	const firstTwoWords = content?.heading.split(' ').slice(0,2).join(' ');
	const restOfTheWords = content?.heading.split(' ').slice(2).join(' ');
	return (
		<>
			<section id={style.intro}>
				<div className={style.contain}>
					<div className="row">
						<div className="col-lg-5">
							<div className={style.content}>
								<h2>
								{firstTwoWords} <strong>{restOfTheWords}</strong>
								</h2>
								{content?.description &&
									<p className="h4">{content.description}</p>
								}
								<div className={`${style.btn_blk} mt-5`}>
									<Link 
										href={content?.btn_link ? content.btn_link : ''} 
										className={style.site_btn}>
										{content?.btn_text}
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-7">
							{content?.des_image  &&
								<div className={style.image}>
									<Image width={1000} height={1000} src={content?.des_image} alt="" />
								</div>
							}

						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Intro
