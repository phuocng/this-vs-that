import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.png" type="image/png" />
                    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                    <link rel="mask-icon" href="/mask-favicon.svg" color="#1975FF" />

                    <meta
                        content="What is the difference between ___ and ___ in the front-end development?"
                        name="description"
                    />
                    <meta content="Nguyen Huu Phuoc" name="author" />
                    <meta content="@nghuuphuoc" name="twitter:site" />
                    <meta content="summary" name="twitter:card" />
                    <meta
                        content="What is the difference between ___ and ___ in the front-end development?"
                        name="twitter:description"
                    />
                    <meta
                        content="What is the difference between ___ and ___ in the front-end development?"
                        name="twitter:title"
                    />
                    <meta content="/assets/logo.png" name="twitter:image" />

                    <meta
                        content="What is the difference between ___ and ___ in the front-end development?"
                        property="og:title"
                    />
                    <meta
                        content="What is the difference between ___ and ___ in the front-end development?"
                        property="og:description"
                    />
                    <meta content="article" property="og:type" />
                    <meta content="https://thisthat.dev" property="og:url" />
                    <meta content="/assets/logo.png" property="og:image" />
                    <meta content="HTML DOM" property="og:site_name" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?&family=Source+Code+Pro:wght@400&family=Inter:wght@400;700&display=swap"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
