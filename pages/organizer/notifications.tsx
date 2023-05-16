import Header from "@/components/header/header"
import React from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import NotificationsTable from "./notifications/notificationsTable"

const Notifications = () => {
	return (
		<>
			<Header pageTitle="Notifications" />
			<section className={style.dashboard} id={style.notifications}>
				<div className={style.contain}>
					<h5 className="mb-4">Notifications</h5>
					<NotificationsTable />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Notifications
