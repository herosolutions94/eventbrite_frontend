import React from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import Header from "@/components/header/header"
import TournamentHeader from "./tournamentDetail/tournamentHeader"
import TournamentContent from "./tournamentDetail/tournamentContent"

const TournamentDetail = () => {
	return (
		<>
			<Header pageTitle="Tournaments" />
			<section className={`${style.dashboard} ${style.organizer_detail}`} id={style.tournament_detail}>
				<div className={style.contain}>
					<div className={style.blk}>
						<TournamentHeader />
						<TournamentContent />
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default TournamentDetail
