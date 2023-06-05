import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoTeam01 } from "@/components/images"

const TournamentHeader = () => {
	return (
		<>
			<div className={style.data}>
				<div className={style.data_logo}>
					<Image width={200} height={200} src={PhotoTeam01} alt="Team Logo" />
				</div>
				<div className={style.data_text}>
					<div className={style.tags_blk}>
						<strong className={style.text_prime}>Double Elimination</strong>
						<span className={style.tag}>Sport</span>
					</div>
					<h2>Dota 2 Tournament Keep Assault</h2>
					<ul className={style.date_time_list}>
						<li>
							Start Date: <span>03 May, 2023</span>
						</li>
						<li>●</li>
						<li> 03 May, 2023</li>
						<li>●</li>
						<li>
							Time: <span>04:00 PM</span>
						</li>
					</ul>
				</div>
			</div>
			<div className={style.content}>
				<h5>Tournament Overview</h5>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, tempore esse nisi alias delectus tempora sed ut error dolorem aut necessitatibus adipisci hic illo natus corporis dolore inventore amet nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veritatis earum fugit id officia accusamus sequi quasi voluptatem tempora tenetur hic minus, impedit dolores harum quos asperiores perferendis voluptate iusto.</p>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti tenetur odit sequi laboriosam quidem eum id maiores dolore explicabo! Magni nihil quas doloribus tenetur aut eos nobis voluptatem, perspiciatis nisi.</p>
				<p>Laboriosam quidem eum id maiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quod adipisci dolor, fuga, architecto natus qui id debitis doloremque laboriosam iure unde blanditiis nemo!</p>
			</div>
		</>
	)
}

export default TournamentHeader
