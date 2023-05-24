import React from "react"
import style from "@/styles/scss/app.module.scss"
import MainSearch from "@/components/mainSearch"
// Topfilter props type
type TopFiltersProps = {
	setActiveTab: React.Dispatch<React.SetStateAction<string>>
	activeTab: string
}
const TopFilters = ({ setActiveTab, activeTab }: TopFiltersProps) => {

	return (
		<>
			<MainSearch />
			<div className={style.top_head}>
				<div className={style.txt}>
					<h3>Search Tournaments</h3>
					<p className="opacity-50">Showing 1-30 of 33,013 search results.</p>
				</div>
				<div className="flex items-center justify-between">
					<div>
						<div>
							<select name="" id="" className={style.input}>
								<option value="">Sort by</option>
								<option value="">Newest Listings</option>
								<option value="">Oldest Listings</option>
								<option value="">Closest</option>
							</select>
						</div>
						<div className = "mt-2">
							<button 
								className="btn btn-primary px-4"
								onClick={() => setActiveTab("map")}
							>Map</button>
							<button 
								className="btn btn-primary ms-2 px-4"
								onClick={() => setActiveTab("list")}
							>List</button>
						</div>
					</div>
				</div>
				
				

			</div>
		</>
	)
}

export default TopFilters
