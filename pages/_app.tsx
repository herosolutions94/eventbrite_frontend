import "@/styles/css/bootstrap.min.css"
import "@/styles/css/slick.min.css"
import "react-datepicker/dist/react-datepicker.css"
import "@/styles/scss/app.generic.scss"
// import "@/styles/scss/global.module.scss"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
