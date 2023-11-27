import { PhotoMainSlide } from "@/components/images"
import React, { useEffect, useState } from "react"
import style from "@/styles/scss/app.module.scss"
import Image from "next/image"

const GetServerImage = (props: any) => {
    const { image, src, isLoading } = props
    const [thumbnail, setThumbnail] = useState('/images/no-user.svg');
    useEffect(() => {
        if (image !== '' && image !== null && image !== undefined && isLoading === false) {
            setThumbnail(`${process.env.ASSET_URL}/${src}/${image}`)
        }
        if (isLoading === true) {
            setThumbnail('/images/loading.gif')
        }

    }, [image, src, isLoading]);

    return (
        <>
            <img width={300} height={200} src={thumbnail} alt="" />
        </>
    )
}

export default GetServerImage
