import React from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"

const Affiliate = () => {
	return (
		<>
			<section id={style.affiliate}>
				<div className={style.contain}>
					<div className={`${style.content} text-center`}>
						<h2>How we support you</h2>
					</div>
					<div className={`${style.flex_row} row`}>
						<div className="col-lg-4">
							<div className={style.inner}>
								<div className={style.txt}>
									<h4>Host protection programs</h4>
									<p>To support you in the rare event of an incident, most Airbnb bookings include property damage protection and liability insurance of up to $1M USD.</p>
									<Link href="/blog">
										<u>How you&lsquo;re protected while hosting</u>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className={style.inner}>
								<div className={style.txt}>
									<h4>Covid-19 safety guidelines</h4>
									<p>To help protect the health of our community, we&lsquo;ve partnered with experts to create safety practices for everyone, plus a cleaning process for hosts.</p>
									<Link href="/blog">
										<u>Get to know the enhanced cleaning process</u>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className={style.inner}>
								<div className={style.txt}>
									<h4>High guest standards</h4>
									<p>To give Hosts peace of mind, we offer guest identification and let you check out reviews of guests before they book. Our new Guest Standards Policy sets higher expectations for behavior.</p>
									<Link href="/blog">
										<u>Steps we take to help Hosts feel confident</u>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Affiliate
