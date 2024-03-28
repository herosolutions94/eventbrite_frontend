import React from "react";
import style from "@/styles/scss/app.module.scss";
import Image from "next/image";
import { IconCalendar, PhotoVS } from "./images";
import Link from "next/link";

const MatchCard = (props: any) => {
  const { title, team, team_logo, date, time, stream_link, tags, img } = props;
  return (
    <>
      <div className={style.match_card}>
        <div className={style.teams}>
          <div className={style.member}>
            <div className={style.icon}>
              <Image width={400} height={400} src={img} alt="" />
            </div>
            <div className={style.name}>{team}</div>
          </div>
        </div>
        <div className={style.txt}>
          <ul className={style.tags}>
            <li>
              <span>{tags}</span>
            </li>
          </ul>
          <h4>{title}</h4>
          <div className={style.date}>
            <Image width={100} height={100} src={IconCalendar} alt="" /> {date}
          </div>
        </div>
        <div className={style.time}>{time}</div>
        <Link href={stream_link}></Link>
      </div>
    </>
  );
};

export default MatchCard;
