import React from "react";
import style from "@/styles/scss/app.module.scss";
import Pagination from "@/components/pagination";
import {
  PhotoTeam01,
  PhotoTeam02,
  PhotoTeam03,
  PhotoTeam04,
} from "@/components/images";
import MatchCard from "@/components/matchCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

type paginationData = {
  current_page: any;
  last_page: any;
};

const TournamentsItems = () => {
  const router = useRouter();
  const [response, setResponse] = useState<paginationData>();
  const [isLoading, setIsLoading] = useState(true);
  const [tournaments, setTournaments] = useState<any[]>([]);
  const currentPage = response?.current_page || 1;
  const lastPage = response?.last_page;
  const params = router.query;

  useEffect(() => {
    fetchHomePageData();
  }, []);

  const fetchHomePageData = async () => {
    try {
      const response = await axios.post(
        `${process.env.API_URL}/tournamentsByUser`,
        {
          user_id: Cookies.get("user_id"),
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      console.log(Cookies.get("user_id"));
      if (response.status === 200) {
        setIsLoading(false);
        setTournaments(response.data.data.data);
        setResponse(response.data.data);
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

    if (
      lastPage > maxVisiblePages &&
      endPage - startPage + 1 < maxVisiblePages
    ) {
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

  const handlePageChange = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.API_URL}/tournamentsByUser`,
        {
          user_id: Cookies.get("user_id"),
          page: page,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      if (response.status === 200) {
        setIsLoading(false);
        setTournaments(response.data.data.data);
        setResponse(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  function removeUploadsPrefix(str: string): string {
    const prefix = "uploads/";

    if (str?.startsWith(prefix)) {
      return process.env.ASSET_URL + str.slice(prefix.length);
    }
    return process.env.ASSET_URL + str;
  }
  return (
    <>
      {isLoading ? (
        <h3>Loading....</h3>
      ) : (
        <>
          <div className={style.match_cards}>
            {tournaments?.length > 0 ? (
              tournaments.map((data: any) => {
                return (
                  <MatchCard
                    title={data.title}
                    team={data.teams?.[0]?.team_name}
                    team_logo={
                      data.teams?.[0]?.logo
                        ? process.env.ASSET_URL + data.teams?.[0]?.logo
                        : PhotoTeam01
                    }
                    date={data.start_date}
                    time={data.schedule_time}
                    stream_link={`/organizer/tournament-detail/${data.id}`}
                    tags={data?.category?.name}
                    text={"lorem ipsum"}
                    img={data?.tournament_logo ? removeUploadsPrefix(data?.tournament_logo) : PhotoTeam01}
                    key={data.id}
                  />
                );
              })
            ) : (
              <div className={style.no_data}>
                There is no tournament, please click on the Add new Tournament
                to create new tournament.
              </div>
            )}
          </div>
          {tournaments?.length > 0 ? (
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
          ) : null}
        </>
      )}
    </>
  );
};

export default TournamentsItems;
