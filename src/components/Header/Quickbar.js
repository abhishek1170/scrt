import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuickSearch = () => {
  return (
    <span className="header_quick">
      <FontAwesomeIcon icon="search" />
      <input className="header_quick--input" placeholder="Quick Search" />
    </span>
  );
};

export default QuickSearch;
