import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import TournamentBanner from "../../tournamentDetail/tournamentBanner"
import MapBlock from "../../tournamentDetail/mapBlock"
import OverviewBlock from "../../tournamentDetail/overviewBlock"
import TournamentTeams from "../../tournamentDetail/tournamentTeams"
import ReviewsBlock from "../../tournamentDetail/reviewsBlock"
import axios from "axios"
import Cookies from "js-cookie"
import { useRouter } from 'next/router';
import ReviewPopup from "../../tournamentDetail/reviewPopup"
import TournamentMatches from "@/components/tournament-matches"

const TournamentDetail = () => {
	const [tournamentDetails, setTournamentDetails] = useState<any>([]);
	const [teamsCount, setTeamsCount] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const router = useRouter();
	const { id } = router.query;
	const [addReview, setAddReview] = useState<boolean>(false);
	const addReviewHandle = () => {
		setAddReview(!addReview);
	}
// console.log(id);

	useEffect(() => {
		fetchData(id);
	}, [id]);
	const fetchData = async (id:any) => {
		try {
			const response = await axios.get(process.env.API_URL + "/tournament-details/" + id, {});
			// console.log(response)
			if (response.status === 200) {
				setIsLoading(false)
				setTournamentDetails(response.data.data);
				setTeamsCount(response.data.teamsCount);
			}
		} catch (error) {
			console.log(error);
		}
	};
	if(isLoading ){
		return <div id={style.loader}></div>;
	}
	return (
		<>
			<Header pageTitle="Tournament Detail" />
			<section id={style.tournament_detail}>
				{
					tournamentDetails?.status===0 ?
					<div className="alert alert-danger">Invalid request</div>
				:
				<>
					<TournamentBanner
						details={tournamentDetails}
						fetchData={fetchData as any}
						teamsCount={teamsCount}
					/>
					<div id={style.overview}>
						<div className={style.contain}>

							<OverviewBlock details={tournamentDetails} />
							{tournamentDetails?.teams?.length > 0 &&
								<TournamentTeams teams={tournamentDetails?.teams} />
							}
							{tournamentDetails?.reviews?.length > 0 &&
								<>
									<ReviewsBlock reviews={tournamentDetails?.reviews} />
									<div className={`${style.btn_blk} justify-content-center mb-5`}>
										<button type="button" className={style.site_btn} onClick={addReviewHandle}>Add Review</button>
									</div>
									{
										addReview ? <ReviewPopup popupClose={addReviewHandle} /> : null
									}
								</>
							}
							<MapBlock />
						</div>
					</div>
				</>
			}
			</section>
			{
				tournamentDetails?.single_brackets?.length > 0 ?
			
			<TournamentMatches matches={tournamentDetails?.single_brackets} />
			:
			""
}
			<Footer />
		</>
	)
}

export default TournamentDetail
