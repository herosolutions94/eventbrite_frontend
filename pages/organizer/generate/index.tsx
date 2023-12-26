import React, { useEffect , useState} from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import Header from "@/components/header/header"
import { useRouter } from 'next/router';	
import axios from "axios"
import Image from "next/image";
import { PhotoTeam01, PhotoTeam02, PhotoTeam03, PhotoTeam04, PhotoTeam05, vs } from "@/components/images"

const Generate = () => {
	const [tournamentDetails, setTournamentDetails] = useState<any>([]);
	const [teams, setTeams] = useState<any>([]);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		if(id !== undefined){
			fetchData();
		}
	}, [id]);
	const fetchData = async () => {
		try {
			const response = await axios.get(process.env.API_URL + "/tournament-details/" + id, {});
			if (response.status === 200) {
				setTournamentDetails(response.data.data);
				setTeams(response.data.data.teams);
			}
		} catch (error) {
			console.log(error);
		}
	};
	if(!tournamentDetails){
		return 'Loading...';
	}
	return (
		<>
			<Header pageTitle="generate" />
				<section className={`${style.dashboard} ${style.generate_detail}`} id={style.generate_detail}>
					<div className={style.contain}>
                        <div className={style._data}>
                            <div className={style.data_logo}>
                                <Image width={200} height={200} src={PhotoTeam01} alt="Team Logo" />
                            </div>
                            <div className={style.data_text}>
                                <div className={style.tags_blk}>
                                    <strong className={style.text_prime}>Basketball</strong>
                                </div>
                                <h3>Testing tournament</h3>
                            </div>
                        </div>
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
                                <p>Select winner</p>
                                <select name="" id="" className="input">
                                    <option value="">Choose team</option>
                                    <option value="">Asifa's team</option>
                                    <option value="">Aabida's team</option>
                                </select>
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
                                <p>Select winner</p>
                                <select name="" id="" className="input">
                                    <option value="">Choose team</option>
                                    <option value="">Asifa's team</option>
                                    <option value="">Aabida's team</option>
                                </select>
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
                                <p>Select winner</p>
                                <select name="" id="" className="input">
                                    <option value="">Choose team</option>
                                    <option value="">Asifa's team</option>
                                    <option value="">Aabida's team</option>
                                </select>
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
                                <p>Select winner</p>
                                <select name="" id="" className="input">
                                    <option value="">Choose team</option>
                                    <option value="">Asifa's team</option>
                                    <option value="">Aabida's team</option>
                                </select>
                            </div>
						</div>
					</div>
				</section>
			<Footer />
		</>
	)
}

export default Generate
