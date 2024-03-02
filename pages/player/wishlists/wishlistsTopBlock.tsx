import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"
import { IconSearch } from "@/components/images"

const WishlistsTopBlock = (props: any) => {
	const { fetchWishlistsItems, page } = props
	const [inputValue, setInputValue] = useState<string>('');
	const [sortValue, setSortValue] = useState<string>('desc');
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};
	const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortValue(e.target.value);
		fetchWishlistsItems(page, e.target.value, inputValue)
	};
	const onSubmit = (e: any) => {
		e.preventDefault();
		fetchWishlistsItems(page, sortValue, inputValue)
	}
	return (
		<>
			<div className={style.table_top_block}>
				<form onSubmit={onSubmit}>
					<div className={style.form_blk}>
						<Image width={100} height={100} src={IconSearch} alt="" />
						<input type="search" placeholder="Search tournaments" className={style.input} onChange={handleInputChange} />
						<button type="submit">Search</button>
					</div>
				</form>
				<div className={style.btn_blk}>
					<select name="" id="" className={style.input} onChange={handleSortChange}>
						<option value="desc">Latest added</option>
						<option value="asc">Oldest added</option>
					</select>
				</div>
			</div>
		</>
	)
}

export default WishlistsTopBlock
