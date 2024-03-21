import React, { use, useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss";
import Image from "next/image";
import Link from "next/link";
import {
  PhotoTeam01,
  PhotoTeam02,
  PhotoTeam03,
  PhotoTeam04,
  PhotoTeam05,
  vs,
  CheckCircle,
  CaretDown,
  Badge,
  LooserBadge,
} from "@/components/images";
type RoundOneProps = {
  tournamentDetails: any;
  round_row: any;
  type: any | null;
  round_no_key: any | null;
};
const CompletedMatch = ({
  tournamentDetails,
  round_row,
  type,
  round_no_key,
}: RoundOneProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  useEffect(() => {
    if (type === "final") {
      setToggle(true);
    }
  }, [type]);
  // console.log(round_row)
  return (
    <>
      <div className={style.round_complete_toggle}>
        <div className={style.head_toggle} onClick={() => setToggle(!toggle)}>
          <div className={style.flex_1}>
            <Image width={200} height={200} src={CheckCircle} alt="round 1" />
            {type === "final" ? (
              <h4>Final Round</h4>
            ) : (
              <h4>Round {round_no_key > 0 ? round_no_key : ""}</h4>
            )}
          </div>
          <div className={style.flex_2}>
            <Image width={200} height={200} src={CaretDown} alt="round 1" />
          </div>
        </div>
        <div
          className={
            toggle
              ? `${style.body_toggle} ${style.active} ${style.completed_toggle_blk}`
              : `${style.body_toggle}`
          }
        >
          {round_row?.matches?.map((match_row: any, index: number) => {
            return type === "win" || type === "final" ? (
              match_row?.status === 1 && match_row?.winner > 0 ? (
                <div className={style.round_complete_toggle}>
                  <div className={`${style.body_toggle} ${style.active}`}>
                    <div className={style.team_main}>
                      <div className={style.data_logo}>
                        <Image
                          width={200}
                          height={200}
                          src={
                            match_row?.winner_row?.logo
                              ? process.env.ASSET_URL +
                                match_row?.winner_row?.logo
                              : PhotoTeam01
                          }
                          alt={match_row?.winner?.team_name}
                        />
                      </div>
                      <div className={style.data_text}>
                        <h3>{match_row?.winner_row?.team_name}</h3>
                      </div>
                    </div>
                    <div className={`${style.team_main} ${style.badge_logo}`}>
                      <Image
                        width={200}
                        height={200}
                        src={Badge}
                        alt="Team Logo"
                      />
                      <p>Winner</p>
                    </div>
                    <div className={`${style.team_main} ${style.check_logo}`}>
                      <Image
                        width={200}
                        height={200}
                        src={CheckCircle}
                        alt="Team Logo"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            ) : type === "loose" ? (
              match_row?.status === 1 && match_row?.looser > 0 ? (
                <div className={style.round_complete_toggle}>
                  <div className={`${style.body_toggle} ${style.active}`}>
                    <div className={style.team_main}>
                      <div className={style.data_logo}>
                        <Image
                          width={200}
                          height={200}
                          src={
                            match_row?.looser_row?.logo
                              ? process.env.ASSET_URL +
                                match_row?.looser_row?.logo
                              : PhotoTeam01
                          }
                          alt={match_row?.winner?.team_name}
                        />
                      </div>
                      <div className={style.data_text}>
                        <h3>{match_row?.looser_row?.team_name}</h3>
                      </div>
                    </div>
                    <div className={`${style.team_main} ${style.badge_logo}`}>
                      <Image
                        width={200}
                        height={200}
                        src={LooserBadge}
                        alt="Team Logo"
                      />
                      <p>Looser</p>
                    </div>
                    <div className={`${style.team_main} ${style.check_logo}`}>
                      <Image
                        width={200}
                        height={200}
                        src={CheckCircle}
                        alt="Team Logo"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CompletedMatch;
