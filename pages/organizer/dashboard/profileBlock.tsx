import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoAboutMe } from "@/components/images"

const ProfileBlock = () => {
	return (
		<>
			<div className={style.pro_blk}>
				<div className={`${style.ico} ${style.fill} ${style.round}`}>
					<Image width={1000} height={1000} src={PhotoAboutMe} alt="" />
				</div>
				<div className={style.txt}>
					<h2>
						<span>Welcome,</span> Jennifer Kem!
					</h2>
					<p>Nice to see you again.</p>
				</div>
			</div>
		</>
	)
}

export default ProfileBlock
