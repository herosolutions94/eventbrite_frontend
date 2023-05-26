import React from "react"
import style from "@/styles/scss/app.module.scss"
import { useRouter } from "next/router"
import axios from "axios"

type MapSearchProps = {
	setTournaments: React.Dispatch<React.SetStateAction<any>>
	setResponse?: React.Dispatch<React.SetStateAction<any>>
}
const MainSearch = ({ setTournaments }: MapSearchProps) => {
	
	const router = useRouter()
	const params = useRouter().query;
	const [categories, setCategories] = React.useState(params?.categories || "")
	const [postCode, setPostCode] = React.useState(params?.postCode || "")

	const handleRedirect = (e: any) => {
		e.preventDefault()
		const formData = {
			categories: categories ? categories : params.categories,
			postCode: postCode ? postCode : params.postCode,
		}
		fetchTournaments();
		router.push({
			pathname: "/production/search",
			query: formData,
		})
	}
	const fetchTournaments = async () => {
	
		try {
			const response = await axios.get(`${process.env.API_URL}/tournaments?category=${categories}&postal_code=${postCode}`);
			if (response.status === 200) {
				setTournaments(response.data.data.data);
			}
		} catch (error) {
			console.log(error);
		}
	};


	return (
		<>
			<form action="" method="post" className={style.main_search_form} onSubmit={handleRedirect}>
				<input 
					type="text" 
					name="" 
					id="" 
					className={style.input} 
					placeholder="Search by Categories" 
					onChange={(e) => setCategories(e.target.value)}
					value={categories}
					
				/>
				<input 
					type="text" 
					name="" 
					id="" 
					className={style.input} 
					placeholder="Post code" 
					onChange={(e) => setPostCode(e.target.value)}
					value={postCode}
					
				/>
				<button 
					type="submit" 
					className={style.site_btn}
				>
					Search
				</button>
			</form>
		</>
	)
}

export default MainSearch
