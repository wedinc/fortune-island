// こちらは、/news ニュース一覧のページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import xIcon from "../icons/x.png";
import { useNavigate } from "react-router-dom";

export default function News() {
  // const navigate = useNavigate();

  return (
    <div className="">
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Image
              src="https://wed.company/img/wed.svg"
              alt="企業ロゴ"
              width={40}
              height={60}
            />
            <h1 className="text-2xl font-bold">株式会社HalloWork</h1>
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

      <div className="news bg-gray-200  p-3">
        <h1 className="text-6xl p-3 tracking-widest">NEWS</h1>
        <div className="newslist">
          <div className="news1 p-3 m-3 h-60 bg-gray-100 rounded-sm ">
            <a href="/news/1">
              <div className="flex">
                <img
                  className="h-52 w-96 float-none hover:opacity-50"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXcqFz63WyW8j_VXgiKv_3G8w1VEmo51XWg&s"
                  alt="サムネイル"
                />
                <div className=" p-2 text-2xl hover:opacity-50 hover:underline">
                  社名を変更いたしました
                  <span className="text-muted-foreground ml-3 text-sm">
                    2024年3月15日
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="news2 p-3 m-3 h-60 bg-gray-100 rounded-sm ">
            <a href="/news/2">
              <div className="flex">
                <img
                  className="h-52 w-96 float-none hover:opacity-50"
                  src="https://goopass-magazine-image-prd.s3.ap-northeast-1.amazonaws.com/magazine/wp-content/uploads/2021/07/MG_1188-800x533.jpg"
                  alt="サムネイル"
                />
                <div className=" p-2 text-2xl hover:opacity-50 hover:underline">
                  社員退社のお知らせ
                  <span className="text-muted-foreground ml-3 text-sm">
                    2024年2月1日
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="news3 p-3 m-3 h-60 bg-gray-100 rounded-sm ">
            <a href="/news/3">
              <div className="flex">
                <img
                  className="h-52 w-96 float-none hover:opacity-50"
                  src="https://www.kitamura.jp/shasha/wp-content/uploads/2024/06/05-2-scaled.jpg"
                  alt="サムネイル"
                />
                <div className=" p-2 text-2xl hover:opacity-50 hover:underline">
                  『週刊社長コラム』挑戦の時。
                  <span className="text-muted-foreground ml-3 text-sm">
                    2024年1月10日
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">株式会社HalloWork</h3>
            <p>〒151-0051</p>
            <p>東京都渋谷区千駄ヶ谷 4-14-4 SKビル千駄ヶ谷 2F</p>
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
                <a href="/" className="hover:underline">
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
          <p>&copy; 2024 株式会社HalloWork. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
