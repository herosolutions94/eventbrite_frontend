import React from "react"
import style from "@/styles/scss/app.module.scss"
import axios from "axios"

const ConfirmationPopup = (props: any) => {
	const { popupClose,deleteId } = props

    const handleDelete = async (id : any) => {
		try {
			if(id){
				const res = await axios.delete(
					`${process.env.API_URL}/teams/${id}`
				)
			}
			
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<>
			<div id={style.add_team_popup} className={style.popup}>
				<div className={style.table_dv}>
					<div className={style.table_cell}>
						<div className={style.contain}>
							<div className={style._inner}>
								<button type="button" className={style.x_btn} onClick={popupClose}></button>
								<h4 className="mb-5">Confirm Delete</h4>
								<div className={style.table_blk_wrap}>
									<div className={style.table_blk}>
                                        <h4>hello world</h4>
                                  
                                        <button 
                                            type="button" 
                                            className={`${style.site_btn} ${style.sm}`} 
                                            onClick={
                                                () => {
                                                    handleDelete(deleteId)
                                                }
                                            }
                                        >
                                            Delete
                                        </button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ConfirmationPopup
