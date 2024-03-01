import React from "react";
import style from "@/styles/scss/app.module.scss";

export default function Smallbanner() {
  return (
    <div>
      <section id={style.smalbanner}>
        <div className={style.contain}></div>
      </section>
      <div className={style.profile}>
        <div className={style.contain}>
          <div className={style.content}>
            <div className={style.icon}>
              <img src="images/dp.jpeg" alt="" />
              <div className={style.btn}>
                <input
                  className={style.hide}
                  type="file"
                  accept="image/png, image/jpg, image/jpeg"></input>
                <img src="images/camera.png"></img>
              </div>
            </div>
            <div className={style.text}>
              <h3>Samus Aran</h3>
              <div className={style.stars}>
                <img src="images/star.png" alt="" />
                <img src="images/star.png" alt="" />
                <img src="images/star.png" alt="" />
                <img src="images/star.png" alt="" />
                <img src="images/star.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
