import React from "react"
import style from "@/styles/scss/app.module.scss"

const OverviewBlock = () => {
	return (
		<>
			<div className={style.blk}>
				<h4>151 Hollow Tree, Irvine, CA 92618</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis voluptatem minima tenetur, dolor iste provident non ut dolore quae commodi! Pariatur magni fugiat quasi corporis recusandae culpa illum necessitatibus ea!</p>
				<p className="opacity-50">
					East West Ice Palace <br /> Artesia, California
				</p>
			</div>
			<div className={style.blk}>
				<h5>Tournament Overview</h5>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, tempore esse nisi alias delectus tempora sed ut error dolorem aut necessitatibus adipisci hic illo natus corporis dolore inventore amet nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veritatis earum fugit id officia accusamus sequi quasi voluptatem tempora tenetur hic minus, impedit dolores harum quos asperiores perferendis voluptate iusto.</p>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti tenetur odit sequi laboriosam quidem eum id maiores dolore explicabo! Magni nihil quas doloribus tenetur aut eos nobis voluptatem, perspiciatis nisi.</p>
				<br />
				<h6>Laboriosam quidem eum id maiores</h6>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quod adipisci dolor, fuga, architecto natus qui id debitis doloremque laboriosam iure unde blanditiis nemo!</p>
			</div>
			<div className={style.blk}>
				<h5>Rules and Regulations</h5>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, aperiam distinctio est reprehenderit libero obcaecati aliquam deserunt, nulla, at explicabo perferendis! Sed ipsa necessitatibus officia pariatur qui ut.</p>
				<h6 className={style.text_prime}>● Age or skill</h6>
				<p>Only 20+ lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<h6 className={style.text_prime}>● Code of Conduct</h6>
				<p>Voluptatibus ex quia iure delectus sunt accusantium ipsum perspiciatis, magnam, voluptates minima eum qui accusamus quo! Iusto repellendus suscipit esse nam illo.</p>
				<h6 className={style.text_prime}>● Equipment requirements</h6>
				<ol>
					<li>Quia iure delectus</li>
					<li>Accusamus quo</li>
					<li>Lorem ipsum dolor</li>
				</ol>
			</div>
		</>
	)
}

export default OverviewBlock
