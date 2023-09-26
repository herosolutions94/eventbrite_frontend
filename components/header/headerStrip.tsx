import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"
import Image from "next/image"
import { SocialFacebook, SocialGoogleStore, SocialInstagram, SocialLinkedin, SocialYelp } from "../images"
import axios from "axios";

type pageContentProps = {
	social_facebook: any;
	social_google_store: any;
	social_instagram: any;
	social_linkedin: any;
	social_yelp: any;
  };
const HeaderStrip = () => {
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
			<div className={style.header_strip}>
				<ul className={style.sm_list}>
					<li>
						<Link href="/about">About us</Link>
					</li>
					<li>
						<Link href="/contact">Contact us</Link>
					</li>
					<li>
						<Link href="/privacy-policy">Privacy policy</Link>
					</li>
				</ul>
				<ul className={style.social_links}>
					<li>
						<a 
							href={pageContent?.social_yelp?.value}
							target="_blank"
						>
							<Image width={60} height={60} src={SocialYelp} alt="" />
						</a>
					</li>
					<li>
						<a 
							href={pageContent?.social_google_store?.value}
							target="_blank"
						>
							<Image width={60} height={60} src={SocialGoogleStore} alt="" />
						</a>
					</li>
					<li>
						<a 
							href={pageContent?.social_linkedin?.value}
							target="_blank">
							<Image width={60} height={60} src={SocialLinkedin} alt="" />
						</a>
					</li>
					<li>
						<a 
							href={pageContent?.social_instagram?.value}
							target="_blank">
							<Image width={60} height={60} src={SocialInstagram} alt="" />
						</a>
					</li>
					<li>
						<a 
							href={pageContent?.social_facebook?.value}
							target="_blank">
							<Image width={60} height={60} src={SocialFacebook} alt="" />
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default HeaderStrip
