import Header from "@/components/header/header"
import React, { useEffect } from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import TournamentsItems from "./tournaments/tournamentsItems"
import Link from "next/link"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useSelector, useDispatch } from "react-redux";
import { fetchMemberData } from '../../states/actions/dashboard';

const Tournaments = () => {

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchMemberData());
	}, []);
	const profileData = useSelector((state) => state.dashboard.content);
	const isLoading = useSelector((state) => state.dashboard.isLoading);
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
			<Header pageTitle="Tournaments" />
			<section className={style.dashboard} id={style.booking}>
				<div className={style.contain}>
					<div className={style.table_top_block}>
						<h5 className="me-auto">My Tournaments</h5>
						<div className={style.btn_blk}>
							{Cookies.get("role") == "organizer" ? (
								<Link href="/organizer/add-new-tournament" className={style.site_btn}>
									Add new Tournament
								</Link>
							) : (
								""
							)}
						</div>
					</div>
					<TournamentsItems />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Tournaments
