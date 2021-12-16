import React from "react";
import LogoImage from "@/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="#">
                <img width="100px" src={LogoImage.src} alt="" />
              </a>
              <p>
                ISF est une société à responsabilité limité (SARL) avec un
                capital de 1 000 000.00 DH qui opère dans le domaine du
                transport, de la logistique, de la distribution, et des
                formalités douanières.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">contact</h3>
              <p>
              Address: 9, RESIDENCE ALMANSOURIA 
                <br />
                PLACE AL YASSIR -BELVEDERE CASABLANCA MAROC
              </p>
              <p>Tele: +212674-802282</p>
              <p>
                Email: <a href="#">y.achilij@isfreight.ma</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">Réseaux sociaux</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>Youtube
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} Designed by{" "}
              <a href="https://media-experts.net/">Talents Media Experts</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
