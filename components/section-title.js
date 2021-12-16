import React, { Fragment } from "react";

const SectionTitle = ({ data }) => {
  const { title, subTitle } = data;
  return (
    <Fragment>
      <h4 className="sub_title">{subTitle}</h4>
      <h2 className="sec_title pb-5">{title}</h2>

    </Fragment>
  );
};

export default SectionTitle;
