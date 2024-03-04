import React from "react";
import style from "@/styles/scss/app.module.scss";
import GetServerImage from "@/components/getServerImage";
interface ProfileDetails {
  user_image: string;
  user_cover: string;
  firstname: string;
  lastname: string
  // Add more properties as needed
}
interface SmallbannerProps {
  profileDetails: ProfileDetails;
}
const Smallbanner: React.FC<SmallbannerProps> = ({ profileDetails }) => {
  console.log(profileDetails)
  return (
    <div>
      <section id={style.smalbanner} style={{
        backgroundImage: profileDetails?.user_cover
          ? `url(${process.env.ASSET_URL}/uploads/${profileDetails?.user_cover})`
          : ""
      }}>
        <div className={style.contain}></div>
      </section>
      <div className={style.profile}>
        <div className={style.contain}>
          <div className={style.content}>
            <div className={style.icon}>
              <GetServerImage src="uploads" image={profileDetails?.user_image} isLoading={false} />

            </div>
            <div className={style.text}>
              <h3>{profileDetails?.firstname + " " + profileDetails?.lastname}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Smallbanner;
