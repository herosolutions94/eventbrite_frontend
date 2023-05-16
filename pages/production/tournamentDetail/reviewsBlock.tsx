import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoUser_01, PhotoUser_02, PhotoUser_03 } from "@/components/images"
import RatingStars from "@/components/ratingStars"

const ReviewsBlock = () => {
	return (
		<>
			<div className={`${style.review_block_wrapper} ${style.blk}`}>
				<div className={style.review_block}>
					<div className={style.top_blk}>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image src={PhotoUser_01} alt="" />
						</div>
						<div className={style.title_blk}>
							<div className={style.title}>Tom Linson</div>
							<div className={style.date}>March 1, 2022</div>
						</div>
					</div>
					<div className={style.mid_blk}>
						<p>I feel like I lucked out choosing Steve to help with my first CA home purchase. I was relocating from WA to CA and chose Irvine to purchase a new construction home from builder Irvine Pacific in Orchard Hills. He new the process and area well with working with the Irvine Pacific sales team and make the process very smooth and enjoyable.</p>
					</div>
					<div className={style.btm_blk}>
						<RatingStars value={4} />
					</div>
				</div>
				<div className={style.review_block}>
					<div className={style.top_blk}>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image src={PhotoUser_02} alt="" />
						</div>
						<div className={style.title_blk}>
							<div className={style.title}>Tom Linson</div>
							<div className={style.date}>March 1, 2022</div>
						</div>
					</div>
					<div className={style.mid_blk}>
						<p>It was a real pleasure working with Steve. We weren&lsquo;t sure whether we would sell our house and get the best price in a slow market. We met with Steve and explained our reservations and from the get-go, he was extremely patient and eased our decision-making process. We had a professional photographer at our house and within less than a week, we had offers way over our asking price.</p>
					</div>
					<div className={style.btm_blk}>
						<RatingStars value={4} />
					</div>
				</div>
				<div className={style.review_block}>
					<div className={style.top_blk}>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image src={PhotoUser_03} alt="" />
						</div>
						<div className={style.title_blk}>
							<div className={style.title}>Tom Linson</div>
							<div className={style.date}>March 1, 2022</div>
						</div>
					</div>
					<div className={style.mid_blk}>
						<p>First, Steve Park is very honest, friendly, and super responsive. He responded to all my emails/messages within a couple of minutes. Once you talk to him then you&lsquo;ll see why I&lsquo;m highly suggesting it. Thanks, Steve Park. It was my pleasure to know you and thank you for the great experience.&nbsp;</p>
					</div>
					<div className={style.btm_blk}>
						<RatingStars value={4} />
					</div>
				</div>
			</div>
		</>
	)
}

export default ReviewsBlock
