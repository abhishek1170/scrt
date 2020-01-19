import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TabDownload = ({ download = {} }) => {
  download = {};
  return (
    <div className="download-spec">
      <div className="download-spec_header">
        <span className="download-spec_header--title">Tech specs</span>
        <input
          className="download-spec_header--input"
          type="button"
          value="720p.BLU"
        />
        <input
          className="download-spec_header--input"
          type="button"
          value="1080p.BLU"
        />
        <input
          className="download-spec_header--input"
          type="button"
          value="720p.WEB"
        />
        <input
          className="download-spec_header--input"
          type="button"
          value="1080p.WEB"
        />
      </div>
      <table className="download-spec_detail">
        <tr>
          <td>
            <FontAwesomeIcon className="download-spec_detail--icon" icon="folder-open" />
            1.4 GB
          </td>
          <td>
            <FontAwesomeIcon className="download-spec_detail--icon" icon="expand-arrows-alt" />
            1280*534
          </td>
          <td>
            <FontAwesomeIcon className="download-spec_detail--icon" icon="volume-up" />
            English
          </td>
          <td>
            <FontAwesomeIcon className="download-spec_detail--icon" icon="eye" />
            NR
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon className="download-spec_detail--icon" icon={['far', "closed-captioning"]}  />
            Subtitles
          </td>
          <td>
            <FontAwesomeIcon className="download-spec_detail--icon" icon="film" />
            23.976fps
          </td>
          <td>
            <FontAwesomeIcon className="download-spec_detail--icon" icon={['far', "clock"]} />
            1hr59min
          </td>
          <td>
            <span className="download-spec_detail--icon">P/S</span>
            2,400/2,420
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TabDownload;
