import React from "react";
import style from "@/styles/scss/app.module.scss";
import axios from "axios";
import { useRouter } from "next/router"

type PaginationProps = {
  response: any;
  setTournaments: React.Dispatch<React.SetStateAction<any>>;
  setResponse: React.Dispatch<React.SetStateAction<any>>;
  category: string
  postal_code: string
};

const Pagination = ({ 
	response,
	setTournaments,
	setResponse,
	category,
	postal_code
 }: PaginationProps) => {
  const currentPage = response?.current_page;
  const lastPage = response?.last_page;
  const router = useRouter()


const handlePageChange = async (page: number) => {
	try {
		const response = await axios.get(`${process.env.API_URL}/tournaments?page=${page}&category=${category}&postal_code=${postal_code}`);
		if (response.status === 200) {
			setTournaments(response.data.data.data);
			setResponse(response.data.data);
			router.push({
				pathname: "/production/search",
				query: {
					page: page,
					categories: category,
					postCode: postal_code,
				},
			})
		}
	} catch (error) {
		console.log(error);
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
          onClick={() => handlePageChange(page)}
        >
          <span>{page}</span>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <>
      <div className={style.pagination}>
        <ul>
          <li>
            <button type="button" className={style.prev}></button>
          </li>
          {renderPageNumbers()}
          <li>
            <a href="#">...</a>
          </li>
          <li>
            <a href="#">{lastPage}</a>
          </li>
          <li>
            <button type="button" className={style.next}></button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
