import "bootstrap/dist/css/bootstrap.min.css"; // Importando o CSS do Bootstrap
import "slick-carousel/slick/slick.css"; // Importando o CSS do slick-carousel
import "slick-carousel/slick/slick-theme.css"; // Importando o tema do slick-carousel
import "../../styles/custom.css"; // Importa o estilo de customizações
import "../../styles/global.css"; // Importa o estilo inline

import { useEffect } from "react";
import Slider from "react-slick"; // Importando o componente Slider do slick

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
