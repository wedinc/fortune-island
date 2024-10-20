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
<<<<<<< HEAD
      <p>
        <Image src="https://yomerunet.com/wp-content/uploads/2021/11/%E3%81%9F%E3%81%91%E3%81%AE%E3%81%93%E3%81%AE%E9%87%8C.jpg" />
      </p>
      <p className="font-bold mb-8">
        チョコとクッキーのおいしいコラボレーション
      </p>
      <p>
        <h2 className="text-2xl font-bold">たけのこの里マグカップ</h2>
      </p>
      <p>
        <Image
          src="https://videopalace.net/od/wp-content/uploads/2019/04/190214bamboomug_00.jpg"
          width={350}
        />
      </p>
      <p className="font-bold">竹の風味を楽しめるマグカップ</p>
      <Button className="mt-8" onClick={() => navigate("/")}>
        ホームに戻る
      </Button>
=======
      <Image src="https://yomerunet.com/wp-content/uploads/2021/11/%E3%81%9F%E3%81%91%E3%81%AE%E3%81%93%E3%81%AE%E9%87%8C.jpg" />
      <p className="font-bold">チョコとクッキーのおいしいコラボレーション</p>
>>>>>>> 35ac2b6beeb2da203d854d801c5d2209052528d0
    </div>
  );
}
