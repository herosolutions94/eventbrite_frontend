import React from 'react';
import style from "@/styles/scss/app.module.scss";
import Link from "next/link"

interface Tournament {
    id: number;
    title: string;
    images: { id: number; image: string }[];
}

interface TournamentItemProps {
    items: Tournament[];
}

const TournamentItem: React.FC<TournamentItemProps> = ({ items }) => {
    console.log(items); // Check if items are correctly received
    return (
        <div className={style.flex}>
            {items !== undefined && items.length > 0 ? (
                items.map((item, index) => (
                    <Link href={`/tournament-detail/${item.id}`} className={style.col1} key={index}>
                        <div className={style.image}>
                            <img src={process.env.ASSET_URL + item.images[0]?.image} alt={item.title} />
                        </div>
                        <div className={style.text}>
                            <h4>{item.title}</h4>
                        </div>
                    </Link>
                ))
            ) : (
                <div className={style.no_data}>No data found!</div>
            )}
        </div>
    );
};

export default TournamentItem;
