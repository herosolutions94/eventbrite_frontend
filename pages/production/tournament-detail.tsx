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
		const fetchData = async () => {
		  try {
			const response = await axios.get(process.env.API_URL + "/tournament-details/1", {});
			setTournamentDetails(response.data.data);
			
		  } catch (error) {
			console.error("Error fetching tournament details:", error);
			setTournamentDetails({});
		  }
		};
	  
		fetchData();
		// const reviews= tournamentDetails?.reviews;
		
	  }, []);
	  console.log(tournamentDetails);
	


	return (
		<>
			<Header pageTitle="Tournament Detail" />
			<section id={style.tournament_detail}>
				<TournamentBanner details={tournamentDetails} />
				<div id={style.overview}>
					<div className={style.contain}>
						<OverviewBlock details={tournamentDetails} />
						<TournamentTeams teams={tournamentDetails?.teams} />
						<ReviewsBlock reviews={tournamentDetails?.reviews} />
						<MapBlock />
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default TournamentDetail
