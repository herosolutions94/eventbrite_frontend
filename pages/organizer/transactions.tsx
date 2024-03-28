import Header from "@/components/header/header"
import React from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import TransactionsTable from "./transactions/transactionsTable"
import PaymentCards from "./transactions/paymentCards"
import WithdrawBlock from "./transactions/withdrawBlock"
import { useState, useEffect } from "react"
import axios from "axios"
import Cookies from "js-cookie"

const Transactions = () => {
	const [wallet, setWallet] = useState<any[]>([]);
	const [response, setResponse] = useState<any[]>([]);
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		try {
			// const response = await axios.get(`${process.env.API_URL}/transactions/` + Cookies.get("user_id"));
			const response = await axios.get(`${process.env.API_URL}/transactions/10`);
			if (response.status === 200) {
				setWallet(response.data.data);
				setResponse(response.data.data);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<Header pageTitle="Transactions" />
			<section className={style.dashboard} id={style.booking}>
				<div className={style.contain}>
					<h5 className="mb-4">Transactions</h5>
					<PaymentCards />
					<div className="pt-5"></div>
					{wallet.length > 0 &&
						<WithdrawBlock wallet={wallet as any} />
					}
					<div className="pt-4"></div>
					<TransactionsTable
						wallet={wallet as any}
					/>
				</div>
			</section>
			{/* <Footer /> */}
		</>
	)
}

export default Transactions
