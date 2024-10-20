// こちらは、/product　プロダクト紹介ページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center space-x-2 mb-4 sm:mb-0" align="center">
      <Image
        src="https://wed.company/img/wed.svg"
        alt="企業ロゴ"
        width={40}
        height={40}
      />

      <h1 className="text-2xl font-bold">株式会社HalloWork</h1>
    </div>
  );
}
