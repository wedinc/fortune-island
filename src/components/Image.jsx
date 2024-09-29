import React from "react";

export function Image({ src, alt, width, height, ...props }) {
  return <img src={src} alt={alt} width={width} height={height} {...props} />;
}
