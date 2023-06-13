import React from "react"
import style from "@/styles/scss/app.module.scss"
import RatingStars from "@/components/ratingStars"

const ReviewPopup = (props: any) => {
	const { popupClose } = props
	return (
		<>
			<div id={style.review_popup} className={style.popup}>
				<div className={style.table_dv}>
					<div className={style.table_cell}>
						<div className={style.contain}>
							<div className={style._inner}>
								<button type="button" className={style.x_btn} onClick={popupClose}></button>
								<h4 className="mb-5">Add Review</h4>
								<form action="" method="post">
									<div className={style.form_blk}>
										<RatingStars value={0} />
									</div>
									<div className={style.form_blk}>
										<h6>Leave Feedback</h6>
										<textarea name="" id="" rows={5} className={style.input} placeholder="Type something here"></textarea>
									</div>
									<div className={`${style.btn_blk} mt-5 justify-content-center`}>
										<button type="submit" className={style.site_btn}>Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ReviewPopup
