import React from "react"
import style from "@/styles/scss/app.module.scss"

const Filters = () => {
	return (
		<>
			<div id={style.filter}>
				<button type="button" className={style.x_btn}></button>
				<div className={style.head}>
					<h5 className="mb-0">Filters</h5>
				</div>
				<div className={style.in_blk}>
					<h6>Degree Requirement</h6>
					<ul className={style.ctg_lst}>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Collage Degree
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								University Degree
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Graduate Diploma
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Not Specified
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								No Minimum Requirement
							</label>
						</li>
					</ul>
				</div>
				<div className={style.in_blk}>
					<h6>Location</h6>
					<ul className={style.ctg_lst}>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								London
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Bedforshire
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Aberdeen
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Birmingham
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Cambridge
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Dundee
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Edinburgh
							</label>
						</li>
					</ul>
				</div>
				<div className={style.in_blk}>
					<h6>Job Industry</h6>
					<ul className={style.ctg_lst}>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Business and Operation
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Data Analytics &amp; Research
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Information Technology
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Banking &amp; Finance Services
							</label>
						</li>
					</ul>
				</div>
				<div className={style.in_blk}>
					<h6>Job Type</h6>
					<ul className={style.ctg_lst}>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Graduate Jobs
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Interships
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Placements
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Insight Programmes
							</label>
						</li>
					</ul>
				</div>
				<div className={style.in_blk}>
					<h6>Visa Acceptance</h6>
					<ul className={style.ctg_lst}>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Accept Graduate Visa Holders
							</label>
						</li>
					</ul>
				</div>
				<div className={style.in_blk}>
					<h6>Salary Expectation</h6>
				</div>
			</div>
		</>
	)
}

export default Filters
