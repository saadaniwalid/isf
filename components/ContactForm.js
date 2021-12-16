import React from "react";
import emailjs from 'emailjs-com';


export default function ContactForm() {

    function sendEmail(e){
        e.preventDefault()
        emailjs.sendForm(
            "service_vjp6p3h",
            "template_bzwjyze",
            e.target,
            "user_6RwQZOlRV9TU27TC9pkZZ"
          ).then(res=>{
              console.log(res);
          }).catch(err=> console.log(err));
        } 
  return (
    <>
    <section className="commonSection client_2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-2">
              <h4 className="sub_title">POUR</h4>
              <h2 className="sec_title">NOUS CONTACTER</h2>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="contactinfo">
                <h3>Siège social</h3>
                <p>
                  9, RESIDENCE ALMANSOURIA - PLACE AL YASSIR -BELVEDERE
                  CASABLANCA MAROC
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="contactinfo">
                <h3>E-mail</h3>
                <p>
                y.achilij@isfreight.ma 
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="contactinfo">
                <h3>service commercial</h3>
                <p>
                +212674-802282
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" ContactPage">
        <div className="container">
          <div className="row">

          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
              <form
                action="#"
                method="post"
                className="contactFrom"
                id="contactForm"
                onSubmit={sendEmail}
              >
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <input
                      className="input-form required"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Votre Nom Complet"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <input
                      className="input-form required"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Votre Adresse de messagerie"
                    />
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <input
                      className="input-form"
                      type="text"
                      name="sujet"
                      id="sujet"
                      placeholder="Sujet"
                    />
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <textarea
                      className="input-form required"
                      name="message"
                      id="message"
                      placeholder="Écrire un message"
                    ></textarea>
                  </div>
                </div>
                <button
                  className="common_btn red_bg"
                  type="submit"
                  id="con_submit"
                >
                  <span>Envoyer</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid commonContainer" >
          <div className="row">
<div className="col col-12">
<div className="google-map__contact-page">
      <iframe
        title="template google map"
        src="https://maps.google.com/maps?width=100%25&amp&amp;hl=en&amp;q=casablanca+isf&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        className="map__contact-page"
        allowFullScreen
      ></iframe>
    </div>
</div>
          </div>
      </div>
    </>
  );
}
