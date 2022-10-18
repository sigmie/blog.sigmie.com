import Document, { Head, Main, NextScript, Html } from "next/document";

import { getSiteMetaData } from "@utils/helpers";

export default class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetaData();

    return (
      <Html lang={siteMetadata.language}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <script src="https://cdn.usefathom.com/script.js" data-spa="auto" data-site="EQCRNPQD" defer></script>
      </Html>
    );
  }
}
