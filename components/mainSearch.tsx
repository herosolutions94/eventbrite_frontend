import React,{useState} from "react"
import style from "@/styles/scss/app.module.scss"
import { useRouter } from "next/router"
import axios from "axios"
import Search from "@/pages/search"

type MapSearchProps = {
	setTournaments: React.Dispatch<React.SetStateAction<any>>
	setResponse?: React.Dispatch<React.SetStateAction<any>>
}
const MainSearch = ({ setTournaments }: MapSearchProps) => {
	
	const router = useRouter()
	const params = useRouter().query;
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = React.useState(params?.category || "")
	const [postCode, setPostCode] = React.useState(params?.postCode || "")
	const [eventName , setEventName] = React.useState(params?.name || "")

	const handleRedirect = (e: any) => {
		e.preventDefault()
		const formData = {
			category: category ? category : params.category,
			name: eventName ? eventName : params.name,
		}
		router.push({
			pathname: "/search",
			query: formData,
		})
	}
	const handleCategorySearch = async (e: any) => {
		const search = e.target.value;
		setCategory(search);
		try {
			const response = await axios.post(`${process.env.API_URL}/get-categories`, { search });
			if (response.status === 200) {
				setCategories(response.data.data);
			}
		} catch (error) {
			console.log(error);
		}

	}


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
						onChange={(e) => handleCategorySearch(e)}
						value={category}
						
					/>
					<div className={style.suggest_block}>
						<ul className={style.scrollbar}>
							{categories && categories.map((category: any) => (
								<li 
									key={category.id} 
									onClick={
										() => {
											setCategory(category.name)
											setCategories([])
										}
									}
								>
									{category.name}
								</li>
							))}
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
						onChange={(e) => setEventName(e.target.value)}
						value={eventName}
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
