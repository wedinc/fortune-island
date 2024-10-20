//こちらは、/contact 会社へのお問い合わせページです。
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <form action="" method="get" className="max-w-md mx-auto mt-8">
      {/* 名前の入力フィールド */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="text-saddlebrown text-saddlebrown-700 text-sm font-bold mb-2"
        >
          Enter your name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="appearance-none border border-indigo-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {/* コメントの入力フィールド */}
      <div className="mb-4">
        <label
          htmlFor="comment"
          className="saddlebrown text-saddlebrown saddlebrown text-saddlebrown-700 text-sm font-bold mb-2"
        >
          Enter your comment:
        </label>
        <input
          type="text"
          name="comment"
          id="comment"
          className="saddlebrown shadow appearance-none border border-indigo-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        />
      </div>

      {/* 送信ボタン */}
      <button
        class="favorite styled"
        type="button"
        className="text-saddlebrown border border-indigo-600"
      >
        submit
      </button>
      <Button className="mt-8" onClick={() => navigate("/")}>
        ホームに戻る
      </Button>
    </form>
  );
}
