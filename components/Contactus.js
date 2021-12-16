import Link from "next/link";
import React from "react";

export default function Contactus() {
  return (
    <section className="commonSection scontact">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-sm-8 col-md-9">
            <h2 className="sec_title white">Contactez  nous vite pour demander une cotation</h2>
          </div>
          <div className="col-lg-3  col-sm-4 col-md-3 text-right">
          <Link href="/contacts" ><a className="common_btn ">
                  <span>NOUS CONTACTER</span>
                  </a></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
