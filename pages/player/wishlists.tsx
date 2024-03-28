"use client"
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "@/slices/userSlice";
import { AppDispatch, RootState } from "@/store/store";

import Header from "@/components/header/header"
import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Footer from "@/components/footer"
import WishlistsItems from "./wishlists/wishlistsItems"
import WishlistsTopBlock from "./wishlists/wishlistsTopBlock"
import axios from "axios"
import Cookies from "js-cookie"
import { toast } from "react-toastify"
import { useRouter } from "next/router";

const Wishlists = () => {
	const [wishlistsItems, setWishlistsItems] = useState<any>([]);
	const [response, setResponse] = useState<any>();
	let currentPage = response?.current_page || 1;
	let lastPage = response?.last_page;
	const [page, setPage] = useState(1);
	useEffect(() => {
		fetchWishlistsItems(1);
	}, []);
	useEffect(() => {
		currentPage = response?.current_page;
		lastPage = response?.last_page;
	}, [response]);

	const fetchWishlistsItems = async (page: number, sort_order: string = "desc", search: string = "") => {
		try {
			const response = await axios.post(`${process.env.API_URL}/wishlist`, {
				user_id: Cookies.get("user_id"),
				page: page || 1,
				sort_order: sort_order,
				search: search
			}, {
				headers: {
					Authorization: `Bearer ${Cookies.get("token")}`,
				}
			});
			if (response.status === 200) {
				setWishlistsItems(response.data.data.data);
				setResponse(response.data.data);
			}
		} catch (error: any) {
			toast.error(error.response.data.message);
		}
	};
	const renderPageNumbers = () => {
		const pageNumbers = [];
		const maxVisiblePages = 5; // Maximum number of visible page links

		// Calculate the range of page numbers to display
		let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
		let endPage = Math.min(startPage + maxVisiblePages - 1, lastPage);

		if (lastPage > maxVisiblePages && endPage - startPage + 1 < maxVisiblePages) {
			// Adjust the start page if the visible range is less than maxVisiblePages
			startPage = endPage - maxVisiblePages + 1;
		}

		for (let page = startPage; page <= endPage; page++) {
			pageNumbers.push(
				<li
					key={page}
					className={page === currentPage ? style.active : ""}
					onClick={
						() => {
							setPage(page);
							fetchWishlistsItems(page);
						}
					}
				>
					<span>{page}</span>
				</li>
			);
		}

		return pageNumbers;
	};
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		// Get rowId or any other necessary data
		const rowId = 123; // Replace with the actual rowId or data you need

		// Dispatch the fetchUsers action with the payload
		dispatch(fetchUsers({ rowId }));
	}, [dispatch]);
	const { profileData, loading, value } = useSelector(
		(state: RootState) => state.user
	);
	const router = useRouter()
	useEffect(() => {
		if (profileData?.role === 'organizer') {
			router.push("/organizer")
		}
	}, [profileData]);
	if (loading) {
		return (
			<div className={style.loading_page}>
				<img src="/images/loading.gif" />
			</div>
		)
	}
	return (
		<>
			<Header pageTitle="Wishlists" profileData={profileData} />
			<section className={style.dashboard} id={style.booking}>
				<div className={style.contain}>
					<h5 className="mb-4">My Wishlists</h5>
					<WishlistsTopBlock
						fetchWishlistsItems={fetchWishlistsItems}
						page={page}
					/>
					<WishlistsItems
						wishlistsItems={wishlistsItems}
						fetchWishlistsItems={fetchWishlistsItems}
						renderPageNumbers={renderPageNumbers}
						lastPage={lastPage}
					/>
				</div>
			</section>
			{/* <Footer /> */}
		</>
	)
}

export default Wishlists
