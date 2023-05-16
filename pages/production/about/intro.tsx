import React from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"
import Image from "next/image"
import { PhotoAboutMe } from "@/components/images"

const Intro = () => {
	return (
		<>
			<section id={style.intro}>
				<div className={style.contain}>
					<div className="row">
						<div className="col-lg-5">
							<div className={style.content}>
								<h2>
									We Are Shaping <strong>The Future</strong>
								</h2>
								<p className="h4">Dolorem repellat, reiciendis sequi rerum quo aliquam consequuntur vitae et architecto aliquid? Ratione autem eligendi vel sint repudiandae!</p>
								<p>Odit sint debitis soluta perferendis totam aperiam hic eum numquam dolore laboriosam eius id odio commodi, expedita accusamus amet obcaecati ipsum dicta, fuga maxime reiciendis.</p>
								<div className={`${style.btn_blk} mt-5`}>
									<Link href="/contact" className={style.site_btn}>
										Get a Call Back
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-7">
							<div className={style.image}>
								<Image width={1000} height={1000} src={PhotoAboutMe} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Intro
