import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import TournamentBanner from "../../tournamentDetail/tournamentBanner";
import MapBlock from "../../tournamentDetail/mapBlock";
import OverviewBlock from "../../tournamentDetail/overviewBlock";
import TournamentTeams from "../../tournamentDetail/tournamentTeams";
import ReviewsBlock from "../../tournamentDetail/reviewsBlock";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import ReviewPopup from "../../tournamentDetail/reviewPopup";
import TournamentMatches from "@/components/tournament-matches";
import Image from "next/image";
import {
  Badge,
  CaretDown,
  CheckCircle,
  PhotoTeam01,
} from "@/components/images";
import CompletedMatch from "@/components/rounds/completedMatch";
import RoundOneCompleted from "@/components/rounds/roundOneCompleted";
import LeafLetMapSingle from "@/components/map-single-marker";

const TournamentDetail = () => {
  const [tournamentDetails, setTournamentDetails] = useState<any>([]);
  const [tournamentBrack, setTournamentBracket] = useState<[]>([]);
  const [teamsCount, setTeamsCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const { id } = router.query;
  const [addReview, setAddReview] = useState<boolean>(false);
  const addReviewHandle = () => {
    setAddReview(!addReview);
  };
  // console.log(id);

  useEffect(() => {
    fetchData(id);
  }, [id]);
  useEffect(() => {
    setTournamentBracket(tournamentDetails?.single_brackets);
  }, [tournamentDetails?.single_brackets]);
  // useEffect(() => {
  // 	console.log(tournamentDetails)
  // }, [tournamentDetails]);
  const fetchData = async (id: any) => {
    try {
      const response = await axios.get(
        process.env.API_URL + "/tournament-details/" + id,
        {}
      );
      // console.log(response?.data?.data);
      if (response.status === 200) {
        setTournamentDetails(response.data.data);
        setTeamsCount(response.data.teamsCount);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return (
      <div className={style.loading_page}>
        <img src="/images/loading.gif" />
      </div>
    );
  }
  // console.log(tournamentDetails);
  return (
    <>
      <Header pageTitle="Tournament Detail" />
      <section id={style.tournament_detail}>
        {tournamentDetails?.status === 0 ? (
          <div className="alert alert-danger">Invalid request</div>
        ) : (
          <>
            <TournamentBanner
              details={tournamentDetails}
              fetchData={fetchData as any}
              teamsCount={teamsCount}
            />
            <div id={style.overview}>
              <div className={style.contain}>
                <OverviewBlock details={tournamentDetails} />
                {tournamentDetails?.teams?.length > 0 && (
                  <TournamentTeams teams={tournamentDetails?.teams} />
                )}
                {tournamentDetails?.reviews?.length > 0 && (
                  <>
                    <ReviewsBlock reviews={tournamentDetails?.reviews} />
                    <div
                      className={`${style.btn_blk} justify-content-center mb-5`}
                    >
                      <button
                        type="button"
                        className={style.site_btn}
                        onClick={addReviewHandle}
                      >
                        Add Review
                      </button>
                    </div>
                    {addReview ? (
                      <ReviewPopup popupClose={addReviewHandle} />
                    ) : null}
                  </>
                )}
                {/* {parseFloat(tournamentDetails?.lat) > 0 &&
                parseFloat(tournamentDetails?.long) > 0 ? ( */}
                <LeafLetMapSingle
                  lat={tournamentDetails?.lat}
                  lng={tournamentDetails?.long}
                />
                {/* ) : (
                  ""
                )} */}
              </div>
            </div>
          </>
        )}
      </section>
      {tournamentDetails?.firstRound?.id > 0 ? (
        <RoundOneCompleted round_row={tournamentDetails?.firstRound} />
      ) : (
        ""
      )}
      {tournamentBrack?.length > 0 &&
      tournamentDetails?.is_bracket_generated === 1 ? (
        <TournamentMatches matches={tournamentDetails?.single_brackets} />
      ) : (
        <section id={style.tournament_detail}>
          <div className={style.contain}>
            <div className={style.no_data}>
              Tournament bracket will be generated after initial cleanup round.
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default TournamentDetail;
