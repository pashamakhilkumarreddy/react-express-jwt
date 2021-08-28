import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const SEOPage = ({ title, component: Component }) => {
  return (
    <>
      <Helmet>
        <title>{`React Express JWT | ${title}`}</title>
      </Helmet>
      <Component />
    </>
  );
};

SEOPage.propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.any.isRequired,
};

export default SEOPage;
