import React, { useEffect, useState } from "react";
import style from "@/styles/scss/app.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import { PhotoAbout } from "@/components/images";
import Smallbanner from "../../../profile-description/smallbanner";
import Sellerdetail from "../../../profile-description/sellerdetails";
import { useRouter } from "next/router";
import axios from "axios";

export default function Profile_description() {
    const router = useRouter();
    const { id } = router.query;
    const [profileDetails, setProfileDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (id !== undefined) {
            fetchData(id);
        }
    }, [id]);
    useEffect(() => {
        if (profileDetails?.role === "player") {
            router.push("/player");
        }
    }, [profileDetails]);
    const fetchData = async (id) => {
        try {
            const response = await axios.get(process.env.API_URL + "/public-profile/" + id, {});
            if (response.status === 200) {
                setIsLoading(false)
                setProfileDetails(response?.data?.profile);
            }
        } catch (error) {
            console.log(error);
        }
    };
    if (isLoading) {
        return <div className={style.loading_page}>
            <img src="/images/loading.gif" />
        </div>;
    }
    console.log(profileDetails)
    return (
        <div>
            <Header pageTitle={profileDetails?.firstname + " " + profileDetails?.lastname + " Profile"} />
            <Smallbanner profileDetails={profileDetails} />
            <Sellerdetail profileDetails={profileDetails} />
            <Footer />
        </div>
    );
}
