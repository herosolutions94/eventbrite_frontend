import React from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import Header from "@/components/header/header"

const SelectTeam = () => {
	const matches = [
		[
			{ name: "Erik Zettersten", id: "erik-zettersten", seed: 1, displaySeed: "D1", score: 47 },
			{ name: "Andrew Miller", id: "andrew-miller", seed: 2 },
		],
		[
			{ name: "James Coutry", id: "james-coutry", seed: 3 },
			{ name: "Sam Merrill", id: "sam-merrill", seed: 4 },
		],
		[
			{ name: "Anothy Hopkins", id: "anthony-hopkins", seed: 5 },
			{ name: "Everett Zettersten", id: "everett-zettersten", seed: 6 },
		],
		[
			{ name: "John Scott", id: "john-scott", seed: 7 },
			{ name: "Teddy Koufus", id: "teddy-koufus", seed: 8 },
		],
		[
			{ name: "Arnold Palmer", id: "arnold-palmer", seed: 9 },
			{ name: "Ryan Anderson", id: "ryan-anderson", seed: 10 },
		],
		[
			{ name: "Jesse James", id: "jesse-james", seed: 1 },
			{ name: "Scott Anderson", id: "scott-anderson", seed: 12 },
		],
		[
			{ name: "Josh Groben", id: "josh-groben", seed: 13 },
			{ name: "Sammy Zettersten", id: "sammy-zettersten", seed: 14 },
		],
		[
			{ name: "Jake Coutry", id: "jake-coutry", seed: 15 },
			{ name: "Spencer Zettersten", id: "spencer-zettersten", seed: 16 },
		],
	];
	return (
		<>
			<Header pageTitle="Select Team" />
			<section className={`${style.dashboard} ${style.organizer_detail}`} id={style.tournament_select_team}>
				<div className={style.contain}>
					<div id={style.select_teams} className={style.blk}>
						<div className={style.round_blk_wrapper}>
							<div className={style.round_blk}>
								<h4 className="mb-4">Round 1</h4>
								<div className={`${style.match_blk} mb-5`}>
									<h6 className={style.text_prime}>Match 1</h6>
									<div className={style.match_team_blk}>
										<div className={style.inner_blk}>
											<select name="" id="" className={style.input}>
												<option value="">Select Team</option>
												<option value="">Team 01</option>
												<option value="">Team 02</option>
												<option value="">Team 03</option>
												<option value="">Team 04</option>
												<option value="">Team 05</option>
												<option value="">Team 06</option>
											</select>
											<select name="" id="" className={style.input}>
												<option value="">Select Team</option>
												<option value="">Team 01</option>
												<option value="">Team 02</option>
												<option value="">Team 03</option>
												<option value="">Team 04</option>
												<option value="">Team 05</option>
												<option value="">Team 06</option>
											</select>
										</div>
										<select name="" id="" className={style.input}>
											<option value="">Select Winner</option>
											<option value="">Team 01</option>
											<option value="">Team 02</option>
										</select>
									</div>
								</div>
								<div className={`${style.match_blk} mb-5`}>
									<h6 className={style.text_prime}>Match 2</h6>
									<div className={style.match_team_blk}>
										<div className={style.inner_blk}>
											<select name="" id="" className={style.input}>
												<option value="">Select Team</option>
												<option value="">Team 01</option>
												<option value="">Team 02</option>
												<option value="">Team 03</option>
												<option value="">Team 04</option>
												<option value="">Team 05</option>
												<option value="">Team 06</option>
											</select>
											<select name="" id="" className={style.input}>
												<option value="">Select Team</option>
												<option value="">Team 01</option>
												<option value="">Team 02</option>
												<option value="">Team 03</option>
												<option value="">Team 04</option>
												<option value="">Team 05</option>
												<option value="">Team 06</option>
											</select>
										</div>
										<select name="" id="" className={style.input}>
											<option value="">Select Winner</option>
											<option value="">Team 01</option>
											<option value="">Team 02</option>
										</select>
									</div>
								</div>
								<div className={`${style.match_blk} mb-5`}>
									<h6 className={style.text_prime}>Match 3</h6>
									<div className={style.match_team_blk}>
										<div className={style.inner_blk}>
											<select name="" id="" className={style.input}>
												<option value="">Select Team</option>
												<option value="">Team 01</option>
												<option value="">Team 02</option>
												<option value="">Team 03</option>
												<option value="">Team 04</option>
												<option value="">Team 05</option>
												<option value="">Team 06</option>
											</select>
											<select name="" id="" className={style.input}>
												<option value="">Select Team</option>
												<option value="">Team 01</option>
												<option value="">Team 02</option>
												<option value="">Team 03</option>
												<option value="">Team 04</option>
												<option value="">Team 05</option>
												<option value="">Team 06</option>
											</select>
										</div>
										<select name="" id="" className={style.input}>
											<option value="">Select Winner</option>
											<option value="">Team 01</option>
											<option value="">Team 02</option>
										</select>
									</div>
								</div>
								<div className={`${style.match_blk} mb-5`}>
									<h6 className={style.text_prime}>Match 4</h6>
									<div className={style.match_team_blk}>
										<div className={style.inner_blk}>
											<select name="" id="" className={style.input}>
												<option value="">Select Team</option>
												<option value="">Team 01</option>
												<option value="">Team 02</option>
												<option value="">Team 03</option>
												<option value="">Team 04</option>
												<option value="">Team 05</option>
												<option value="">Team 06</option>
											</select>
											<select name="" id="" className={style.input}>
												<option value="">Select Team</option>
												<option value="">Team 01</option>
												<option value="">Team 02</option>
												<option value="">Team 03</option>
												<option value="">Team 04</option>
												<option value="">Team 05</option>
												<option value="">Team 06</option>
											</select>
										</div>
										<select name="" id="" className={style.input}>
											<option value="">Select Winner</option>
											<option value="">Team 01</option>
											<option value="">Team 02</option>
										</select>
									</div>
								</div>
								<div className={`${style.match_blk} mb-5`}>
									<h6 className={style.text_prime}>Match 5</h6>
									<div className={style.match_team_blk}>
										<div className={style.inner_blk}>
											<select name="" id="" className={style.input}>
												<option value="">Select Team</option>
												<option value="">Team 01</option>
												<option value="">Team 02</option>
												<option value="">Team 03</option>
												<option value="">Team 04</option>
												<option value="">Team 05</option>
												<option value="">Team 06</option>
											</select>
											<select name="" id="" className={style.input}>
												<option value="">Select Team</option>
												<option value="">Team 01</option>
												<option value="">Team 02</option>
												<option value="">Team 03</option>
												<option value="">Team 04</option>
												<option value="">Team 05</option>
												<option value="">Team 06</option>
											</select>
										</div>
										<select name="" id="" className={style.input}>
											<option value="">Select Winner</option>
											<option value="">Team 01</option>
											<option value="">Team 02</option>
										</select>
									</div>
								</div>
								<div className={`${style.match_blk} mb-5`}>
									<h6 className={style.text_prime}>Match 6</h6>
									<div className={style.match_team_blk}>
										<div className={style.inner_blk}>
											<select name="" id="" className={style.input}>
												<option value="">Select Team</option>
												<option value="">Team 01</option>
												<option value="">Team 02</option>
												<option value="">Team 03</option>
												<option value="">Team 04</option>
												<option value="">Team 05</option>
												<option value="">Team 06</option>
											</select>
											<select name="" id="" className={style.input}>
												<option value="">Select Team</option>
												<option value="">Team 01</option>
												<option value="">Team 02</option>
												<option value="">Team 03</option>
												<option value="">Team 04</option>
												<option value="">Team 05</option>
												<option value="">Team 06</option>
											</select>
										</div>
										<select name="" id="" className={style.input}>
											<option value="">Select Winner</option>
											<option value="">Team 01</option>
											<option value="">Team 02</option>
										</select>
									</div>
								</div>
								<div className={`${style.btn_blk} mt-5`}>
									<button type="button" className={style.read_more_btn}>
										Add New Match
									</button>
									<br />
									<button type="button" className={`${style.site_btn} w-100`}>
										Start Round
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <Footer /> */}
		</>
	)
}

export default SelectTeam
