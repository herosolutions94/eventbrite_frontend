import React from "react"
import style from "@/styles/scss/app.module.scss"
import { PhotoBlog01, PhotoBlog02 } from "@/components/images"
import Image from "next/image"

const ChatBlock = () => {
	return (
		<>
			<div className={style.chat_blk_inner}>
				<div className={`${style.bubble} ${style.me}`}>
					<div className={style.txt}>
						<div className={style.name}>
							<strong>You</strong>
							<span className={style.date}>10:25 AM</span>
						</div>
						<div className={style.cnt}>
							<p>Lorem Ipsum is simply dummy text of a printing type setting industry. Lorem Ipsum has been the industry standard.</p>
						</div>
					</div>
				</div>
				<div className={style.date_bar}>20 Dec Mon At 10:30 AM</div>
				<div className={`${style.bubble} ${style.you}`}>
					<div className={style.txt}>
						<div className={style.name}>
							<strong>Anita S. Vaughn</strong>
							<span className={style.date}>10:25 AM</span>
						</div>
						<div className={style.cnt}>
							<p>Hi, there, How are you?</p>
						</div>
						<div className={style.cnt}>
							<p>Waiting for your reply. As i have to go back soon. I have to travel long distance.</p>
						</div>
					</div>
				</div>
				<div className={`${style.bubble} ${style.me}`}>
					<div className={style.txt}>
						<div className={style.name}>
							<strong>You</strong>
							<span className={style.date}>10:25 AM</span>
						</div>
						<p>
							<Image width={300} height={300} src={PhotoBlog01} alt="" />
							<Image width={300} height={300} src={PhotoBlog02} alt="" />
						</p>
					</div>
				</div>
				<div className={`${style.bubble} ${style.you}`}>
					<div className={style.txt}>
						<div className={style.name}>
							<strong>Anita S. Vaughn</strong>
							<span className={style.date}>10:25 AM</span>
						</div>
						<div className={style.cnt}>
							<p>Hi, there, How are you?</p>
						</div>
						<div className={style.cnt}>
							<p>Waiting for your reply. As i have to go back soon.</p>
						</div>
					</div>
				</div>
				<div className={style.date_bar}>31 Dec Mon At 07:30 AM</div>
				<div className={`${style.bubble} ${style.me}`}>
					<div className={style.txt}>
						<div className={style.name}>
							<strong>You</strong>
							<span className={style.date}>10:25 AM</span>
						</div>
						<div className={style.cnt}>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rem sequi debitis necessitatibus blanditiis harum optio hic excepturi ea placeat quisquam facere nisi unde odit nobis maxime, dignissimos rerum aliquid!</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ChatBlock
