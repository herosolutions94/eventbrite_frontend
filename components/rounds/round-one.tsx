import React, { useEffect , useState} from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image";
import Link from "next/link";
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import Cookies from "js-cookie"
import { Badge, CaretDown, CheckCircle, PhotoTeam01,  vs } from "@/components/images"
import { useRouter } from "next/router"

type RoundOneProps = {
	tournamentDetails:any,
    round_row:any,
    loose_round:any | null
}
const RoundOne = ({tournamentDetails,round_row,loose_round}:RoundOneProps) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formFields, setFormFields] = useState({
        team1_score: "",
        team2_score:"",
        winner:""
      });
      const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
      };
      const handleSaveScore=async(e:any,match_id:any,match_row:any)=>{
        e.preventDefault();
        if(formFields?.team1_score==='' || formFields?.team1_score===null || formFields?.team1_score===undefined){
            toast.error(match_row?.team_1?.team_name+" score is required!");return;
        }
        if(formFields?.team2_score==='' || formFields?.team2_score===null || formFields?.team2_score===undefined){
            toast.error(match_row?.team_2?.team_name+" score is required!");return;
        }
        if(formFields?.winner==='' || formFields?.winner===null || formFields?.winner===undefined){
            toast.error(" Winner required!");return;
        }
        if(match_id && match_id > 0){
            setIsLoading(true)
            const res = await axios.post(`${process.env.API_URL}/save-match-score/${match_id}`, {
                user_id: Cookies.get("user_id"),
                team1_score:formFields?.team1_score,
                team2_score:formFields?.team2_score,
                winner:formFields?.winner,
                tournament_id:tournamentDetails?.id,
                loose_round:loose_round
            }, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                },
            });
            setIsLoading(false)
            if(res.status === 200){
                console.log(res?.data)
                if(res?.data?.status===1){
                    toast.success(res?.data?.msg)
                    // handleTeams(teams)
                    router.reload();
                }
                else{
                    toast.error(res?.data?.msg)
                }
                
            }
        }
        else{
            toast.error('Invalid request!')
        }
      }
	console.log(tournamentDetails,round_row)
	return (
		<>
			<div className={style.main_round_outer}>
                <div className={style.lbl_round}>Round {round_row?.round_no}</div>
                    {
                        isLoading ? 
                        <div className={style.isLoading}>
                            <div className={style.loadingio_spinner}>
                                <div className={style.ldio}>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        :
                        ""
                    }
                    {
                        round_row?.matches?.map((match_row:any,index:number)=>{
                            return(
                                match_row?.status===1 && match_row?.winner > 0 ? 
                                <div className={style.round_complete_toggle}>
                                    <div className={`${style.body_toggle} ${style.active}`}>
                                            <div className={style.team_main}>
                                                <div className={style.data_logo}>
                                                    <Image width={200} height={200} src={match_row?.winner_row?.logo ? process.env.ASSET_URL + match_row?.winner_row?.logo : PhotoTeam01} alt={match_row?.winner?.team_name} />
                                                </div>
                                                <div className={style.data_text}>
                                                    <h3>{match_row?.winner_row?.team_name}</h3>
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
                                :
                                <div className={style.blk}>
                                    <div className={style.outer_team_main} key={index}>
                                        <div className={style.team_main}>
                                            <div className={style.data_logo}>
                                                <Image width={200} height={200} src={match_row?.team_1?.logo ? process.env.ASSET_URL + match_row?.team_1?.logo : PhotoTeam01} alt={match_row?.team_1?.team_name} />
                                            </div>
                                            <div className={style.data_text}>
                                                <h3>{match_row?.team_1?.team_name}</h3>
                                                <input type="number" className={style.input} placeholder="Team A Score" name="team1_score" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className={style.icon_vs}>
                                            <Image width={200} height={200} src={vs} alt="vs" />
                                        </div>
                                        <div className={style.team_main}>
                                            <div className={style.data_logo}>
                                                <Image width={200} height={200} src={match_row?.team_1?.logo ? process.env.ASSET_URL + match_row?.team_1?.logo : PhotoTeam01} alt={match_row?.team_2?.team_name} />
                                            </div>
                                            <div className={style.data_text}>
                                                <h3>{match_row?.team_2?.team_name}</h3>
                                                <input type="number" className={style.input} placeholder="Team B Score" name="team2_score" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>  
                                    <div className={style.select_winner}>
                                        <div className={style.match_type}>
                                            <span>Match {index + 1}</span>
                                        </div>
                                        <div className={style.inner_select}>
                                            <p>Select winner</p>
                                            <select  name="winner" onChange={handleChange}  id="" className="input">
                                                <option value="">Choose team</option>
                                                <option value={match_row?.team_1?.id}>{match_row?.team_1?.team_name}</option>
                                                <option value={match_row?.team_2?.id}>{match_row?.team_2?.team_name}</option>
                                            </select>
                                        </div>
                                        <div className={`${style.btn_blk} mt-5`}>
                                        <button 
                                            type="button"
                                            className={style.site_btn} onClick={(e)=>handleSaveScore(e,match_row?.id,match_row)}>
                                            Save
                                        </button>
								        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                    
                
                
            </div>
            
            
		</>
	)
}

export default RoundOne
