import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html dir="rtl" lang="ar">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          {/* eslint-disable-next-line */}

          <link
            rel="preload"
            href="/fonts/work-sans-v9-latin-100.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/baloo-bhaijaan-2-v6-arabic-regular.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/el-messiri-v15-arabic-regular.woff2"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body className=" bg-gray-50/80 text-gray-700  ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
