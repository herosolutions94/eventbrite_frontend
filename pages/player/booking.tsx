import Header from "@/components/header/header"
import React,{useEffect,useState} from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import BookingTable from "./booking/bookingTable"
import BookingTopBlock from "./booking/bookingTopBlock"
import axios from "axios"

type BookingData = {
	otp: string;
	fullName: string;
	email: string;
	phoneNumber: string;
	intrests: string;
}
const Booking = () => {
	const [bookingData, setBookingData] = useState<BookingData | []>([]);
	useEffect(() => {
		fetchBookingData();
	}, []);
		
	const fetchBookingData = async () => {
		try {
			const response = await axios.get(`${process.env.API_URL}/bookings`);
			if (response.status === 200) {
				setBookingData(response.data.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Header pageTitle="Booking" />
			<section className={style.dashboard} id={style.booking}>
				<div className={style.contain}>
					<h5 className="mb-4">My Bookings</h5>
					<BookingTopBlock />
					<BookingTable 
						bookingData={bookingData as BookingData[]}
					/>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Booking
