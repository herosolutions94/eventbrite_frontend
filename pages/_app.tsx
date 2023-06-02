import "@/styles/css/bootstrap.min.css"
import "@/styles/css/slick.min.css"
import "react-datepicker/dist/react-datepicker.css"
import "@/styles/scss/app.generic.scss"
// import "@/styles/scss/global.module.scss"
import type { AppProps } from "next/app"
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
	return(
		<>
			<ToastContainer />
			<Component {...pageProps} toast={toast} />
		</>
	)	
}
