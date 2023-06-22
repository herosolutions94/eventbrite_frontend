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
				<div className={style.input_wrap}>
					<input 
						type="text" 
						name="" 
						id="" 
						className={style.input} 
						placeholder="Categories"
						onChange={(e) => setCategories(e.target.value)}
						value={categories}
						
					/>
					<div className={style.suggest_block}>
						<ul className={style.scrollbar}>
							<li>39 Lawrence St. Dyersburg, TN 38024</li>
							<li>99 N. Windfall St. Southfield, MI 48076</li>
							<li>564 River Street Kalamazoo, MI 49009</li>
							<li>61 Dogwood Lane Biloxi, MS 39532</li>
							<li>17 Blackburn Drive Muskegon, MI 49441</li>
							<li>8678 Silver Spear Dr. Avon Lake, OH 44012</li>
							<li>297 Lake Dr. New York, NY 10025</li>
							<li>93 South Lincoln Court Bronx, NY 10468</li>
							<li>71 Parker Drive Fresh Meadows, NY 11365</li>
							<li>49 East Alderwood Drive Buffalo, NY 14215</li>
							<li>429 Homewood Drive New York, NY 10009</li>
							<li>44 Shirley Ave. Jamaica, NY 11434</li>
						</ul>
					</div>
				</div>
				<div className={style.input_wrap}>
					<input 
						type="text" 
						name="" 
						id="" 
						className={style.input} 
						placeholder="Search by Name"
						// onChange={(e) => setCategories(e.target.value)}
						value={categories}
					/>
				</div>
				{/* <input 
					type="text" 
					name="" 
					id="" 
					className={style.input} 
					placeholder="Post code" 
					onChange={(e) => setPostCode(e.target.value)}
					value={postCode}
					
				/> */}
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
