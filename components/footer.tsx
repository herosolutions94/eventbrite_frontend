import React from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"
import Logo from "./logo"

const Footer = () => {
	return (
		<>
			<footer id={style.footer}>
				<div className={style.contain}>
					<div className={style.main_row + " row justify-content-between"}>
						<div className={style.column1}>
							<Logo />
						</div>
						<div className={style.column2}>
							<div className={style.title}>Quick Links</div>
							<ul className={style.list}>
								<li>
									<Link href="/production/about">About</Link>
								</li>
								<li>
									<Link href="/production/search">Catalogue</Link>
								</li>
								<li>
									<Link href="/production/tournaments">Tournaments</Link>
								</li>
								<li>
									<Link href="/production/reviews">Reviews</Link>
								</li>
								<li>
									<Link href="/production/contact">Contact us</Link>
								</li>
								<li>
									<Link href="/production/booking">Booking</Link>
								</li>
							</ul>
						</div>
						<div className={style.column3}>
							<div className={style.title}>Follow</div>
							<ul className={style.list}>
								<li>
									<a href="?" target="_blank">
										Yelp
									</a>
								</li>
								<li>
									<a href="?" target="_blank">
										Google Business
									</a>
								</li>
								<li>
									<a href="?" target="_blank">
										LinkedIn
									</a>
								</li>
								<li>
									<a href="?" target="_blank">
										Instagram
									</a>
								</li>
								<li>
									<a href="?" target="_blank">
										Facebook
									</a>
								</li>
							</ul>
						</div>
						<div className={style.column4}>
							<div className={style.title}>Sign up to our newsletter</div>
							<form action="" method="POST">
								<div className={style.form_blk + " " + style.input}>
									<input type="text" name="" id="" className={style.input} placeholder="Email Address" />
									<button type="submit" className={style.link_btn}></button>
								</div>
								<p>
									This site is protected by reCAPTHCHA and the <Link href="?">Google</Link>, <Link href="?">Privacy Policy</Link> and <Link href="?">Terms of Service</Link> apply.
								</p>
							</form>
						</div>
					</div>
					<div className={style.copyright}>
						<p>
							© 2023 <Link href="/">Eventplus</Link>. All Rights Reserved
						</p>
						<ul className={style.terms_list}>
							<li>
								<Link href="/production/privacy-policy">Privacy Policy</Link>
							</li>
							<li>
								<Link href="/production/terms-conditions">Terms & conditions</Link>
							</li>
							<li>
								<Link href="/production/disclaimer">Disclaimer</Link>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
