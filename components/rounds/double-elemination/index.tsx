import React, { useEffect , useState} from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import Header from "@/components/header/header"
import { useRouter } from 'next/router';	
import axios from "axios"
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify"

// import RoundOne from "../rounds/round-one";
import { CheckCircle, LooserBadge, PhotoTeam01, PhotoTeam02, PhotoTeam03, PhotoTeam04, PhotoTeam05, vs } from "@/components/images"
import CompletedMatch from "../completedMatch";
import RoundOne from "../round-one";
import Cookies from "js-cookie"

type DoubleEleminationProps = {
	tournamentDetails:any,
}
const DoubleElemination = ({tournamentDetails}:DoubleEleminationProps) => {
	const [teams, setTeams] = useState<any>([]);
	const [tabToggle , setTabToggle] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const router = useRouter();
	const handleStartNextRound=async(e:any,type:any)=>{
        e.preventDefault();
            setIsLoading(true)
            const res = await axios.post(`${process.env.API_URL}/start-next-round/${tournamentDetails?.id}`, {
                user_id: Cookies.get("user_id"),
                tournament_id:tournamentDetails?.id,
				type:type
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
	console.log(tournamentDetails)
	return (
		<>
						<div className={style.tab_pills}>
							<div className={tabToggle == 0 ? `${style.tab_pill} ${style.active}` : `${style.tab_pill}`} onClick={() => setTabToggle(0)}>Winner pool</div>
							<div className={tabToggle == 1 ? `${style.tab_pill} ${style.active}` : `${style.tab_pill}`} onClick={() => setTabToggle(1)}>Looser pool</div>
						</div>
						<div className={tabToggle == 0 ? `${style.tab_bdy} ${style.active}` : `${style.tab_bdy}`}>
							{
								tournamentDetails?.winners_arr?.length > 0 ?
								tournamentDetails?.winners_arr?.map((round_row: any, index: number)=>{
									return(
										round_row?.status==='completed' ? 
                                    		<CompletedMatch round_row={round_row} tournamentDetails={tournamentDetails} type="win" />
                                    		:
                                    		<RoundOne round_row={round_row} tournamentDetails={tournamentDetails} loose_round={0} />
									)
								})
								:
								<div className="alert alert-danger">No winning teams yet!</div>
							}
								{
									tournamentDetails?.pending_winner_teams?.length > 1 ?
									<div className={`${style.btn_blk} ${style.btn_center}`}>
										<Link 
                            				href="#!"
                            				onClick={(e)=>handleStartNextRound(e,'win')}
                            				className={`${style.site_btn} ${style.lg}`}>Initiate next round {parseInt(tournamentDetails?.latestCompletedRound?.round_no) + 1}</Link>
									</div>
									:
									""
								}
							{/* <RoundOne/> */}
						</div>
						<div className={tabToggle == 1 ? `${style.tab_bdy} ${style.active}` : `${style.tab_bdy}`}>
						{
								tournamentDetails?.loosers_matches_arr?.length > 0 ?
								tournamentDetails?.loosers_matches_arr?.map((looser_match_row: any, index: number)=>{
									return(
										<div className={style.round_complete_toggle}>
											<div className={`${style.body_toggle} ${style.active}`}>
													<div className={style.team_main}>
														<div className={style.data_logo}>
															<Image width={200} height={200} src={looser_match_row?.logo ? process.env.ASSET_URL + looser_match_row?.logo : PhotoTeam01} alt={looser_match_row?.team_name} />
														</div>
														<div className={style.data_text}>
															<h3>{looser_match_row?.team_name}</h3>
														</div>
													</div>
													<div className={`${style.team_main} ${style.badge_logo}`}>
														<Image width={200} height={200} src={LooserBadge} alt="Team Logo" />
														<p>Looser</p>
													</div>
													<div className={`${style.team_main} ${style.check_logo}`}>
														<Image width={200} height={200} src={CheckCircle} alt="Team Logo" />
													</div>
											</div>
										</div>
									)
								})
								:
								tournamentDetails?.loose_in_progress_round?.id > 0 && tournamentDetails?.loose_in_progress_round?.matches?.length > 0 ?
								""
								:
								<div className="alert alert-danger">No loosing teams yet!</div>
							}
							{
								tournamentDetails?.loose_in_progress_round?.id > 0 && tournamentDetails?.loose_in_progress_round?.matches?.length > 0 ?
								<RoundOne  round_row={tournamentDetails?.loose_in_progress_round} tournamentDetails={tournamentDetails} loose_round={1} />
								:
								""
							}
							{
									tournamentDetails?.pending_looser_pool > 1 ?
									<div className={`${style.btn_blk} ${style.btn_center}`}>
										<Link 
                            				href="#!"
                            				onClick={(e)=>handleStartNextRound(e,'lose')}
                            				className={`${style.site_btn} ${style.lg}`}>Initiate next round {parseInt(tournamentDetails?.latestCompletedRound?.round_no) + 1}</Link>
									</div>
									:
									""
								}
						</div>
                        
					
		</>
	)
}

export default DoubleElemination
