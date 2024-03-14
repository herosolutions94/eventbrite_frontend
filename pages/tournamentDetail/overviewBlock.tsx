import React from "react";
import style from "@/styles/scss/app.module.scss";
import Image from "next/image";

const OverviewBlock = (details: any) => {
  let d_key = 0;
  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }
  function formatTime(timeString: string): string {
    // Split the timeString into hours and minutes
    const [hours, minutes] = timeString.split(':').map(part => parseInt(part, 10));

    // Use Date object to format the time
    const time = new Date();
    time.setHours(hours);
    time.setMinutes(minutes);

    // Format the time using toLocaleTimeString
    const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit' };
    return time.toLocaleTimeString('en-US', options);
  }
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
      {details?.details?.sponsors === "yes" &&
        details?.details?.logos?.length > 0 && (
          <div className={style.blk}>
            <h5>Sponsors Information</h5>
            <p>{details?.details?.sponsor_information}</p>
            <h5>Sponsors Logos</h5>
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
                  <div className="">{staff_row?.contact}</div>
                </li>
                <li>
                  <div className="">{staff_row?.responsibility}</div>
                </li>
              </ul>
            );
          })}
        </div>
      )}
      {details?.details?.matches?.length > 0 && (
        <div className={style.blk}>
          <h5>Tournament Initial Schedule</h5>
          <ul className={`${style.staff_ul} ${style.staff_ul_first}`}>
            <li>
              <div className="">
                <strong>Schedule Date</strong>
              </div>
            </li>
            <li>
              <div className="">
                <strong>Schedule Time</strong>
              </div>
            </li>
            <li>
              <div className="">
                <strong>Schedule Breaks</strong>
              </div>
            </li>
            <li>
              <div className="">
                <strong>Schedule Venue</strong>
              </div>
            </li>
          </ul>
          {details?.details?.matches.map((match: any, d_index: any) => {

            return (
              match?.schedule_date !== null && match?.schedule_date !== undefined && match?.schedule_date !== '' ?
                <ul className={style.staff_ul} key={d_index}>
                  <li>
                    <div className="">{formatDate(match?.schedule_date)}</div>
                  </li>
                  <li>
                    <div className="">{formatTime(match?.schedule_time)}</div>
                  </li>
                  <li>
                    <div className="">{match?.schedule_breaks}</div>
                  </li>
                  <li>
                    <div className="">{match?.venue_availability}</div>
                  </li>
                </ul>
                :
                ""
            );
          })}
        </div>
      )}
    </>
  );
};

export default OverviewBlock;
