import Header from "@/components/header/header"
import React from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import TransactionsTable from "./transactions/transactionsTable"
import PaymentCards from "./transactions/paymentCards"

const Transactions = () => {
	return (
		<>
			<Header pageTitle="Transactions" />
			<section className={style.dashboard} id={style.booking}>
				<div className={style.contain}>
					<h5 className="mb-4">Transactions</h5>
					<PaymentCards />
					<div className="pt-5"></div>
					<TransactionsTable />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Transactions
