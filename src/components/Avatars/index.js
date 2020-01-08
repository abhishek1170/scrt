import React from "react";

const Avatar = ({ avatar = {} }) => {
  let { profile_path, name, character } = avatar;
  const imgSrc = `https://image.tmdb.org/t/p/w200/${profile_path}`;
  character = character && ` as ${character}`;

  return (
    <div className="avatar">
      <div className="avatar_image">
        <img  src={imgSrc} />
      </div>
      <span className="avatar_original_name">{name}</span>
      <span className="avatar_charater_name">{character}</span>
    </div>
  );
};

export default Avatar;
