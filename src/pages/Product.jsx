// こちらは、/product　プロダクト紹介ページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Product() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
      <h1 className="text-2xl font-bold">たけのこの里</h1>
      <Image src="https://yomerunet.com/wp-content/uploads/2021/11/%E3%81%9F%E3%81%91%E3%81%AE%E3%81%93%E3%81%AE%E9%87%8C.jpg" />
      <p className="font-bold">チョコとクッキーのおいしいコラボレーション</p>
    </div>
  );
}
