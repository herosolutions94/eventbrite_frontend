import Header from "@/components/header/header"
import React from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import TournamentsItems from "./tournaments/tournamentsItems"
import Link from "next/link"

const Tournaments = () => {
	return (
		<>
			<Header pageTitle="Tournaments" />
			<section className={style.dashboard} id={style.booking}>
				<div className={style.contain}>
					<div className={style.table_top_block}>
						<h5 className="me-auto">My Tournaments</h5>
						<div className={style.btn_blk}>
							<Link href="/organizer/add-new-tournament" className={style.site_btn}>
								Add new Tournament
							</Link>
						</div>
					</div>
					<TournamentsItems />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Tournaments
