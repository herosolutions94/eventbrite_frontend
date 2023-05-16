import React from "react"
import style from "@/styles/scss/app.module.scss"
import CategorySlider from "@/components/categorySlider"

const Categories = () => {
	return (
		<>
			<section id={style.op_categories}>
				<div className={style.contain}>
					<div className={`${style.content} text-center`}>
						<h5 className={style.subheading}>OP Gamers</h5>
						<h2>OP Categories just for Gamers</h2>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae vitae architecto ex perspiciatis maxime nam ducimus tenetur dignissimos reprehenderit obcaecati minus commodi, corrupti nesciunt debitis earum omnis harum pariatur et.</p>
					</div>
				</div>
				<CategorySlider />
			</section>
		</>
	)
}

export default Categories
