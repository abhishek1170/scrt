import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DefaultAvatar } from "../../Images/images";

const CommentBox = () => {
  return (
    <div className="comment-box">
      <img className="comment-box__image" src={DefaultAvatar} />
      <div className="comment-box__box">
        <p className="comment-box__detail">
          <span className="comment-box__detail--author">
            <b>authorname</b>
            <span className="comment-box__detail--time">
              {new Date().toDateString()}
            </span>
          </span>
          <span>
              1 <FontAwesomeIcon className="comment-box__detail--like" icon={["far", "heart"]} />
          </span>
        </p>
        <p className="comment-box__comment">
          People here complaining about the site spamming ads...Get a life.You
          come here for freebies and now you can't even deal with the ads that
          make it possible? Get outta here! Stop being #ChoosingBeggars
        </p>
      </div>
    </div>
  );
};

export default CommentBox;
