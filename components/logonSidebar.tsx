import React from "react"
import style from "@/styles/scss/app.module.scss"
import Logo from "./logo"
import Link from "next/link"

const LogonSidebar = (props: any) => {
	const { bg_image } = props
	return (
		<>
			<div className={style.login_sidebar} style={{ backgroundImage: "url(" + bg_image.src + ")" }}>
				<div className={style.login_sidebar_txt}>
					<Logo />
					<h3 className="mt-4">Welcome to Eventplus!</h3>
					<p>Rerum veniam dolores sit illum consectetur dolorum numquam eveniet iste. Pariatur fugiat consequatur nobis dolor et labore sit voluptas omnis.</p>
					<ul className={style.terms_list}>
						<li>
							<Link href="/terms-conditions">Terms & conditions</Link>
						</li>
						<li>
							<Link href="/disclaimer">Disclaimer</Link>
						</li>
						<li>
							<Link href="/privacy-policy">Privacy Policy</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default LogonSidebar
