import React from "react"
import style from "@/styles/scss/app.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import TournamentBanner from "./tournamentDetail/tournamentBanner"
import MapBlock from "./tournamentDetail/mapBlock"
import OverviewBlock from "./tournamentDetail/overviewBlock"
import TournamentTeams from "./tournamentDetail/tournamentTeams"
import ReviewsBlock from "./tournamentDetail/reviewsBlock"

const TournamentDetail = () => {
	return (
		<>
			<Header pageTitle="Tournament Detail" />
			<section id={style.tournament_detail}>
				<TournamentBanner />
				<div id={style.overview}>
					<div className={style.contain}>
						<OverviewBlock />
						<TournamentTeams />
						<ReviewsBlock />
						<MapBlock />
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default TournamentDetail
