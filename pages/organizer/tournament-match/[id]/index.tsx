import React, { useEffect , useState} from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import Header from "@/components/header/header"
import { useRouter } from 'next/router';	
import axios from "axios"
import Image from "next/image";
import Link from "next/link";
import RoundOne from "./rounds/round-one";
import { PhotoTeam01, PhotoTeam02, PhotoTeam03, PhotoTeam04, PhotoTeam05, vs } from "@/components/images"
import RoundTwo from "./rounds/round-two";
import RoundThree from "./rounds/round-three";
import RoundFour from "./rounds/round-four";
import Final from "./rounds/final";
import CompletedMatch from "./rounds/completedMatch";
import { ToastContainer, toast } from "react-toastify"
import Cookies from "js-cookie"
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
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleStartNextRound=async(e:any)=>{
        e.preventDefault();
            setIsLoading(true)
            const res = await axios.post(`${process.env.API_URL}/start-next-round/${tournamentDetails?.id}`, {
                user_id: Cookies.get("user_id"),
                tournament_id:tournamentDetails?.id
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
	return (
		<>
			<Header pageTitle="Tournament Matches" />
				<section className={`${style.dashboard} ${style.generate_detail}`} id={style.generate_detail}>
					<div className={style.contain}>
                        <div className={style._data}>
                            <div className={style.data_logo}>
                                <Image width={200} height={200} src={tournamentDetails?.teams?.[0]?.logo ? process.env.ASSET_URL + tournamentDetails?.teams?.[0]?.logo : PhotoTeam01} alt="" />
                            </div>
                            <div className={style.data_text}>
                                <div className={style.tags_blk}>
                                    <strong className={style.text_prime}>Basketball</strong>
                                </div>
                                <h3>{tournamentDetails?.title}</h3>
                            </div>
                        </div>
                        {
                            tournamentDetails?.rounds?.map((round_row: any, index: number)=>{
                                return(
                                    round_row?.status==='completed' ? 
                                    <CompletedMatch round_row={round_row} tournamentDetails={tournamentDetails} />
                                    :
                                    <RoundOne round_row={round_row} tournamentDetails={tournamentDetails} />
                                )
                            })
                        }
                        {
                            tournamentDetails?.in_progress_round?.id > 0 ?
                            ""
                            :
                            tournamentDetails?.pending_teams?.length > 1 ?
                        
                        <div className={`${style.btn_blk} ${style.btn_center}`}>
                            {
                                isLoading ?
                                <div className={style.loadingio_spinner}>
                                <div className={style.ldio}>
                                    <div></div>
                                </div>
                            </div>
                            :
                            
                            <Link 
                            href="#!"
                            onClick={handleStartNextRound}
                            className={`${style.site_btn} ${style.lg}`}>Initiate round {parseInt(tournamentDetails?.latestCompletedRound?.round_no) + 1}</Link>
}
                        </div>
                        :
                        ""
}
                        {/* <Final/> */}
					</div>
				</section>
			<Footer />
		</>
	)
}

export default Generate
