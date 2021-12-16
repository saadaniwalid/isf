import React, { Fragment, useContext, useState, useEffect } from "react";
import { MenuContext } from "@/context/menu-context";
import PopupMenu from "@/components/popup-menu";
import { Link as ScrollLink } from "react-scroll";
import Header from "./Header";
import Footer from "./footer";
import Head from 'next/head'


const Layout = ({ PageTitle, children }) => {
  const { menuStatus } = useContext(MenuContext);
  const [scrollTop, setScrollTop] = useState(false);

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrollTop]);

  return (
    <Fragment>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta Name ="developer" content="walid saadani" />
        <title>{PageTitle}</title>
        <meta name="description" content={`ISF est une société à responsabilité limité (SARL) avec un capital de 1 000 000.00 DH qui opère dans le domaine du transport, de la logistique, de la distribution, et des formalités douanières. ISF est composé d’un personnel ambitieux qui a toujours eu un soucis élevé de la qualité de ses prestations, et qui mène une politique de diversification.`}></meta>
 
+       <meta property="og:title" content={PageTitle} key="ogtitle" />
+       <meta property="og:description" content={`ISF est une société à responsabilité limité (SARL) avec un capital de 1 000 000.00 DH qui opère dans le domaine du transport, de la logistique, de la distribution, et des formalités douanières. ISF est composé d’un personnel ambitieux qui a toujours eu un soucis élevé de la qualité de ses prestations, et qui mène une politique de diversification.`} key="ogdesc" />
      </Head>
<Header />
      <div id="wrapper">{children}</div>
      {true === menuStatus ? <PopupMenu /> : null}

      {scrollTop === true ? (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          className="scroll-to-top showit"
        >
          <i className="fa fa-angle-double-up"></i>
        </ScrollLink>
      ) : null}
      <Footer />
    </Fragment>
  );
};

export default Layout;
