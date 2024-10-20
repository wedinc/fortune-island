// こちらは、/news ニュース一覧のページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function News() {
  const navigate = useNavigate();

  return (
    <div>
      <a href="/" className="hover:underline">
        ホームへ
      </a>
      <br />
      <br />
      <h1>ニュース一覧</h1>
      <br />
      <a href="/news/1" className="hover:underline">
        PM体験とプログラミング開発を学ぶ2daysが開催されました!
      </a>
      <br />
      <br />
      <a href="/news/2" className="hover:underline">
        「卒論テーマの公開」と「学生課によるガイダンス」について
      </a>
      <br />
      <br />
      <a href="/news/3" className="hover:underline">
        蒼翔祭が開催されました!
      </a>
    </div>
  );
}
