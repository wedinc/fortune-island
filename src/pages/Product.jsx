// こちらは、/product　プロダクト紹介ページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto flex flex-col items-center text-center p-4">
      <h1 className="text-2xl font-bold mb-4">たけのこの里</h1>
      <Image
        src="https://yomerunet.com/wp-content/uploads/2021/11/%E3%81%9F%E3%81%91%E3%81%AE%E3%81%93%E3%81%AE%E9%87%8C.jpg"
        width={300} // 画像サイズを調整
        className="mb-4"
      />
      <p className="font-bold mb-8">
        チョコとクッキーのおいしいコラボレーション
      </p>

      <h2 className="text-2xl font-bold mb-4">たけのこの里マグカップ</h2>
      <Image
        src="https://videopalace.net/od/wp-content/uploads/2019/04/190214bamboomug_00.jpg"
        width={250} // 画像サイズを調整
        className="mb-4"
      />
      <p className="font-bold mb-8">竹の風味を楽しめるマグカップ</p>

      <Button className="mt-8" onClick={() => navigate("/")}>
        ホームに戻る
      </Button>
    </div>
  );
}
