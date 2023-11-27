import { NextResponse } from "next/server";
import { HOME_PAGE, SIGNIN_PAGE } from "./constatnts/links";
export default function middleware(request) {
    const authToken = request.cookies.get("email")?.value;
    if (!authToken) {
        return NextResponse.redirect(
            new URL(`${SIGNIN_PAGE}?from=${request.nextUrl.pathname}`, request.url)
        );
    }
}
export const config = {
    matcher: [
        "/organizer",
        "/player",
        "/verify",
        // "/user-dashboard/account-settings"
    ]
};
