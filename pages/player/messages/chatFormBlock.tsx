import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { IconAttach, IconSend } from "@/components/images"

const ChatFormBlock = () => {
	return (
		<>
			<div className={style.chat_form_blk}>
				<form action="" method="post">
					<div className={style.attach_btn}>
						<Image width={100} height={100} src={IconAttach} alt="" />
						<input type="file" name="" id="" />
					</div>
					<input type="text" name="" id="" className={style.input} placeholder="Type a message" />
					<button type="submit">
						<Image width={100} height={100} src={IconSend} alt="" />
						Send
					</button>
				</form>
			</div>
		</>
	)
}

export default ChatFormBlock
