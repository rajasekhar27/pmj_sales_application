import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="favicon.ico" href="/icon.png" />
        <link rel="icon" href="/svg/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#000" />
        <meta
          name="google-site-verification"
          content="118LfH6psGyc6oFgbs4G6-66QEW6v_Di7dA4OYse_PE"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal"></div>
        <div id="search"></div>
      </body>
    </Html>
  );
}
