import Link from "next/link";
import style from "@/styles/scss/app.module.scss";
import { useRouter } from "next/router";
import { IconBell, IconEnvelope, PhotoUser_01 } from "../images";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import GetServerImage from "../getServerImage";

const Navigation = (props: any) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to handle clicks outside the dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdown(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const email = Cookies.get("email");
  const role = Cookies.get("role");

  const { headerType, navActive, profileData } = props;
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();

  const dropdownHandle = () => {
    setDropdown(!dropdown);
  };

  const handleLogout = () => {
    Cookies.remove("email");
    Cookies.remove("role");
    Cookies.remove("token");
    Cookies.remove("user_id");
    router.push("/login");
  };
  const toSlugUrl = (str: any) => {
    if (str) {
      return str.replace(/ /g, "-");
    }
  };
  return (
    <>
      <nav id={style.nav} className={`${navActive ? style.active : ""}`}>
        {headerType === "player" && profileData?.id > 0 ? (
          <>
            <ul id={style.nav_list}>
              <li>
                <Link
                  href="/player"
                  className={router.pathname === "/player" ? style.active : ""}
                >
                  Profile Settings
                </Link>
              </li>
              <li>
                <Link
                  href="/player/booking"
                  className={
                    router.pathname === "/player/booking" ? style.active : ""
                  }
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/player/wishlists"
                  className={
                    router.pathname === "/player/wishlists" ? style.active : ""
                  }
                >
                  Wishlists
                </Link>
              </li>
            </ul>
            {/* <ul id={style.icon_btn}>
              <li>
                <Link
                  href="/player/notifications"
                  className={
                    router.pathname === "/player/notifications"
                      ? style.active
                      : ""
                  }
                >
                  <Image width={100} height={100} src={IconBell} alt="" />
                </Link>
              </li>
              <li>
                <Link
                  href="/player/messages"
                  className={
                    router.pathname === "/player/messages" ? style.active : ""
                  }
                >
                  <Image width={100} height={100} src={IconEnvelope} alt="" />
                </Link>
              </li>
            </ul> */}
            <div id={style.pro_btn} className={style.dropdown} ref={dropdownRef}>
              <div
                className={`${style.ico} ${style.fill} ${style.round}`}
                onClick={dropdownHandle}
              >
                <GetServerImage
                  src="uploads"
                  image={profileData?.user_image}
                  isLoading={false}
                />
              </div>
              <ul
                className={`${style.dropdown_menu} ${dropdown && style.active}`}
              >
                <li>
                  <Link
                    href="/player">
                    Profile Settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/player/booking">
                    Booking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/player/wishlists">
                    Wishlists
                  </Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Sign out</a>
                </li>
              </ul>
            </div>
          </>
        ) : headerType === "organizer" && profileData?.id > 0 ? (
          <>
            <ul id={style.nav_list}>
              <li>
                <Link
                  href="/organizer"
                  className={
                    router.pathname === "/organizer" ? style.active : ""
                  }
                >
                  Profile Settings
                </Link>
              </li>
              <li>
                <Link
                  href="/organizer/buy-credits"
                  className={
                    router.pathname === "/organizer/buy-credits"
                      ? style.active
                      : ""
                  }
                >
                  Buy Credits
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "/profile/" +
                    profileData?.id +
                    "/" +
                    toSlugUrl(
                      profileData?.firstname + " " + profileData?.lastname
                    )
                  }
                >
                  Public Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/organizer/tournaments"
                  className={
                    router.pathname === "/organizer/tournaments"
                      ? style.active
                      : ""
                  }
                >
                  Dashboard
                </Link>
              </li>
            </ul>
            {/* <ul id={style.icon_btn}>
              <li>
                <Link
                  href="/organizer/notifications"
                  className={
                    router.pathname === "/organizer/notifications"
                      ? style.active
                      : ""
                  }
                >
                  <Image width={100} height={100} src={IconBell} alt="" />
                </Link>
              </li>
              <li>
                <Link
                  href="/organizer/messages"
                  className={
                    router.pathname === "/organizer/messages"
                      ? style.active
                      : ""
                  }
                >
                  <Image width={100} height={100} src={IconEnvelope} alt="" />
                </Link>
              </li>
            </ul> */}
            <div id={style.pro_btn} className={style.dropdown} ref={dropdownRef}>
              <div
                className={`${style.ico} ${style.fill} ${style.round}`}
                onClick={dropdownHandle}
              >
                <GetServerImage
                  src="uploads"
                  image={profileData?.user_image}
                  isLoading={false}
                />
              </div>
              <ul
                className={`${style.dropdown_menu} ${dropdown && style.active}`}
              >
                <li>
                  <Link href="/tournaments">Dashboard</Link>
                </li>
                <li>
                  <Link href="/organizer">Profile Settings</Link>
                </li>
                <li>
                  <Link
                    href={
                      "/profile/" +
                      profileData?.id +
                      "/" +
                      toSlugUrl(
                        profileData?.firstname + " " + profileData?.lastname
                      )
                    }
                  >
                    Public Profile
                  </Link>
                </li>
                <li>
                  <Link href="/organizer/buy-credits">Buy Credits</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Sign out</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <ul id={style.nav_list}>
              <li>
                <Link
                  href="/"
                  className={router.pathname === "" ? style.active : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className={router.pathname === "/search" ? style.active : ""}
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={router.pathname === "/about" ? style.active : ""}
                >
                  How it works
                </Link>
              </li>
              {email !== undefined && email !== null && email !== "" ? (
                role !== undefined && role !== null && role !== "" ? (
                  ""
                ) : (
                  ""
                )
              ) : (
                <>
                  <li>
                    <Link
                      href="/login"
                      className={
                        router.pathname === "/login" ? style.active : ""
                      }
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signup"
                      className={
                        router.pathname === "/signup" ? style.active : ""
                      }
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
            {email !== undefined && email !== null && email !== "" ? (
              <div id={style.pro_btn} className={style.dropdown} ref={dropdownRef}>
                <div
                  className={`${style.ico} ${style.fill} ${style.round}`}
                  onClick={dropdownHandle}
                >
                  <GetServerImage
                    src="uploads"
                    image={profileData?.user_image}
                    isLoading={false}
                  />
                </div>
                <ul
                  className={`${style.dropdown_menu} ${dropdown && style.active
                    }`}
                >


                  {
                    profileData?.role === "player" ?
                      <>
                        <li>
                          <Link
                            href="/player">
                            Profile Settings
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/player/booking">
                            Booking
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/player/wishlists">
                            Wishlists
                          </Link>
                        </li>
                      </>
                      :
                      profileData?.role === "organizer" ? (
                        <>
                          <li>
                            <Link
                              href="/organizer/tournaments"
                              className={
                                router.pathname === "/organizer/tournaments"
                                  ? style.active
                                  : ""
                              }
                            >
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/organizer"
                              className={
                                router.pathname === "/organizer" ? style.active : ""
                              }
                            >
                              Profile Settings
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={
                                "/profile/" +
                                profileData?.id +
                                "/" +
                                toSlugUrl(
                                  profileData?.firstname + " " + profileData?.lastname
                                )
                              }
                            >
                              Public Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/organizer/buy-credits"
                              className={
                                router.pathname === "/organizer/buy-credits"
                                  ? style.active
                                  : ""
                              }
                            >
                              Buy Credits
                            </Link>
                          </li>
                        </>
                      ) : (
                        ""
                      )}
                  <li>
                    <a onClick={handleLogout}>Sign out</a>
                  </li>
                </ul>
              </div>

            ) : (
              ""
            )}
          </>
        )}
      </nav>
    </>
  );
};

export default Navigation;
