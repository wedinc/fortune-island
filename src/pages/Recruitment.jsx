// こちらは、/recruitment 採用活動ページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Recruitment() {
  // const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  return (
    <div className="text-2xl text-black">
      <h1>私たちのチームに参加しませんか？</h1>
      <p className="mb-8">私たちはたけのこ愛のある人材を探しています。</p>

      <p>年収・・・１０００万円</p>
      <p className="mb-8">職種・・・製造、販売</p>

      <h1 className="container mx-auto text-center">面接情報</h1>
      <p className="container mx-auto text-center">
        面接プロセス：
        <ol>
          <li>書類選考</li>
          <li>一次面接（オンライン）</li>
          <li>最終面接（対面またはオンライン）</li>
          <li>⚠️きのこ派閥の方は応募できません⚠️</li>
        </ol>
      </p>
      <p className="container mx-auto text-center">
        <p onClick={() => setCount(count + 1)} className="cursor-pointer">
          🍄 {count}
        </p>
        <p onClick={() => setCount1(count1 + 1)} className="cursor-pointer">
          🎍 {count1}
        </p>
      </p>
      <Button className="mt-8" onClick={() => navigate("/")}>
        ホームに戻る
      </Button>
    </div>
  );
}
