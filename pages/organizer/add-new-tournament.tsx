import React, { useEffect } from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import Header from "@/components/header/header"
import NewTournamentForm from "../../components/tournament/newTournamentForm"
import Link from "next/link"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useRouter } from "next/router"

import { useSelector, useDispatch } from "react-redux";
import { fetchMemberData } from '../../states/actions/dashboard';
import { RootState } from '../../states/reducers/rootReducer'; // Replace with the actual path

import Cookies from "js-cookie"
const stripePromise = loadStripe('pk_test_51Moz1CFV8hMVqQzQH96smahOCpKUnMix9OMtfhQe3YjnaL4kpLa6An91ycTRcs26A7hZwgr0HelG4ElEdYBAEwbb00MpdTNJhb');

const AddNewTournament = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchMemberData());
	}, []);
	const profileData = useSelector((state: RootState) => state.dashboard.content);
	const isLoading = useSelector((state: RootState) => state.dashboard.isLoading);
	// const [profileData, setProfileData] = React.useState<ProfileProps | null>(null);
	const role = Cookies.get("role");
	const router = useRouter()
	useEffect(() => {
		if (profileData?.role === 'player') {
			router.push("/player")
		}
	}, [profileData]);
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
					<Elements stripe={stripePromise}>
						<NewTournamentForm />
					</Elements>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default AddNewTournament
