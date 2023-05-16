import React from "react"
import style from "@/styles/scss/app.module.scss"
import SubBanner from "@/components/subBanner"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import TournamentsList from "./tournaments/tournamentsList"

const Tournaments = () => {
	return (
		<>
			<Header pageTitle="Tournaments" />
			<SubBanner title="Tournaments" />
			<section id={style.tournaments}>
				<div className={style.contain}>
					<TournamentsList />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Tournaments
