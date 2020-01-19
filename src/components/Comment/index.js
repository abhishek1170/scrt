import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import CommentBox from "./CommentBox";
import LoadComment from "./LoadComment";


const Comment = () => {
  let commentCount = [1, 2, 3, 5, 5, 6, 1, 2, 3, 5, 5, 6, 1, 2, 3, 5, 5, 6];
  return (
    <Scrollbars
      autoHide
      renderThumbVertical={props => (
        <div {...props} className="thumbVertical" />
      )}
      renderTrackVertical={props => (
        <div
          {...props}
          className="trackVertical"
          style={{ height: "100%", width: "1.5%" }}
        />
      )}
      style={{
        marginTop: "4rem",
        maxHeight: "100vh",
        width: "90%"
      }}
    >
      {commentCount.map(() => (
        <CommentBox />
      ))}

      <LoadComment />
    </Scrollbars>
  );
};

export default Comment;
