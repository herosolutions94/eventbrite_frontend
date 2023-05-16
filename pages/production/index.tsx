import Header from "@/components/header/header"
import Banner from "./home/banner"
import Footer from "@/components/footer"
import Contact from "./home/contact"
import Report from "./home/report"
import Categories from "./home/categories"
import Matches from "./home/matches"

const Home = () => {
	return (
		<>
			<Header pageTitle="Home" />
			<Banner />
			<Categories />
			<Report />
			<Matches />
			<Contact />
			<Footer />
		</>
	)
}

export default Home
