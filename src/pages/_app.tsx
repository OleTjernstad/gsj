import "@/styles/globals.css";
import "@/layout/main-menu/mainMenu.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
