import React from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import Header from "@/components/header/header"
import NewTournamentForm from "./addNewTournament/newTournamentForm"
import Link from "next/link"

const AddNewTournament = () => {
	return (
		<>
			<Header pageTitle="Add New Tournament" />
			<section className={style.dashboard} id={style.new_tournament}>
				<div className={style.contain}>
					<div className={`${style.table_top_block} mt-0 align-items-center`}>
						<h5 className="me-auto">Add New Tournament</h5>
						<div className={style.btn_blk}>
							<Link href="/organizer/tournaments" className={`${style.site_btn} ${style.simple}`}>
								Back
							</Link>
						</div>
					</div>
					<NewTournamentForm />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default AddNewTournament
