import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss"
import TablePagination from "@/components/tablePagination"
import Link from "next/link"
import Image from "next/image"
import { PhotoUser_01, PhotoUser_02, PhotoUser_03, PhotoUser_04, PhotoUser_05, PhotoUser_06, PhotoUser_07 } from "@/components/images"
import axios from "axios";

const NotificationsTable = () => {
	const [pageContent, setPageContent] = useState<any | null>(
		null
	  );
	
	  useEffect(() => {
		getContent();
	  }, []);
	
	  const getContent = async () => {
		try {
		  const res = await axios.get(
			`${process.env.API_URL}/get-notifications`
		  );
		  if (res.status === 200) {
			setPageContent(res.data.data);
		  }
		} catch (err) {
		  console.log(err);
		}
	  };
	return (
		<>
			<div className={style.table_blk_wrap}>
				<div className={style.table_blk}>
					<table>
						<tbody>
							{pageContent?.map((item: any, index: number) => (
							<>
								<tr key={index}>
									<td>
										<div className={style.noti_blk}>
											<div className={`${style.ico} ${style.fill} ${style.round}`}>
												<Link href="?">
													<Image width={400} height={400} src={PhotoUser_01} alt="" />
												</Link>
											</div>
											<div className={style.txt}>
												<h6>{item.title}</h6>
												<p>
													{item.description}
												</p>
											</div>
										</div>
									</td>
									<td className={`${style.time} text-end`}>
										{item.created_at}
									</td>
								</tr>
							</>
							))}

							
						</tbody>
					</table>
				</div>
				{/* <TablePagination /> */}
			</div>
		</>
	)
}

export default NotificationsTable
