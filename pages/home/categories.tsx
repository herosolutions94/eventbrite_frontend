import React from "react"
import style from "@/styles/scss/app.module.scss"
import CategorySlider from "@/components/categorySlider"
type CategoriesProps = {
	title: string;
	subheading: string;
	content: string;
	tournaments: [] | any;
}
const Categories = (props: CategoriesProps) => {
	const { title, subheading, content, tournaments } = props;
	return (
		<>
			<section id={style.op_categories}>
				<div className={style.contain}>
					<div className={`${style.content} text-center`}>
						<h5 className={style.subheading}>{title}</h5>
						<h2>{subheading}</h2>
						<p>{content}</p>
					</div>
				</div>
				<CategorySlider
					tournaments={tournaments}
				/>
			</section>
		</>
	)
}

export default Categories
