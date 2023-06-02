import React from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"
import Image from "next/image"
import { SocialFacebook, SocialGoogleStore, SocialInstagram, SocialLinkedin, SocialYelp } from "../images"

const HeaderStrip = () => {
	return (
		<>
			<div className={style.header_strip}>
				<ul className={style.sm_list}>
					<li>
						<Link href="/production/about">About us</Link>
					</li>
					<li>
						<Link href="/production/contact">Contact us</Link>
					</li>
					<li>
						<Link href="/production/privacy-policy">Privacy policy</Link>
					</li>
				</ul>
				<ul className={style.social_links}>
					<li>
						<a href="?" target="_blank">
							<Image width={60} height={60} src={SocialYelp} alt="" />
						</a>
					</li>
					<li>
						<a href="?" target="_blank">
							<Image width={60} height={60} src={SocialGoogleStore} alt="" />
						</a>
					</li>
					<li>
						<a href="?" target="_blank">
							<Image width={60} height={60} src={SocialLinkedin} alt="" />
						</a>
					</li>
					<li>
						<a href="?" target="_blank">
							<Image width={60} height={60} src={SocialInstagram} alt="" />
						</a>
					</li>
					<li>
						<a href="?" target="_blank">
							<Image width={60} height={60} src={SocialFacebook} alt="" />
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default HeaderStrip
