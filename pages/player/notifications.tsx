import Header from "@/components/header/header"
import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import NotificationsTable from "./notifications/notificationsTable"
import axios from "axios";


const Notifications = () => {
	const [pageContent, setPageContent] = useState<any | null>(
		null
	  );
	
	  useEffect(() => {
		getContent();
	  }, []);
	
	  const getContent = async () => {
		try {
		  const res = await axios.get(
			`${process.env.API_URL}/get-notifications`
		  );
		  if (res.status === 200) {
			console.log(res.data.data);
			setPageContent(res.data.data);
		  }
		} catch (err) {
		  console.log(err);
		}
	  };
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
