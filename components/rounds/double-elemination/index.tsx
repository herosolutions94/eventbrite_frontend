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
							<div className={tabToggle == 2 ? `${style.tab_pill} ${style.active}` : `${style.tab_pill}`} onClick={() => setTabToggle(2)}>Eliminated pool</div>
						</div>
						<div className={tabToggle == 0 ? `${style.tab_bdy} ${style.active}` : `${style.tab_bdy}`}>
							{
								tournamentDetails?.winners_arr?.length > 0 ?
								tournamentDetails?.winners_arr?.map((round_row: any, index: number)=>{
									return(
										round_row?.status==='completed' ? 
                                    		<CompletedMatch round_row={round_row} tournamentDetails={tournamentDetails} type="win" round_no_key={index+1} />
                                    		:
                                    		<RoundOne round_row={round_row} tournamentDetails={tournamentDetails} loose_round={0} final_round={0} round_no_key={index+1} />
									)
								})
								:
								<div className="alert alert-danger">No winning teams yet!</div>
							}
								{
									tournamentDetails?.pending_winner_teams?.length > 1 && parseInt(tournamentDetails?.final_match_round)!==1 ?
									<div className={`${style.btn_blk} ${style.btn_center}`}>
										<Link 
                            				href="#!"
                            				onClick={(e)=>handleStartNextRound(e,'win')}
                            				className={`${style.site_btn} ${style.lg}`}>Initiate next round</Link>
									</div>
									:
									""
								}
						</div>
						<div className={tabToggle == 1 ? `${style.tab_bdy} ${style.active}` : `${style.tab_bdy}`}>
						{
								tournamentDetails?.loosers_matches_arr?.length > 0 ?
								tournamentDetails?.loosers_matches_arr?.map((looser_match_row: any, index: number)=>{
									return(
										<div className={style.round_complete_toggle} key={index}>
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
								<RoundOne  round_row={tournamentDetails?.loose_in_progress_round} tournamentDetails={tournamentDetails} loose_round={1} final_round={0} round_no_key={0} />
								:
								""
							}
							{
									tournamentDetails?.pending_looser_pool > 1 && parseInt(tournamentDetails?.final_match_round)!==1 ?
									<div className={`${style.btn_blk} ${style.btn_center}`}>
										<Link 
                            				href="#!"
                            				onClick={(e)=>handleStartNextRound(e,'lose')}
                            				className={`${style.site_btn} ${style.lg}`}>Initiate next round</Link>
									</div>
									:
									""
								}
						</div>
						<div className={tabToggle == 2 ? `${style.tab_bdy} ${style.active}` : `${style.tab_bdy}`}>
								{
									tournamentDetails?.eleminated_teams_arr?.length > 0 ?
									tournamentDetails?.eleminated_teams_arr?.map((eliminated_row: any, index: number)=>{
										return(
											<div className={style.round_complete_toggle} key={index}>
												<div className={`${style.body_toggle} ${style.active}`}>
														<div className={style.team_main}>
															<div className={style.data_logo}>
																<Image width={200} height={200} src={eliminated_row?.logo ? process.env.ASSET_URL + eliminated_row?.logo : PhotoTeam01} alt={eliminated_row?.full_name} />
															</div>
															<div className={style.data_text}>
																<h3>{eliminated_row?.full_name}</h3>
															</div>
														</div>
														<div className={`${style.team_main} ${style.badge_logo}`}>
															<Image width={200} height={200} src={LooserBadge} alt="Team Logo" />
															<p>Looser</p>
														</div>
														
												</div>
											</div>
										)
									})
									:
									<div className="alert alert-danger">No team(s) eliminated yet!</div>

								}
						</div>
                        {
									parseInt(tournamentDetails?.final_match_round)===1 ?
									<div className={`${style.btn_blk} ${style.btn_center}`}>
										<Link 
                            				href="#!"
                            				onClick={(e)=>handleStartNextRound(e,'final')}
                            				className={`${style.site_btn} ${style.lg}`}>Initiate final round</Link>
									</div>
									:
									""
								}
								{
									tournamentDetails?.final_match_round_obj?.id > 0 && tournamentDetails?.final_match_round_obj?.status==="in_progress" ?
									<RoundOne  round_row={tournamentDetails?.final_match_round_obj} tournamentDetails={tournamentDetails} loose_round={0} final_round={1} round_no_key={0} />
									:
									""
								}
								{
									tabToggle == 0 && tournamentDetails?.final_completed_round?.id > 0 && tournamentDetails?.final_completed_round?.status==="completed" ?
									<CompletedMatch round_row={tournamentDetails?.final_completed_round} tournamentDetails={tournamentDetails} type="final" round_no_key={0} />
									:
									""
								}
					
		</>
	)
}

export default DoubleElemination
