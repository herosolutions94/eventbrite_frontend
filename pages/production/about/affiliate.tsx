import React from "react"
import style from "@/styles/scss/app.module.scss"
import Link from "next/link"

const Affiliate = (props: any) => {
	const { content } = props;
	return (
		<>
			<section id={style.affiliate}>
				<div className={style.contain}>
					<div className={`${style.content} text-center`}>
						<h2>{content?.heading}</h2>
					</div>
					<div className={`${style.flex_row} row`}>
						<div className="col-lg-4">
							<div className={style.inner}>
								<div className={style.txt}>
									<h4>{content?.support_section_one_title}</h4>
									<p>{content?.support_section_one_description}</p>
									<Link href={content?.support_section_one_link ? content.support_section_one_link : ''}>
										<u>{content?.support_section_one_link_text}</u>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className={style.inner}>
								<div className={style.txt}>
									<h4>{content?.support_section_two_title}</h4>
									<p>{content?.support_section_two_description}</p>
									<Link href={content?.support_section_two_link ? content.support_section_two_link : ''}>
										<u>{content?.support_section_two_link_text}</u>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className={style.inner}>
								<div className={style.txt}>
									<h4>{content?.support_section_three_title}</h4>
									<p>{content?.support_section_three_description}</p>
									<Link href={content?.support_section_three_link ? content.support_section_three_link : ''}>
										<u>{content?.support_section_three_link_text}</u>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Affiliate
