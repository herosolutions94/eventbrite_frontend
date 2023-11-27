import Head from "next/head"

export const SiteMaster = (props: any) => {
    const { pageTitle } = props
    return (
        <Head>
            <title>{pageTitle} — Eventplus</title>
            <meta name="description" content="Eventplus" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
            <link rel="icon" href="/images/logo.png" />
            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmqmsf3pVEVUoGAmwerePWzjUClvYUtwM&libraries=places"
                async
                defer
            ></script>
            {/* <link rel="stylesheet" href="https://jquery.app/jqueryscripttop.css" /> */}
            {/* <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js" async></script> */}
            {/* <script type="text/javascript" src="https://www.jqueryscript.net/demo/Single-Elimation-Tournament-Bracket-Generator-Gracket/jquery.gracket.min.js" async></script>
				<script type="text/javascript" src="https://www.jqueryscript.net/demo/Single-Elimation-Tournament-Bracket-Generator-Gracket/test.js" async></script> */}

        </Head>
    )
}
