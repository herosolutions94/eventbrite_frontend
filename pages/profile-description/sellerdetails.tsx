import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss";
import TournamentItem from "./tournamentItem";
interface ProfileDetails {
  id: number,
  user_image: string;
  user_cover: string;
  firstname: string;
  lastname: string
  total_tournaments: number;
  total_matches: number;
  open_tournaments: [],
  completed_tournaments: [],
  yet_to_be: []
  // Add more properties as needed
}
interface SellerdetailProps {
  profileDetails: ProfileDetails;
}
const Sellerdetail: React.FC<SellerdetailProps> = ({ profileDetails }) => {
  const [tournamentTab, setTournamentTab] = useState('open');
  useEffect(() => {
    if (profileDetails !== undefined && profileDetails?.id > 0) {
      if (profileDetails?.open_tournaments?.length <= 0 && profileDetails?.yet_to_be?.length > 0) {
        setTournamentTab("yet")
      }
      else if (profileDetails?.open_tournaments?.length <= 0 && profileDetails?.completed_tournaments?.length > 0) {
        setTournamentTab("completed")
      }
    }

  }, [profileDetails]);

  // console.log(profileDetails?.yet_to_be, profileDetails?.completed_tournaments)
  return (
    <div>
      <section id={style.seller_detail}>
        <div className={style.contain}>
          <div className={style.flex}>
            <div className={style.col}>
              <div className={style.outer}>
                <h4>Overall Stats</h4>
                <ul>
                  <li>
                    <h5>Total tournaments organized:</h5>
                    <p>{profileDetails?.total_tournaments}</p>
                  </li>
                  <li>
                    <h5>Total matches played:</h5>
                    <p>{profileDetails?.total_matches}</p>
                  </li>
                  {/* <li>
                    <h5>Total tournaments participated:</h5>
                    <p>{profileDetails?.total_matches}</p>
                  </li>
                  <li>
                    <h5>Total events attended:</h5>
                    <p>0</p>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className={style.colr}>
              <div className={style.outer}>
                {/* <h3>Over View</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <hr /> */}
                <h4>Your Tournaments</h4>
                <ul>
                  {
                    profileDetails !== undefined && profileDetails?.open_tournaments?.length > 0 ?
                      <li onClick={() => (setTournamentTab('open'))} className={tournamentTab === 'open' ? style.active : ""}>Open</li>
                      :
                      ""
                  }
                  {
                    profileDetails !== undefined && profileDetails?.yet_to_be?.length > 0 ?
                      <li onClick={() => (setTournamentTab('yet'))} className={tournamentTab === 'yet' ? style.active : ""}>Yet to be</li>
                      :
                      ""
                  }
                  {
                    profileDetails !== undefined && profileDetails?.completed_tournaments?.length > 0 ?
                      <li onClick={() => (setTournamentTab('completed'))} className={tournamentTab === 'completed' ? style.active : ""}> Completed</li>
                      :
                      ""
                  }
                </ul>
                {
                  tournamentTab === 'open' ?
                    <TournamentItem items={profileDetails?.open_tournaments} />
                    :
                    tournamentTab === 'yet' ?
                      <TournamentItem items={profileDetails?.yet_to_be} />
                      :
                      tournamentTab === 'completed' ?
                        <TournamentItem items={profileDetails?.completed_tournaments} />
                        :
                        <div className={style.no_data}>No data found!!</div>
                }

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Sellerdetail