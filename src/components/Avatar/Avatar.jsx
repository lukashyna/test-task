import React from "react";
import css from "./Avatar.module.scss";
import coverPhoto from "../../assets/images/photo-cover.svg";

const Avatar = ({ photo }) => {
  const [imageSrc, setImageSrc] = React.useState(photo || coverPhoto);

  return (
    <img
      src={imageSrc}
      alt="card"
      className={css.avatar}
      onError={() => setImageSrc(coverPhoto)}
    />
  );
};

export default Avatar;
