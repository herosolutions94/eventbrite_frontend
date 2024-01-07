import React, { useEffect , useState} from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image";
import Link from "next/link";
import { PhotoTeam01, PhotoTeam02, PhotoTeam03, PhotoTeam04, PhotoTeam05, vs, CheckCircle, CaretDown, Badge } from "@/components/images"

const Final = () => {
	const[toggle , setToggle] = useState(0);
	return (
		<>
            <div className={style.round_complete_toggle}>
               <div className={style.head_toggle} onClick={() => setToggle(1)}>
                 <div className={style.flex_1}>
                    <Image width={200} height={200} src={CheckCircle} alt="round 1" />
                    <h4>Round 1</h4>
                 </div>
                 <div className={style.flex_2}>
                    <Image width={200} height={200} src={CaretDown} alt="round 1" />
                 </div>
               </div>
               <div className={toggle === 1 ? `${style.body_toggle} ${style.active}` : `${style.body_toggle}`}>
                    <div className={style.team_main}>
                        <div className={style.data_logo}>
                            <Image width={200} height={200} src={PhotoTeam04} alt="Team Logo" />
                        </div>
                        <div className={style.data_text}>
                            <h3>Asifa's team</h3>
                        </div>
                    </div>
                    <div className={`${style.team_main} ${style.badge_logo}`}>
                        <Image width={200} height={200} src={Badge} alt="Team Logo" />
                        <p>Winner</p>
                    </div>
                    <div className={`${style.team_main} ${style.check_logo}`}>
                        <Image width={200} height={200} src={CheckCircle} alt="Team Logo" />
                    </div>
               </div>
            </div>
            <div className={style.round_complete_toggle}>
               <div className={style.head_toggle} onClick={() => setToggle(2)}>
                 <div className={style.flex_1}>
                    <Image width={200} height={200} src={CheckCircle} alt="round 1" />
                    <h4>Round 2</h4>
                 </div>
                 <div className={style.flex_2}>
                    <Image width={200} height={200} src={CaretDown} alt="round 1" />
                 </div>
               </div>
               <div className={toggle === 2 ? `${style.body_toggle} ${style.active}` : `${style.body_toggle}`}>
                    <div className={style.team_main}>
                        <div className={style.data_logo}>
                            <Image width={200} height={200} src={PhotoTeam01} alt="Team Logo" />
                        </div>
                        <div className={style.data_text}>
                            <h3>Asifa's team</h3>
                        </div>
                    </div>
                    <div className={`${style.team_main} ${style.badge_logo}`}>
                        <Image width={200} height={200} src={Badge} alt="Team Logo" />
                        <p>Winner</p>
                    </div>
                    <div className={`${style.team_main} ${style.check_logo}`}>
                        <Image width={200} height={200} src={CheckCircle} alt="Team Logo" />
                    </div>
               </div>
            </div>
            <div className={style.round_complete_toggle}>
               <div className={style.head_toggle} onClick={() => setToggle(3)}>
                 <div className={style.flex_1}>
                    <Image width={200} height={200} src={CheckCircle} alt="round 1" />
                    <h4>Round 3</h4>
                 </div>
                 <div className={style.flex_2}>
                    <Image width={200} height={200} src={CaretDown} alt="round 1" />
                 </div>
               </div>
               <div className={toggle === 3 ? `${style.body_toggle} ${style.active}` : `${style.body_toggle}`}>
                    <div className={style.team_main}>
                        <div className={style.data_logo}>
                            <Image width={200} height={200} src={PhotoTeam01} alt="Team Logo" />
                        </div>
                        <div className={style.data_text}>
                            <h3>Asifa's team</h3>
                        </div>
                    </div>
                    <div className={`${style.team_main} ${style.badge_logo}`}>
                        <Image width={200} height={200} src={Badge} alt="Team Logo" />
                        <p>Winner</p>
                    </div>
                    <div className={`${style.team_main} ${style.check_logo}`}>
                        <Image width={200} height={200} src={CheckCircle} alt="Team Logo" />
                    </div>
               </div>
            </div>
            <div className={style.round_complete_toggle}>
               <div className={style.head_toggle} onClick={() => setToggle(4)}>
                 <div className={style.flex_1}>
                    <Image width={200} height={200} src={CheckCircle} alt="round 1" />
                    <h4>Round 4</h4>
                 </div>
                 <div className={style.flex_2}>
                    <Image width={200} height={200} src={CaretDown} alt="round 1" />
                 </div>
               </div>
               <div className={toggle === 4 ? `${style.body_toggle} ${style.active}` : `${style.body_toggle}`}>
                    <div className={style.team_main}>
                        <div className={style.data_logo}>
                            <Image width={200} height={200} src={PhotoTeam01} alt="Team Logo" />
                        </div>
                        <div className={style.data_text}>
                            <h3>Asifa's team</h3>
                        </div>
                    </div>
                    <div className={`${style.team_main} ${style.badge_logo}`}>
                        <Image width={200} height={200} src={Badge} alt="Team Logo" />
                        <p>Winner</p>
                    </div>
                    <div className={`${style.team_main} ${style.check_logo}`}>
                        <Image width={200} height={200} src={CheckCircle} alt="Team Logo" />
                    </div>
               </div>
            </div>
            <div className={style.blk}>
                <div className={style.final_winner_blk}>
                    <div className={style.team_main}>
                        <div className={style.data_logo}>
                            <Image width={200} height={200} src={PhotoTeam01} alt="Team Logo" />
                        </div>
                        <div className={style.data_text}>
                            <h3>Asifa's team</h3>
                        </div>
                    </div>
                    <div className={`${style.team_main} ${style.badge_logo}`}>
                        <Image width={200} height={200} src={Badge} alt="Team Logo" />
                        <p>Winner Team</p>
                    </div>
                    <div className={`${style.team_main} ${style.check_logo}`}>
                        <Image width={200} height={200} src={CheckCircle} alt="Team Logo" />
                    </div>
               </div>
            </div>
		</>
	)
}

export default Final
