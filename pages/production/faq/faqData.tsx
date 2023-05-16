import React from "react"
import style from "@/styles/scss/app.module.scss"
import FaqBlock from "@/components/faqBlock"

const FAQ_LIST_01 = [
	{
		id: 1,
		title: "Obcaecati laborum architecto neque possimus?",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
	},
	{
		id: 2,
		title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
	},
	{
		id: 3,
		title: "Deleniti illum ex numquam eos laudantium?",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
	},
	{
		id: 4,
		title: "Molestias quidem, maiores reiciendis sint?",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
	},
	{
		id: 5,
		title: "Iusto harum temporibus vel, rem numquam quia?",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
	},
]
const FAQ_LIST_02 = [
	{
		id: 1,
		title: "Obcaecati laborum architecto neque possimus?",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
	},
	{
		id: 2,
		title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
	},
	{
		id: 3,
		title: "Deleniti illum ex numquam eos laudantium?",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
	},
	{
		id: 4,
		title: "Molestias quidem, maiores reiciendis sint?",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
	},
	{
		id: 5,
		title: "Iusto harum temporibus vel, rem numquam quia?",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
	},
]

const FaqData = () => {
	return (
		<>
			<h4 className="mb-4">General questions</h4>
			<div className={style.faq_lst}>
				{FAQ_LIST_01.map((data) => {
					return <FaqBlock {...data} key={data.id} />
				})}
			</div>
			<hr className="my-5" />
			<h4 className="mb-4">Most asked questions</h4>
			<div className={style.faq_lst}>
				{FAQ_LIST_02.map((data) => {
					return <FaqBlock {...data} key={data.id} />
				})}
			</div>
		</>
	)
}

export default FaqData
