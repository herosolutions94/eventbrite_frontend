import React, { useState,useEffect } from "react"
import style from "@/styles/scss/app.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
import CategoryCard from "@/components/categoryCard"
import { PhotoBlog01, PhotoBlog02, PhotoBlog03 } from "@/components/images"
import { PhotoMainSlide } from "@/components/images"
import Pagination from "@/components/pagination"
import TopFilters from "./search/topFilters"
import MapBlock from "./search/mapBlock"
import axios from "axios"
import { useRouter } from "next/router"



const Search = () => {
	const [showMap, setShowMap] = useState(false)
	const [activeTab, setActiveTab] = useState('list');
	const [tournaments, setTournaments] = useState<any | null>([]);
	const [response, setResponse] = useState<any | null>(null);
	const params = useRouter().query;

	useEffect(() => {
		fetchTournaments();
	}, []);
	// get params from url
	
	const fetchTournaments = async () => {
	
		try {
			if(!params.category && !params.name){
				const response = await axios.get(`${process.env.API_URL}/tournaments`);
				if (response.status === 200) {
					setTournaments(response.data.data.data);
					setResponse(response.data.data);
				}
				return;
			}
			const response = await axios.get(`${process.env.API_URL}/tournaments?category=${params.category}&name=${params.name}`);
			if (response.status === 200) {
				console.log(response.data.data);
				setTournaments(response.data.data.data);
				setResponse(response.data.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	if (!tournaments) {
		return <div id={style.loader}></div>;
	}

	const showMapHandle = () => {
		setShowMap(!showMap)
	}
	return (
		<>
			<Header pageTitle="Search" />
			<section id={style.search}>
				<div className={style.contain}>
					<TopFilters  
						setActiveTab={setActiveTab} 
						activeTab={activeTab} 
						setTournaments={setTournaments as any}
						response={response}
						setResponse={setResponse as any}
						category={params.category as string}
						name={params.name as string}
					/>
					<div className={style.outer}>
						{activeTab === "list" && (
						<div className="w-100">
							<div className="row">
								{tournaments.length > 0 && (
									tournaments.map((tournament: any, index: number) => (
										<div className="col-lg-4 col-md-6 col-sm-4" key={tournament.id}>
												<CategoryCard 
													title={tournament.title}
													link={`/production/tournament-detail/${tournament.id}`}
													tag={tournament?.category?.name}
													date={tournament.start_date}
													text={'lorem ipsum'}
												
													img={process.env.ASSET_URL + tournament?.images[0]?.image}
												/>
											</div>
										))
									)
								}
							</div>
							<Pagination 
								response={response}
								setTournaments={setTournaments as any}
								setResponse={setResponse as any}
								category={params.categories as string}
								name={params.name as string}
								// setCurrentPage={setCurrentPage as any}
							/>
						</div>
						)}
						{activeTab === "map" && tournaments.length > 0 && (
							<div className={`${style.map_blk} ${showMap ? style.active : ""} w-100`}>
								<MapBlock tournaments={tournaments}/>
							</div> 
						)}
					</div>
				</div>
				<div className={style.map_btn_blk}>
					<button type="button" className={`${style.site_btn} w-100`} onClick={showMapHandle}>
						{!showMap ? "Show Map" : "Hide Map"}
					</button>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Search
