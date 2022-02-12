import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ path, name }) => {
  return <Link to={path}>{name}</Link>;
};

export default Navigation;
