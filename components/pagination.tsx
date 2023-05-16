import React from "react"
import style from "@/styles/scss/app.module.scss"

const Pagination = () => {
	return (
		<>
			<div className={style.pagination}>
				<ul>
					<li>
						<button type="button" className={style.prev}></button>
					</li>
					<li className={style.active}>
						<a href="?">1</a>
					</li>
					<li>
						<a href="?">2</a>
					</li>
					<li>
						<a href="?">3</a>
					</li>
					<li>
						<a href="?">...</a>
					</li>
					<li>
						<a href="?">50</a>
					</li>
					<li>
						<button type="button" className={style.next}></button>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Pagination
