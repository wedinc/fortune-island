import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Map() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h3 className="text-lg font-semibold mb-4">リンク</h3>
        <ul className="space-y-2">
          <li>
            <a href="../" className="hover:underline">
              ホーム
            </a>
          </li>
          <li>
            <a href="../product" className="hover:underline">
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
          <li>
            <a href="/news" className="hover:underline">
              ニュース
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              プライバシーポリシー
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              利用規約
            </a>
          </li>
          <li>
            <a href="/members" className="hover:underline">
              メンバー紹介
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
