import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"
import DatePicker from "react-datepicker"

const SchedulePopup = (props: any) => {
	const { popupClose } = props
	const [startDate, setStartDate] = useState(new Date())
	return (
		<>
			<div id={style.schedule_popup} className={style.popup}>
				<div className={style.table_dv}>
					<div className={style.table_cell}>
						<div className={style.contain}>
							<div className={style._inner}>
								<button type="button" className={style.x_btn} onClick={popupClose}></button>
								<h4 className="mb-5">Tournament Schedule</h4>
								<DatePicker selected={startDate} inline={true} onChange={() => setStartDate(startDate)} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SchedulePopup
