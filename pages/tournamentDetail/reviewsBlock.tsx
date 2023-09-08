import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoUser_01, PhotoUser_02, PhotoUser_03 } from "@/components/images"
import RatingStars from "@/components/ratingStars"


type ReviewsProps = {
	reviews : any
}
const ReviewsBlock = (reviews: ReviewsProps ) => {
	const reviewsData = reviews?.reviews;
	
	return (
		<>
			<div className={`${style.review_block_wrapper} ${style.blk}`}>
		{reviewsData?.map((review: any, index: number) => (
			<div className={style.review_block} key={index}>
				<div className={style.top_blk}>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image src={PhotoUser_01} alt="" />
						</div>
					<div className={style.title_blk}>
						<div className={style.title}>{review?.user?.name}</div>
						<div className={style.date}>
							{new Date(review?.created_at).toLocaleDateString('en-US', {
								month: 'long',
								day: 'numeric',
								year: 'numeric',
							})}
						</div>
					</div>
				</div>
					<div className={style.mid_blk}>
						<p>{review?.comment}</p>
					</div>
					<div className={style.btm_blk}>
						<RatingStars value={4} />
					</div>
			</div>
		))}

			</div>
		</>
	)
}

export default ReviewsBlock
