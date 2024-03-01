import React from "react";
import style from "@/styles/scss/app.module.scss";

export default function Sellerdetail() {
  return (
    <div>
      <section id={style.seller_detail}>
        <div className={style.contain}>
          <div className={style.flex}>
            <div className={style.col}>
              <div className={style.outer}>
                <h4>Overall Stats</h4>
                <ul>
                  <li>
                    <h5>Total tournaments organized:</h5>
                    <p>05</p>
                  </li>
                  <li>
                    <h5>Total matches played:</h5>
                    <p>03</p>
                  </li>
                  <li>
                    <h5>Total tournaments participated:</h5>
                    <p>02</p>
                  </li>
                  <li>
                    <h5>Total events attended:</h5>
                    <p>0</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.colr}>
              <div className={style.outer}>
                <h3>Over View</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <hr />
                <h4>Your Tournaments</h4>
                <ul>
                  <li>Open</li>
                  <li>Yet to be</li>
                  <li> Completed</li>
                </ul>
                <div className={style.flex}>
                  <div className={style.col1}>
                    <div className={style.image}>
                      <img src="images/tt1.jpeg" />
                    </div>
                    <div className={style.text}>
                      <h4>Triarchy</h4>
                    </div>
                  </div>
                  <div className={style.col1}>
                    <div className={style.image}>
                      <img src="images/tt2.png" />
                    </div>
                    <div className={style.text}>
                      <h4>Jojopeng</h4>
                    </div>
                  </div>
                  <div className={style.col1}>
                    <div className={style.image}>
                      <img src="images/tt4.jpeg" />
                    </div>
                    <div className={style.text}>
                      <h4>Eldritch</h4>
                    </div>
                  </div>
                  <div className={style.col1}>
                    <div className={style.image}>
                      <img src="images/tt5.jpeg" />
                    </div>
                    <div className={style.text}>
                      <h4>Tyotrsons</h4>
                    </div>
                  </div>
                  <div className={style.col1}>
                    <div className={style.image}>
                      <img src="images/tt1.jpeg" />
                    </div>
                    <div className={style.text}>
                      <h4>Lionhearts</h4>
                    </div>
                  </div>
                  <div className={style.col1}>
                    <div className={style.image}>
                      <img src="images/tt2.png" />
                    </div>
                    <div className={style.text}>
                      <h4>Kajored</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
