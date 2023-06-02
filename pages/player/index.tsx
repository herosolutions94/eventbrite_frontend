import Header from "@/components/header/header"
import React from "react"
import Account from "./dashboard/account"
import Footer from "@/components/footer"

const Dashboard = () => {
	return (
		<>
			<Header pageTitle="Dashboard" />
			<Account />
			<Footer />
		</>
	)
}

export default Dashboard
