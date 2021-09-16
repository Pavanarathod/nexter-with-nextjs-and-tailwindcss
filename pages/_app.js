import "tailwindcss/tailwind.css";
import "../styles/header.css";
import "../styles/feature.css";
import "../styles/story.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
