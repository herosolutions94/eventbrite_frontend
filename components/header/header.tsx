import Head from "next/head"
import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Navigation from "./navigation"
import Logo from "../logo"
import HeaderStrip from "./headerStrip"
import Router from "next/router"
import Cookies from "js-cookie"
import Script from "next/script"

const Header = (props: any) => {
	const { pageTitle } = props
	const [header, setHeader] = useState("production")
	const [navActive, setNavActive] = useState(false)
	const navToggleHandle = () => {
		setNavActive(!navActive)
	}
	const role = Cookies.get("role")

	useEffect(() => {
		const { pathname } = Router
		if (pathname == "/player" || pathname == "/player/notifications" || pathname == "/player/booking" || pathname == "/player/booking-detail" || pathname == "/player/tournaments" || pathname == "/player/transactions" || pathname == "/player/wishlists" || pathname == "/player/messages") {
			setHeader("player")
		} else if (pathname == "/organizer" || pathname == "/organizer/notifications" || pathname == "/organizer/booking" || pathname == "/organizer/booking-detail" || pathname == "/organizer/tournaments" || pathname == "/organizer/add-new-tournament" || pathname == "/organizer/transactions" || pathname == "/organizer/wishlists" || pathname == "/organizer/messages") {
			setHeader("organizer")
		} else {
			setHeader("production")
		}
	}, [])

	return (
		<>
			<Head>
				<title>{pageTitle} — Eventplus</title>
				<meta name="description" content="Eventplus" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.ico" />
				{/* <link rel="stylesheet" href="https://jquery.app/jqueryscripttop.css" /> */}
				{/* <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js" async></script> */}
				{/* <script type="text/javascript" src="https://www.jqueryscript.net/demo/Single-Elimation-Tournament-Bracket-Generator-Gracket/jquery.gracket.min.js" async></script>
				<script type="text/javascript" src="https://www.jqueryscript.net/demo/Single-Elimation-Tournament-Bracket-Generator-Gracket/test.js" async></script> */}
			
			</Head>
			<header id={style.header} className={`${header !== "production" ? style.logged : ""}`}>
				<div className={style.contain}>
					<Logo />
					<button type="button" className={`${style.toggle} ${navActive ? style.active : ""}`} onClick={navToggleHandle}>
						<span></span>
					</button>
					{header === "production" ? <HeaderStrip /> : null}
					<Navigation headerType={role} navActive={navActive} />
				</div>
			</header>
		</>
	)
}

export default Header
