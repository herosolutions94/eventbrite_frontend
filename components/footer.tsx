import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"
import Logo from "./logo"
import axios from "axios";

type pageContentProps = {
	social_facebook: any;
	social_google_store: any;
	social_instagram: any;
	social_linkedin: any;
	social_yelp: any;
};
const Footer = () => {
	const currentDate = new Date()
	const [pageContent, setPageContent] = useState<pageContentProps | null>(
		null
	);

	useEffect(() => {
		getContent();
	}, []);

	const getContent = async () => {
		try {
			const res = await axios.get(
				`${process.env.API_URL}/get-site-settings`
			);
			if (res.status === 200) {
				setPageContent(res.data.data);
			}
		} catch (err) {
			console.log(err);
		}
	};
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
									<Link href="/about">About</Link>
								</li>
								<li>
									<Link href="/search">Catalogue</Link>
								</li>
								{/* <li>
									<Link href="/tournaments">Tournaments</Link>
								</li>
								<li>
									<Link href="/reviews">Reviews</Link>
								</li> */}
								<li>
									<Link href="/contact">Contact us</Link>
								</li>
								{/* <li>
									<Link href="/booking">Booking</Link>
								</li> */}
							</ul>
						</div>
						<div className={style.column3}>
							<div className={style.title}>Follow</div>
							<ul className={style.list}>
								<li>
									<a href={pageContent?.social_yelp?.value} target="_blank">
										Yelp
									</a>
								</li>
								<li>
									<a href={pageContent?.social_google_store?.value} target="_blank">
										Google Business
									</a>
								</li>
								<li>
									<a href={pageContent?.social_linkedin?.value} target="_blank">
										LinkedIn
									</a>
								</li>
								<li>
									<a href={pageContent?.social_instagram?.value} target="_blank">
										Instagram
									</a>
								</li>
								<li>
									<a href={pageContent?.social_facebook?.value} target="_blank">
										Facebook
									</a>
								</li>
							</ul>
						</div>
						<div className={style.column4}>
							<div className={style.title}>Sign up to our news letter to receive updates on our latest tournament events</div>
							<form action="" method="POST">
								<div className={style.form_blk + " " + style.input}>
									<input type="text" name="" id="" className={style.input} placeholder="Email Address" />
									<button type="submit" className={style.link_btn}></button>
								</div>
								<p>
									This site is protected by reCAPTHCHA and the <Link href="/privacy-policy">Google</Link>, <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/privacy-policy">Terms of Service</Link> apply.
								</p>
							</form>
						</div>
					</div>
					<div className={style.copyright}>
						<p>
							© {currentDate.getFullYear()} <Link href="/">Eventplus</Link>. All Rights Reserved
						</p>
						<ul className={style.terms_list}>
							<li>
								<Link href="/privacy-policy">Privacy Policy</Link>
							</li>
							<li>
								<Link href="/terms-conditions">Terms & conditions</Link>
							</li>
							<li>
								<Link href="/disclaimer">Disclaimer</Link>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
