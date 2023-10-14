import '@/styles/globals.css'
import "../styles/sass/main.scss";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
