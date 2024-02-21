import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import Header from "@/components/header/header"
import { useRouter } from 'next/router';
import axios from "axios"
import Image from "next/image";
import Link from "next/link";
import RoundOne from "@/components/rounds/round-one";
import { PhotoTeam01, PhotoTeam02, PhotoTeam03, PhotoTeam04, PhotoTeam05, vs } from "@/components/images"
import CompletedMatch from "@/components/rounds/completedMatch";
import { ToastContainer, toast } from "react-toastify"
import Cookies from "js-cookie"
import DoubleElemination from "@/components/rounds/double-elemination";
interface FormState {
    team1_score: number;
    team2_score: number;
    winner: string;
    team_1: {};
    team_2: {};
    team1: number;
    team2: number;
    id: number;
}
const Generate = () => {
    const [tournamentDetails, setTournamentDetails] = useState<any>([]);
    const [teams, setTeams] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isNextRoundPopup, setIsNextRoundPopup] = useState<boolean>(false);
    const router = useRouter()
    const [formFields, setFormFields] = useState({
        team1_score: "",
        team2_score: "",
        winner: "",
        team_1: "",
        team_2: "",
        team1: "",
        team2: "",
        id: ""
    });
    const initialFormState: FormState[] = [
        { team1_score: 0, team2_score: 0, winner: '', team_1: "", team_2: "", team1: 0, team2: 0, id: 0 },
        // Add more rows as needed
    ];
    const [formState, setFormState] = useState<FormState[]>(initialFormState);

    const updateFormState = () => {
        // Assuming fetchedArray contains your data
        const fetchedArray = tournamentDetails?.latestCompletedRound?.matches;

        // Transform the fetched data into the format expected by the state
        const transformedArray: FormState[] = fetchedArray.map((item: any) => ({
            id: item.id,
            team1_score: item.team1_score,
            team2_score: item.team2_score,
            winner: item.winner,
            // Add other fields as needed
        }));

        // Set the transformed array in the state
        setFormState(transformedArray);
    };

    const handleChange = (index: number, field: keyof FormState, value: string | number) => {
        const updatedFormState = [...formState];
        updatedFormState[index][field] = value as never; // Explicitly cast to 'never'
        setFormState(updatedFormState);
    };
    const handleSaveScore = async (e: any) => {
        e.preventDefault();
        const hasEmptyField = formState.some((row) => {
            // Check each value in the row
            return Object.values(row).some((value: any) => {
                if (value === '' || value === null || value === undefined || value <= 0) {
                    return true;
                }
                return false;
            });
        });
        if (hasEmptyField) {
            toast.error('Please fill in all fields before saving, and team 1 score and team 2 score must be greater than 0.')
            return true;
        }
        else {
            console.log(formState)
        }

        if (tournamentDetails?.id > 0) {

            setIsLoading(true)
            const res = await axios.post(`${process.env.API_URL}/update-match-score/${tournamentDetails?.id}`, {
                user_id: Cookies.get("user_id"),
                matches: JSON.stringify(formState),
                tournament_id: tournamentDetails?.id,
            }, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                },
            });
            setIsLoading(false)
            if (res.status === 200) {
                console.log(res?.data)
                if (res?.data?.status === 1) {
                    toast.success(res?.data?.msg)
                    // handleTeams(teams)
                    setTimeout(() => {
                        handleStartNextRound()
                    }, 2000);
                }
                else {
                    toast.error(res?.data?.msg)
                }

            }
        }
        else {
            toast.error('Invalid request!')
        }
    }
    const { id } = router.query;

    useEffect(() => {
        if (id !== undefined) {
            fetchData();
        }
    }, [id]);
    useEffect(() => {
        // Assuming fetchedArray contains your data
        const fetchedArray = tournamentDetails?.latestCompletedRound?.matches;

        // Transform the fetched data into the format expected by the state
        const transformedArray: FormState[] = fetchedArray?.map((item: any) => ({
            team1_score: item.team1_score,
            team2_score: item.team2_score,
            winner: item.winner,
            team_1: item.team_1,
            team_2: item.team_2,
            team1: item.team1,
            team2: item.team2,
            id: item.id,
        }));

        // Set the transformed array in the state
        setFormState(transformedArray);
    }, [tournamentDetails?.latestCompletedRound?.matches]);
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
    if (!tournamentDetails) {
        return 'Loading...';
    }
    const handleStartNextRoundPopup = async (e: any) => {
        e.preventDefault();
    }
    const handleStartNextRound = async () => {
        setIsLoading(true)
        const res = await axios.post(`${process.env.API_URL}/start-next-round/${tournamentDetails?.id}`, {
            user_id: Cookies.get("user_id"),
            tournament_id: tournamentDetails?.id,
            type: 'win'
        }, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
        });
        setIsLoading(false)
        if (res.status === 200) {
            console.log(res?.data)
            if (res?.data?.status === 1) {
                toast.success(res?.data?.msg)
                // handleTeams(teams)
                router.reload();
            }
            else {
                toast.error(res?.data?.msg)
            }

        }
    }

    return (
        <>
            <Header pageTitle="Tournament Matches" />
            <section className={`${style.dashboard} ${style.generate_detail}`} id={style.generate_detail}>
                <div className={style.contain}>
                    <div className={style._data_flex}>
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
                            tournamentDetails?.match_type === 'single' && parseInt(tournamentDetails?.start_next_round) === 1 ?
                                <Link
                                    href="#!"
                                    onClick={() => setIsNextRoundPopup(true)}
                                    className={`${style.site_btn} ${style.lg}`}>Initiate next round</Link>
                                :
                                ""
                        }
                    </div>

                    {
                        // tournamentDetails?.in_progress_round?.id > 0 ?
                        //     ""
                        //     :
                        // tournamentDetails?.pending_teams?.length > 1 ?

                        <div className={`${style.btn_blk} ${style.btn_center}`}>
                            {
                                isLoading ?
                                    <div className={style.loadingio_spinner}>
                                        <div className={style.ldio}>
                                            <div></div>
                                        </div>
                                    </div>
                                    :
                                    ""
                            }



                        </div>
                        // :
                        // ""
                    }
                    {
                        tournamentDetails?.match_type === 'double' && tournamentDetails?.completed_rounds >= 1 ?
                            <DoubleElemination tournamentDetails={tournamentDetails} />
                            :
                            tournamentDetails?.rounds?.map((round_row: any, index: number) => {
                                return (
                                    round_row?.status === 'completed' ?
                                        <CompletedMatch round_row={round_row} tournamentDetails={tournamentDetails} type="win" round_no_key={index + 1} />
                                        :
                                        <RoundOne round_row={round_row} tournamentDetails={tournamentDetails} loose_round={0} final_round={0} round_no_key={index + 1} />
                                )
                            })
                    }
                    {
                        isNextRoundPopup ?
                            <div className={isNextRoundPopup ? `${style.start_next_bracket_popup} ${style.popup} ${style.active}` : `${style.start_next_bracket_popup} ${style.popup}`}>
                                <div className={style.table_dv}>
                                    <div className={style.table_cell}>
                                        <div className={style._inner}>
                                            <div className={style.x_btn} onClick={() => setIsNextRoundPopup(false)}></div>
                                            <h3>Round {tournamentDetails?.latestCompletedRound?.round_no} Matches Details</h3>
                                            <div className={style.table_blk_wrap}>
                                                <div className={style.table_blk}>
                                                    {
                                                        isLoading ?
                                                            <div className={style.loading_parent}>
                                                                <div className={style.loadingio_spinner}>
                                                                    <div className={style.ldio}>
                                                                        <div></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            :
                                                            ""
                                                    }
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <td>Sr#</td>
                                                                <td>Team A</td>
                                                                <td>Team B</td>
                                                                <td>Winner</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                formState?.map((match_row: any, index: any) => {
                                                                    return (
                                                                        <tr key={index}>
                                                                            <td>{index + 1}</td>
                                                                            <td>
                                                                                <div className={style.team_main}>
                                                                                    {
                                                                                        match_row?.team1 > 0 ?
                                                                                            <>
                                                                                                <div className={style.data_logo}>
                                                                                                    <Image width={200} height={200} src={match_row?.team_1?.logo ? process.env.ASSET_URL + match_row?.team_1?.logo : PhotoTeam01} alt={match_row?.team_1?.team_name} />
                                                                                                </div>
                                                                                                <div className={style.data_text}>
                                                                                                    <h3>{match_row?.team_1?.team_name}</h3>
                                                                                                    <input type="number" className={style.input} placeholder="Team A Score" name="team1_score" onChange={(e) => handleChange(index, 'team1_score', (e.target.value))} defaultValue={match_row?.team1_score} />
                                                                                                </div>
                                                                                            </>
                                                                                            :
                                                                                            <h4>TBD</h4>
                                                                                    }
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className={style.team_main}>
                                                                                    {
                                                                                        match_row?.team2 > 0 ?
                                                                                            <>
                                                                                                <div className={style.data_logo}>
                                                                                                    <Image width={200} height={200} src={match_row?.team_1?.logo ? process.env.ASSET_URL + match_row?.team_1?.logo : PhotoTeam01} alt={match_row?.team_2?.team_name} />
                                                                                                </div>
                                                                                                <div className={style.data_text}>
                                                                                                    <h3>{match_row?.team_2?.team_name}</h3>
                                                                                                    <input type="number" className={style.input} placeholder="Team B Score" name="team2_score" onChange={(e) => handleChange(index, 'team2_score', (e.target.value))} defaultValue={match_row?.team2_score} />
                                                                                                </div>
                                                                                            </>
                                                                                            :
                                                                                            <h4>TBD</h4>
                                                                                    }
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                {
                                                                                    match_row?.team1 > 0 && match_row?.team2 > 0 ?
                                                                                        <div className={style.select_winner}>
                                                                                            <div className={style.match_type}>
                                                                                                <span>Match {index + 1}</span>
                                                                                            </div>
                                                                                            <div className={style.inner_select}>
                                                                                                <p>Select winner</p>
                                                                                                <select name="winner" id="" className="input" onChange={(e) => handleChange(index, 'winner', (e.target.value))}>
                                                                                                    <option value="">Choose team</option>
                                                                                                    <option value={match_row?.team_1?.id} selected={match_row?.winner === match_row?.team_1?.id ? true : false}>{match_row?.team_1?.team_name}</option>
                                                                                                    <option value={match_row?.team_2?.id} selected={match_row?.winner === match_row?.team_2?.id ? true : false}>{match_row?.team_2?.team_name}</option>
                                                                                                </select>
                                                                                            </div>

                                                                                        </div>
                                                                                        :
                                                                                        ""
                                                                                }
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }

                                                        </tbody>
                                                    </table>

                                                </div>
                                                <div className={`${style.text_center} mt-5 mb-5`}>
                                                    <button
                                                        type="button"
                                                        className={style.site_btn} onClick={handleSaveScore}>
                                                        Update and Start Next Round
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            ""
                    }

                    {/* <Final/> */}
                </div>
            </section >
            <Footer />
        </>
    )
}

export default Generate
