import React, { useState } from "react";
import style from "@/styles/scss/app.module.scss";
import {
  IconHeart,
  PhotoAbout,
  PhotoBlog02,
  PhotoMainSlide,
  PhotoTeam01,
} from "@/components/images";
import Image from "next/image";
import AddTeamPopup from "./addTeamPopup";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";

const TournamentBanner = (props: any) => {
  const { details, fetchData, teamsCount } = props;
  const [addTeamPopup, setAddTeamPopup] = useState(false);
  const addTeamPopupHandle = () => {
    setAddTeamPopup(!addTeamPopup);
  };
  const AddToWishlist = async () => {
    try {
      const user_id = Cookies.get("user_id");
      if (!user_id) {
        toast.error("Please login first");
        return;
      }
      const response = await axios.post(
        `${process.env.API_URL}/add-to-wishlist`,
        {
          tournament_id: details.id,
          user_id: Cookies.get("user_id"),
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Added to wishlist");
        const wishList = JSON.parse(localStorage.getItem("wishlist") || "[]");
        wishList.push(details.id);
        localStorage.setItem("wishlist", JSON.stringify(wishList));
      } else {
        toast.error("Something went wrong");
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  const open_date = new Date(details?.open_date);
  const isDateInPast = () => {
    const today = new Date();
    const normalizedToday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const normalizedDate = new Date(
      open_date.getFullYear(),
      open_date.getMonth(),
      open_date.getDate()
    );
    return normalizedDate <= normalizedToday;
  };
  return (
    <>
      <div className={style.banner}>
        <div className={style.contain}>
          <div
            className={`${style.image_blk} ${
              details?.images?.length === 1 ? `${style.single_image_blk}` : ""
            }`}
          >
            {details?.images?.length > 0
              ? details?.images.map((image: any, index: any) => {
                  if (image.caption === "banner") {
                    return (
                      <div className={`${style.image}`} key={index}>
                        <Image
                          width={1000}
                          height={1000}
                          src={process.env.ASSET_URL + image.image}
                          alt=""
                        />
                      </div>
                    );
                  }
                })
              : null}
          </div>
          <div className={style.data}>
            <div className={style.data_logo}>
            {
						details?.tournament_logo !== undefined && details?.tournament_logo !== null && details?.tournament_logo !== '' ?
							<Image width={200} height={200} src={process.env.ASSET_URL + details?.tournament_logo} alt="" />
							:
							<Image width={200} height={200} src={PhotoTeam01} alt="Team Logo" />
					}
            </div>
            <div className={style.data_text}>
              <div className={style.tags_blk}>
                {details?.tournament_type?.name ? (
                  <strong className={style.text_prime}>
                    {details?.tournament_type?.name}
                  </strong>
                ) : null}

                {details?.category?.name ? (
                  <span className={style.tag}>{details?.category?.name}</span>
                ) : null}
              </div>
              <h2>{details?.title}</h2>
              <div className={`${style.btn_blk} align-items-center`}>
                {Cookies.get("role") === "player" ? (
                  <>
                    {teamsCount < parseInt(details?.number_of_teams) &&
                    isDateInPast() ? (
                      <button
                        type="button"
                        className={style.site_btn}
                        onClick={addTeamPopupHandle}
                      >
                        Add your Team
                      </button>
                    ) : null}

                    <button className={style.heart_btn} onClick={AddToWishlist}>
                      <Image
                        width={40}
                        height={40}
                        src={IconHeart}
                        alt="Heart"
                      />{" "}
                      Add to wishlist
                    </button>
                  </>
                ) : null}
              </div>
              <ul className={style.date_time_list_update}>
                {parseFloat(details?.entry_fee) > 0 ? (
                  <li>
                    Entry Fee: <span>${details?.entry_fee}</span>
                  </li>
                ) : (
                  <li>
                    Entry Fee: <span>Free</span>
                  </li>
                )}
                <li>
                  Start Date:{" "}
                  <span>
                    {new Date(details?.start_date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </li>
                <li>●</li>
                <li>
                  {" "}
                  {new Date(details?.schedule_date).toLocaleDateString(
                    "en-US",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </li>
                <li>●</li>
                <li>
                  Time: <span>{details?.schedule_time}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {addTeamPopup ? (
        <AddTeamPopup
          popupClose={addTeamPopupHandle}
          tournamentId={details?.id}
          fetchData={fetchData}
          details={details}
        />
      ) : null}
    </>
  );
};

export default TournamentBanner;
