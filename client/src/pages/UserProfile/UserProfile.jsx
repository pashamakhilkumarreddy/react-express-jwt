import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import UsersService from "../../services/UsersService";

const UserProfile = () => {
  const [userDetails, updateUserDetails] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const userId = parseInt(window.location.pathname.split("/").slice(-1));
        const result = await UsersService.getUser(userId);
        updateUserDetails(result.data.user[0]);
      } catch (err) {
        console.error(err.response);
      }
    })();
  }, []);

  const displayDetail = (detail) => (detail ? detail : "");

  return (
    <>
      <Helmet>
        <title>{userDetails.name} | React Express App</title>
      </Helmet>
      <div className={`columns is-centered is-vcentered is-mobile`}>
        <div className={`column is-12`}>
          <div className={`card`}>
            <div className={`card-content`}>
              <p className={`title`}>Name: {displayDetail(userDetails.name)}</p>
              <p className={`subtitle`}>
                Username: {displayDetail(userDetails.username)}
              </p>
              <p className={`subtitle`}>
                Email: {displayDetail(userDetails.email)}
              </p>
              <p className={`subtitle`}>
                Phone: {displayDetail(userDetails.phone)}
              </p>
            </div>
            <footer className={`card-footer`}>
              <p className={`card-footer-item`}>
                <span>
                  <a
                    href={displayDetail(userDetails.website)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                </span>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
