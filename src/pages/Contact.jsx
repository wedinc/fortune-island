//こちらは、/contact 会社へのお問い合わせページです。
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Contact() {
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

      <section>
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

          {/* 送信ボタン */}
          <button
            class="favorite styled"
            type="button"
            className="text-saddlebrown border border-indigo-600"
          >
            submit
          </button>

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
        </form>
        <Button className="mt-8" onClick={() => navigate("/")}>
          ホームに戻る
        </Button>
      </section>
    </>
  );
}
