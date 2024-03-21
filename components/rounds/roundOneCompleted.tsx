import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import {
  Badge,
  CaretDown,
  CheckCircle,
  PhotoTeam01,
  vs,
} from "@/components/images";
import { useRouter } from "next/router";

type RoundOneProps = {
  round_row: any;
};
const RoundOneCompleted = ({ round_row }: RoundOneProps) => {
  return (
    <>
      <section
        className={`${style.dashboard} ${style.generate_detail} ${style.round1_generate_detail}`}
      >
        <div className={style.contain}>
          <div className={style.main_round_outer}>
            <div className={style.lbl_round}>Intitial Cleanup Round</div>
            {round_row?.matches?.map((match_row: any, index: number) => {
              return (
                <div className={style.blk} key={index}>
                  <div className={style.outer_team_main} key={index}>
                    <div className={style.team_main}>
                      {match_row?.team1 > 0 ? (
                        <>
                          <div className={style.data_logo}>
                            <Image
                              width={200}
                              height={200}
                              src={
                                match_row?.team_1?.logo
                                  ? process.env.ASSET_URL +
                                    match_row?.team_1?.logo
                                  : PhotoTeam01
                              }
                              alt={match_row?.team_1?.team_name}
                            />
                          </div>
                          <div className={style.data_text}>
                            <h3>{match_row?.team_1?.team_name}</h3>
                          </div>
                        </>
                      ) : (
                        <h4>TBD</h4>
                      )}
                    </div>
                    <div className={style.icon_vs}>
                      <Image width={200} height={200} src={vs} alt="vs" />
                    </div>
                    <div className={style.team_main}>
                      {match_row?.team2 > 0 ? (
                        <>
                          <div className={style.data_logo}>
                            <Image
                              width={200}
                              height={200}
                              src={
                                match_row?.team_1?.logo
                                  ? process.env.ASSET_URL +
                                    match_row?.team_1?.logo
                                  : PhotoTeam01
                              }
                              alt={match_row?.team_2?.team_name}
                            />
                          </div>
                          <div className={style.data_text}>
                            <h3>{match_row?.team_2?.team_name}</h3>
                          </div>
                        </>
                      ) : (
                        <h4>TBD</h4>
                      )}
                    </div>
                  </div>
                  {match_row?.team1 > 0 &&
                  match_row?.team2 > 0 &&
                  match_row?.winner_row?.id > 0 ? (
                    <div className={style.select_winner}>
                      <div className={style.match_type}>
                        <span>Match {index + 1}</span>
                      </div>
                      <div className={style.inner_select}>
                        <p>winner Team</p>
                        <div className="input">
                          {match_row?.winner_row?.team_name}
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default RoundOneCompleted;
