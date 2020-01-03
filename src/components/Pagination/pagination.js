import React from "react";

import "./pagination.css";

const Pageination = () => {
  let first = 1;
  return (
    <div className="pagination">
      <input name="first" type="button" value="<< First" />
      <input name="previous" type="button" value="<< Previous" />

      <input name="" type="button" value="1" />
      <input name="" type="button" value="2" />
      <input name="" type="button" value="..."/>
      <input name="" type="button" value="15"/>
      <input name="" type="button" value="16"/>
      <input name="" type="button" value="17"/>
      <input name="" type="button" value="18"/>
      <input name="" type="button" value="19"/>
      <input name="" type="button" value="20"/>
      <input name="" type="button" value="..."/>
      <input name="" type="button" value="700" />
      <input name="" type="button" value="701" />

      <input name="next" type="button" value="Next >>"/>
      <input name="last" type="button" value="Last >>"/>
    </div>
  );
};

export default Pageination;
