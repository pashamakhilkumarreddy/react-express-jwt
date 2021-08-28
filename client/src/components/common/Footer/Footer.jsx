import React, { memo } from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className={`footer`}>
      <div className={`content has-text-centered`}>
        <p className="title is-5">
          &copy; 2020 <strong>React Express App</strong> - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
