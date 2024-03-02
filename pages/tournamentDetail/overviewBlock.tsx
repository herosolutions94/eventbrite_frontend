import React from "react";
import style from "@/styles/scss/app.module.scss";
import Image from "next/image";

const OverviewBlock = (details: any) => {
  let d_key = 0;
  return (
    <>
      {details?.details?.address && (
        <div className={style.blk}>
          <p>{details?.details?.address}</p>
        </div>
      )}
      {details?.details?.overview && (
        <div className={style.blk}>
          <h5>Tournament Overview</h5>
          <div
            dangerouslySetInnerHTML={{ __html: details?.details?.overview }}
          />
        </div>
      )}
      {details?.details?.rules && (
        <div className={style.blk}>
          <h5>Rules and Regulations</h5>
          <div dangerouslySetInnerHTML={{ __html: details?.details?.rules }} />
        </div>
      )}
      {details?.details?.documents?.length > 0 && (
        <div className={style.blk}>
          <h5>Documents</h5>
          <ul className={style.documents}>
            {details?.details?.documents.map((document: any, d_index: any) => {
              // if (image.caption === "banner") {
              return (

                <li key={d_index}>
                  <a
                    href={process.env.ASSET_URL + document.image}
                    target="_blank"
                    style={{ color: "#fff" }}
                  >
                    Document {++d_key}
                  </a>
                </li>

              );
              // }
            })}
          </ul>
        </div>
      )}
      {details?.details?.sponsors === 'yes' && details?.details?.logos?.length > 0 && (
        <div className={style.blk}>
          <h5>Spnsors Information</h5>
          <p>{details?.details?.sponsor_information}</p>
          <h5>Spnsors Logos</h5>
          <ul className={style.t_logos}>
            {details?.details?.logos.map((logo: any, d_index: any) => {
              // if (image.caption === "banner") {
              return (

                <li key={d_index}>
                  <img src={process.env.ASSET_URL + logo.image} />
                </li>

              );
              // }
            })}
          </ul>
        </div>
      )}

      {details?.details?.staff_arr?.length > 0 && (
        <div className={style.blk}>
          <h5>Tournament Staff & Volunteers</h5>
          <ul className={`${style.staff_ul} ${style.staff_ul_first}`}>
            <li>
              <div className="">
                <strong>Contact Information</strong>
              </div>
            </li>
            <li>
              <div className="">
                <strong>Roles and Responsibilities</strong>
              </div>
            </li>
          </ul>
          {details?.details?.staff_arr.map((staff_row: any, d_index: any) => {
            return (
              <ul className={style.staff_ul} key={d_index}>
                <li>
                  <div className="">
                    {staff_row?.contact}
                  </div>
                </li>
                <li>
                  <div className="">
                    {staff_row?.responsibility}
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </>
  );
};

export default OverviewBlock;
