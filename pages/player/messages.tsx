import Header from "@/components/header/header"
import React from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import ChatBlock from "./messages/chatBlock"
import UserBlock from "./messages/userBlock"
import ChatFormBlock from "./messages/chatFormBlock"

const Messages = () => {
	return (
		<>
			<Header pageTitle="Messages" />
			<section id={style.messages}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<UserBlock />
						<div className={style.chat_blk}>
							<ChatBlock />
							<ChatFormBlock />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Messages
