import React, { useState, useEffect } from "react"
import style from "@/styles/scss/app.module.scss"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import Cookies from "js-cookie"
import { useRouter } from "next/router"

const StartTournamentPopup = (props: any) => {
    const router = useRouter()
	const { TogglePoup,popupShow } = props
    const [tournamentDetails, setTournamentDetails] = useState({
        type: "",
      });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setTournamentDetails({ ...tournamentDetails, [name]: value });
  };
	const handleStart = async (e:any,id : any) => {
        e.preventDefault();
        if (tournamentDetails?.type == "") {
            toast.error("Please Select Elemination type to continue!");return;
          }
		try {
			if(id && id > 0){
                const res = await axios.post(`${process.env.API_URL}/start-tournament/${id}`, {
                    user_id: Cookies.get("user_id"),
                    type:tournamentDetails?.type
                }, {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("token")}`,
                    },
                });
				if(res.status === 200){
                    console.log(res?.data)
                    if(res?.data?.status===1){
                        toast.success(res?.data?.msg)
                        TogglePoup({show:false,team_id:null})
                        // handleTeams(teams)
                        setTimeout(() => {
                            router.push("/organizer/select-team")
                        }, 2000);
                    }
                    else{
                        toast.error(res?.data?.msg)
                    }
                    
                }
			}
            else{
                toast.error('Invalid request!')
            }
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<>
        <ToastContainer />
        <div className={popupShow?.show && popupShow?.item > 0 ? `${style.generate_bracket_popup} ${style.popup} ${style.active}` : `${style.generate_bracket_popup} ${style.popup}`}>
					<div className={style.table_dv}>
						<div className={style.table_cell}>
							<div className={style._inner}>
								<div className={style.x_btn}  onClick={TogglePoup}></div>
								<h3>Select elimination type</h3>
								<form onSubmit={(e)=>handleStart(e,popupShow?.item)} method="post">
									<div className={style.opt_choose}>
										<select className={style.input} name="type" onChange={handleChange}>
                                            <option value="">Select Type</option>
											<option value={"single"}>Single elimination</option>
											<option value={"double"}>Double elimination</option>
										</select>
									</div>
									<div className={`${style.btn_blk}`}>
										<button type="submit" className={`${style.site_btn} ${style.sm}`}>
										Start tournament
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
		</>
	)
}

export default StartTournamentPopup
