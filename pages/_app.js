import MenuContextProvider from '../context/menu-context'
import "bootstrap/dist/css/bootstrap.min.css";
import "typeface-oswald";
import "@/css/main.css";
import "swiper/css";
import { AnimateSharedLayout } from "framer-motion"



function MyApp({ Component, pageProps }) {
  return <AnimateSharedLayout><MenuContextProvider><Component {...pageProps} /></MenuContextProvider></AnimateSharedLayout> 
}

export default MyApp
