import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, description }) => (
  <header>
    <h1 className="font-black text-4xl leading-tight">{title}</h1>
    <p className="py-4 font-light">{description}</p>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header;
