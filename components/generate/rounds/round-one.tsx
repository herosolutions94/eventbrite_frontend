import React, { useEffect , useState} from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image";
import Link from "next/link";
import { PhotoTeam01, PhotoTeam02, PhotoTeam03, PhotoTeam04, PhotoTeam05, vs } from "@/components/images"

const RoundOne = () => {
	
	return (
		<>
			<div className={style.main_round_outer}>
                <div className={style.lbl_round}>Round 1</div>
                <div className={style.blk}>
                    <div className={style.outer_team_main}>
                        <div className={style.team_main}>
                            <div className={style.data_logo}>
                                <Image width={200} height={200} src={PhotoTeam02} alt="Team Logo" />
                            </div>
                            <div className={style.data_text}>
                                <h3>Asifa's team</h3>
                            </div>
                        </div>
                        <div className={style.icon_vs}>
                            <Image width={200} height={200} src={vs} alt="vs" />
                        </div>
                        <div className={style.team_main}>
                            <div className={style.data_logo}>
                                <Image width={200} height={200} src={PhotoTeam01} alt="Team Logo" />
                            </div>
                            <div className={style.data_text}>
                                <h3>Abida's team</h3>
                            </div>
                        </div>
                    </div>
                    <div className={style.select_winner}>
                        <div className={style.match_type}>
                            <span>Match 1</span>
                        </div>
                        <div className={style.inner_select}>
                            <p>Select winner</p>
                            <select name="" id="" className="input">
                                <option value="">Choose team</option>
                                <option value="">Asifa's team</option>
                                <option value="">Aabida's team</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={style.blk}>
                    <div className={style.outer_team_main}>
                        <div className={style.team_main}>
                            <div className={style.data_logo}>
                                <Image width={200} height={200} src={PhotoTeam03} alt="Team Logo" />
                            </div>
                            <div className={style.data_text}>
                                <h3>Asifa's team</h3>
                            </div>
                        </div>
                        <div className={style.icon_vs}>
                            <Image width={200} height={200} src={vs} alt="vs" />
                        </div>
                        <div className={style.team_main}>
                            <div className={style.data_logo}>
                                <Image width={200} height={200} src={PhotoTeam02} alt="Team Logo" />
                            </div>
                            <div className={style.data_text}>
                                <h3>Abida's team</h3>
                            </div>
                        </div>
                    </div>
                    <div className={style.select_winner}>
                        <div className={style.match_type}>
                            <span>Match 2</span>
                        </div>
                        <div className={style.inner_select}>
                            <p>Select winner</p>
                            <select name="" id="" className="input">
                                <option value="">Choose team</option>
                                <option value="">Asifa's team</option>
                                <option value="">Aabida's team</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={style.blk}>
                    <div className={style.outer_team_main}>
                        <div className={style.team_main}>
                            <div className={style.data_logo}>
                                <Image width={200} height={200} src={PhotoTeam04} alt="Team Logo" />
                            </div>
                            <div className={style.data_text}>
                                <h3>Asifa's team</h3>
                            </div>
                        </div>
                        <div className={style.icon_vs}>
                            <Image width={200} height={200} src={vs} alt="vs" />
                        </div>
                        <div className={style.team_main}>
                            <div className={style.data_logo}>
                                <Image width={200} height={200} src={PhotoTeam03} alt="Team Logo" />
                            </div>
                            <div className={style.data_text}>
                                <h3>Abida's team</h3>
                            </div>
                        </div>
                    </div>
                    <div className={style.select_winner}>
                        <div className={style.match_type}>
                            <span>Match 3</span>
                        </div>
                        <div className={style.inner_select}>
                            <p>Select winner</p>
                            <select name="" id="" className="input">
                                <option value="">Choose team</option>
                                <option value="">Asifa's team</option>
                                <option value="">Aabida's team</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={style.blk}>
                    <div className={style.outer_team_main}>
                        <div className={style.team_main}>
                            <div className={style.data_logo}>
                                <Image width={200} height={200} src={PhotoTeam05} alt="Team Logo" />
                            </div>
                            <div className={style.data_text}>
                                <h3>Asifa's team</h3>
                            </div>
                        </div>
                        <div className={style.icon_vs}>
                            <Image width={200} height={200} src={vs} alt="vs" />
                        </div>
                        <div className={style.team_main}>
                            <div className={style.data_logo}>
                                <Image width={200} height={200} src={PhotoTeam02} alt="Team Logo" />
                            </div>
                            <div className={style.data_text}>
                                <h3>Abida's team</h3>
                            </div>
                        </div>
                    </div>
                    <div className={style.select_winner}>
                        <div className={style.match_type}>
                            <span>Match 4</span>
                        </div>
                        <div className={style.inner_select}>
                            <p>Select winner</p>
                            <select name="" id="" className="input">
                                <option value="">Choose team</option>
                                <option value="">Asifa's team</option>
                                <option value="">Aabida's team</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={style.blk}>
                    <div className={style.outer_team_main}>
                        <div className={style.team_main}>
                            <div className={style.data_logo}>
                                <Image width={200} height={200} src={PhotoTeam05} alt="Team Logo" />
                            </div>
                            <div className={style.data_text}>
                                <h3>Asifa's team</h3>
                            </div>
                        </div>
                        <div className={style.icon_vs}>
                            <Image width={200} height={200} src={vs} alt="vs" />
                        </div>
                        <div className={style.team_main}>
                            <div className={style.choose_team}>
                                <p>Select Team</p>
                                <select name="" id="" className="input">
                                    <option value="">Choose team</option>
                                    <option value="">Asifa's team</option>
                                    <option value="">Aabida's team</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={style.select_winner}>
                        <div className={style.match_type}>
                            <span>Match 5</span>
                        </div>
                        <div className={style.inner_select}>
                            <p>Select winner</p>
                            <select name="" id="" className="input">
                                <option value="">Choose team</option>
                                <option value="">Asifa's team</option>
                                <option value="">Aabida's team</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.btn_blk} ${style.btn_center}`}>
                <Link href="" className={`${style.site_btn} ${style.lg}`}>Initiate round 2</Link>
            </div>
		</>
	)
}

export default RoundOne
