import React, { useEffect , useState} from "react"
import style from "@/styles/scss/app.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import TournamentBanner from "./tournamentDetail/tournamentBanner"
import MapBlock from "./tournamentDetail/mapBlock"
import OverviewBlock from "./tournamentDetail/overviewBlock"
import TournamentTeams from "./tournamentDetail/tournamentTeams"
import ReviewsBlock from "./tournamentDetail/reviewsBlock"
import axios from "axios"
import Cookies from "js-cookie"

const TournamentDetail = () => {
	const [tournamentDetails, setTournamentDetails] = useState<any>([]);

	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		try {
			const response = await axios.get(process.env.API_URL + "/tournament-details/31", {});
			if (response.status === 200) {
				setTournamentDetails(response.data.data);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<Header pageTitle="Tournament Detail" />
			<section id={style.tournament_detail}>
				<TournamentBanner 
					details={tournamentDetails} 
					fetchData={fetchData as any}
				/>
				<div id={style.overview}>
					<div className={style.contain}>
						
						<OverviewBlock details={tournamentDetails} />
						{tournamentDetails?.teams?.length > 0 &&
							<TournamentTeams teams={tournamentDetails?.teams} />
						}
						{tournamentDetails?.reviews?.length > 0 &&
							<ReviewsBlock reviews={tournamentDetails?.reviews} />
						}
						<MapBlock />
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default TournamentDetail
