import React, { memo } from "react";
import { Helmet } from "react-helmet-async";
import NotFoundImage from "../../assets/images/NotFound.gif";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found | React Express App</title>
      </Helmet>
      <div className={`columns is-centered is-vcentered is-mobile`}>
        <div className={`column is-12`}>
          <img
            src={NotFoundImage}
            className={`not-found`}
            alt="Not Found"
            decoding="async"
            loading="lazy"
            importance="high"
          />
        </div>
      </div>
    </>
  );
};

export default memo(PageNotFound);
