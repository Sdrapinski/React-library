import React from "react";
import "./Avatar.scss";

export interface AvatarProps {
  size?: number;
  source?: string;
  title?: string;
  alt?: string;
  borderRadius?: number;
}

const Avatar = (props: AvatarProps) => {
  return (
    <img
      style={{ borderRadius: props.borderRadius }}
      src={props.source}
      alt={props.alt}
      title={props.title}
      width={props.size}
      height={props.size}
    />
  );
};

export default Avatar;
