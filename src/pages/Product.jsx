// こちらは、/product　プロダクト紹介ページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Product() {
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYycfBzgZCCzh0yvSxj3Cc6sz7Cp_VZggsrw&s"
              alt="企業ロゴ"
              width={40}
              height={40}
            />
            <h1 className="text-2xl font-bold">株式会社たけのこ</h1>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center sm:justify-end space-x-4">
              <li>
                <a href="/" className="hover:underline">
                  ホーム
                </a>
              </li>
              <li>
                <a href="/product" className="hover:underline">
                  事業内容
                </a>
              </li>
              <li>
                <a href="/company" className="hover:underline">
                  会社概要
                </a>
              </li>
              <li>
                <a href="/recruitment" className="hover:underline">
                  採用情報
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">たけのこの里</h1>
        <Image src="https://yomerunet.com/wp-content/uploads/2021/11/%E3%81%9F%E3%81%91%E3%81%AE%E3%81%93%E3%81%AE%E9%87%8C.jpg" />
        <p className="font-bold">チョコとクッキーのおいしいコラボレーション</p>
      </div>
    </>
  );
}
