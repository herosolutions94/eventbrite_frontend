import React from "react"
import SubBanner from "@/components/subBanner"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import { PhotoAbout } from "@/components/images"
import Intro from "./about/intro"
import Affiliate from "./about/affiliate"
import Contact from "./home/contact"

const About = () => {
	return (
		<>
			<Header pageTitle="About us" />
			<SubBanner title="About us" background={PhotoAbout} />
			<Intro />
			<Affiliate />
			<Contact />
			<Footer />
		</>
	)
}

export default About
