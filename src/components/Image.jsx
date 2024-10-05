// 各ページで画像を表示するためのコンポーネント
// 画像のパス(src)、alt属性、幅(width)、高さ(height)を受け取り、img要素を返す

import React from "react";

export function Image({ src, alt, width, height, ...props }) {
  return <img src={src} alt={alt} width={width} height={height} {...props} />;
}
