//こちらは、/contact 会社へのお問い合わせページです。
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";
import xIcon from "../icons/x.png";

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
      </section>

      <footer className="bg-primary text-primary-foreground py-8 bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhvy1upasDEdR_NgRK7XvdNfOBJje0ijZveS8WMG3Ggzhovxpd2Xh9ZUAQSSJmRv-mhbeUBZh0hGh2NsaDXGHMKOs4VeInzrwBCJs07Gi8XfkkfFi36t39P8VN8AEzPiSidm_u8Bs_4qJCRcs0ITlx4yGWnPGXzQRjtEykXJOML7iYwi7FWnFMiDfwou_g/s1920/230913b.png')]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">株式会社たけのこ</h3>
            <p>〒555-5555</p>
            <p>東京都筍区竹の子 5-55-5 ビルタケノコ 2F</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
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
                <a href="/map" className="hover:underline">
                  サイトマップ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">ソーシャルメディア</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/wedinc_official" aria-label="x">
                <Image src={xIcon} alt="x" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 text-center">
          <p>&copy; 2024 株式会社たけのこ. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
