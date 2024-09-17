import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <title>RaiderHCPlay's Website</title>
            <link rel={"icon"} href={"https://avatars.githubusercontent.com/u/170134946?v=4"}/>
        </Head>
        <body className="antialiased bg-blue-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
