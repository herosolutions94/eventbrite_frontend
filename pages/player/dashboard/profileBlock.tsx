import React from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { PhotoAboutMe } from "@/components/images"
import GetServerImage from "@/components/getServerImage"
import { profile } from "console"

type ProfileBlockProps = {
	profileData: any
}
const ProfileBlock = ({ profileData }: ProfileBlockProps) => {
	return (
		<>
			<div className={style.pro_blk}>
				<div className={`${style.ico} ${style.fill} ${style.round}`}>
					<GetServerImage src="uploads" image={profileData?.user_image} isLoading={false} />
				</div>
				<div className={style.txt}>
					<h2>
						<span>Welcome,</span> {profileData?.firstname + " " + profileData?.lastname}
					</h2>
					<p>Nice to see you again.</p>
				</div>
			</div>
		</>
	)
}

export default ProfileBlock
