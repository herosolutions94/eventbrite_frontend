import React from "react";
import LeafLetMap from "@/components/map";
import style from "@/styles/scss/app.module.scss";
import { IconCalendar } from "@/components/images";

export interface Marker {
  lat: number;
  lng: number;
  name: string;
}
interface MapProps {
  tournaments: any;
}

const Map = ({ tournaments }: MapProps) => {
  const markers: Marker[] =
    tournaments &&
    tournaments.map((item: any) => {
      // if (parseFloat(item?.lat) > 0 && parseFloat(item?.long) > 0) {
      return {
        lat: parseFloat(item?.lat),
        lng: parseFloat(item?.long),
        name: `
        <div class=${style.category_card} id=${style.category_card_}>
              <div class=${style.fig}>
              <img src=${
                process.env.ASSET_URL + item?.images[0]?.image
              } alt="" />
            </div>
            <div class=${style.txt}>
              <span class=${style.tag}>${item?.category?.name}</span>
              <h4>
                <a href=/tournament-detail/${item.id}>${item.title}</a>
              </h4>
            </div>
            </div>
        `,
      };
      // }
    });
  return (
    <div>
      <LeafLetMap markers={markers} />
    </div>
  );
};

export default Map;
