import React, { useState } from "react";
import style from "@/styles/scss/app.module.scss";
import { IconCalendar } from "./images";
import Image from "next/image";
import Link from "next/link";
import RatingStars from "./ratingStars";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const CategoryCard = (props: any) => {
  const {
    tournamentId,
    title,
    link,
    tag,
    date,
    text,
    img,
    wishlist,
    rating,
    tournament,
    is_favorite = null,
  } = props;
  const [isFavorite, setIsFavorite] = useState<any | null>([]);
  const AddToWishlist = async (e: any, tournamentId: any) => {
    // console.log("tournamentId",tournamentId);return;
    try {
      const user_id = Cookies.get("user_id");
      if (!user_id) {
        toast.error("Please login first");
        return;
      }
      const response = await axios.post(
        `${process.env.API_URL}/add-to-wishlist`,
        {
          tournament_id: tournamentId,
          user_id: Cookies.get("user_id"),
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      if (response.status === 200) {
        setIsFavorite(tournamentId);
        toast.success("Added to wishlist");
        const wishList = JSON.parse(localStorage.getItem("wishlist") || "[]");
        wishList.push(tournamentId);
        localStorage.setItem("wishlist", JSON.stringify(wishList));
      } else {
        toast.error("Something went wrong");
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  console.log(img, tournament);
  return (
    <>
      <div className={style.category_card}>
        {Cookies.get("user_id") && Cookies.get("role") == "player" && (
          <button
            type="button"
            className={`${style.heart} ${wishlist || is_favorite > 0 || isFavorite === tournamentId
              ? `${style.fill}`
              : ""
              }`}
            onClick={(e) => AddToWishlist(e, tournamentId)}
          ></button>
        )}
        <div className={style.fig}>
          <Image width={1000} height={1000} src={img} alt="" />
        </div>
        <div className={style.txt}>
          <span className={style.tag}>{tag}</span>
          <h4>
            <Link href={link}>{title}</Link>
          </h4>
          <div className={style.date}>
            <Image width={100} height={100} src={IconCalendar} alt="" /> {date}
          </div>
          {/* <RatingStars value={rating} /> */}
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
