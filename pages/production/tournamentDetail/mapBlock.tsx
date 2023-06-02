import React from "react"
import style from "@/styles/scss/app.module.scss"

const MapBlock = () => {
	return (
		<>
			<div className={style.map_blk}>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03612512146!2d-74.30933714401378!3d40.6975399537724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1681979094628!5m2!1sen!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</>
	)
}

export default MapBlock
