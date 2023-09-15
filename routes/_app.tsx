import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <title>MAWJ</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@2.18.1/dist/full.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body>
        <Component />
      </body>
    </html>
  );
}
