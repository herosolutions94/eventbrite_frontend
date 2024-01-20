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
      {details?.details?.images?.length > 0 && (
        <div className={style.blk}>
          <h5>Documents</h5>
          {details?.details?.images.map((image: any, d_index: any) => {
            if (image.caption === "banner") {
              return (
                <ul className={style.documents} key={d_index}>
                  <li>
                    <a
                      href={process.env.ASSET_URL + image.image}
                      target="_blank"
                      style={{ color: "#fff" }}
                    >
                      Document {++d_key}
                    </a>
                  </li>
                </ul>
              );
            }
          })}
        </div>
      )}
    </>
  );
};

export default OverviewBlock;
