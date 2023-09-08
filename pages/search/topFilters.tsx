import React, { useMemo } from "react"
import style from "@/styles/scss/app.module.scss"
import MainSearch from "@/components/mainSearch"
import axios from "axios";
import { useRouter } from "next/router"

import Image from "next/image"
import { IconList,IconMap } from "@/components/images"


// Topfilter props type
type TopFiltersProps = {
	setActiveTab: React.Dispatch<React.SetStateAction<string>>
	activeTab: string,
	setTournaments: React.Dispatch<React.SetStateAction<any>>
	response: any
	setResponse: React.Dispatch<React.SetStateAction<any>>,
	category: string,
	name: string
}

const TopFilters = ({ 
		setActiveTab, 
		activeTab,
		setTournaments,
		setResponse,
		response ,
		category,
		name
	}: TopFiltersProps) => {
	const paginationData = useMemo(() => {

		const firstIndex = response?.data.length ? (response?.current_page - 1) * response?.per_page + 1 : 0
		const lastIndex = response?.data.length + (response?.current_page - 1) * response?.per_page 
		
		return `Showing ${ firstIndex } to ${ lastIndex } of ${ response?.total } entries`
	}, [response])

	const router = useRouter()

	const handleSorting = async (e: React.ChangeEvent<HTMLSelectElement>) => {
		const sorting = e.target.value;
		try {
			const res = await axios.get(`${process.env.API_URL}/tournaments?page=${response.current_page}&category=${category}&name=${name}&sort=${sorting}`);
			if (res.status === 200) {
				setTournaments(res.data.data.data);
				setResponse(res.data.data);
				router.push({
					pathname: "/search",
					query: {
						page: response.current_page,
						category: category,
						name: name,
						sort: sorting
					},
				})
			}
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			<MainSearch 
				setTournaments={setTournaments}
				setResponse={setResponse}
			/>
			<div className={style.top_head}>
				<div className={style.txt}>
					<h3>Search Tournaments</h3>
					<p className="opacity-50">{paginationData}</p>
				</div>
				<div className={style.btn_blk}>
					<div className={style.sort_list_btn}>
						<button type="button" className={activeTab === "list" ? style.active : ""}>
							<Image 
								width={100}
								height={100} 
								src={IconList} 
								alt="" 
								onClick={() => setActiveTab("list")}
							/>
						</button>
						<button type="button" className={activeTab === "map" ? style.active : ""}>
							<Image 
								width={100} 
								height={100} 
								src={IconMap} 
								alt="" 
								onClick={() => setActiveTab("map")}
							/>
						</button>
					</div>
					<select name="" id="" className={style.input} onChange={handleSorting}>
						<option value="">Sort by</option>
						<option value="asc">Newest Listings</option>
						<option value="desc">Oldest Listings</option>
						{/* <option value="">Closest</option> */}
					</select>
				</div>
			</div>
		</>
	)
}

export default TopFilters
