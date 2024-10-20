// こちらは、/members メンバー紹介ページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Members() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="text-center text-5xl mb-20">メンバー紹介</div>
      <div className="mx-96 text-2xl">プロダクトオーナー(PO)</div>
      <div className="mx-96 mb-20">
        Asai Haruhiko
        <img src="https://avatars.githubusercontent.com/u/185516655?s=40&v=4" />
      </div>
      <div className="mx-96 text-2xl">プロジェクトマネージャー(PM)</div>
      <div className="mx-96 mb-20">
        Mori Hiroshi
        <img src="https://avatars.githubusercontent.com/u/176570061?s=40&v=4" />
      </div>
      <div className="mx-96 text-2xl" text-2xl>
        テックリード
      </div>
      <div className="mx-96 mb-20">
        Tokura Riku
        <img src="https://avatars.githubusercontent.com/u/185563721?s=40&v=4" />
      </div>
      <div className="mx-96 text-2xl">エンジニア</div>
      <div className="mx-96 mb-20">
        Isogai Eito
        <img src="https://avatars.githubusercontent.com/u/185509872?v=4" />
      </div>
    </div>
  );
}
