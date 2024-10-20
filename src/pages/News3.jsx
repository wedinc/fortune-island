// こちらは、/news/3 のページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import xIcon from "../icons/x.png";
import { useNavigate } from "react-router-dom";

export default function News3() {
  // const navigate = useNavigate();

  return (
    <div>
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

      <div className="article p-10 m-auto">
        <h1 className="text-3xl p-3 text-center">
          『週刊社長コラム』挑戦の時。
        </h1>
        <span className="text-muted-foreground ml-3 text-sm">
          2024年1月10日
        </span>
        <p className="ml-3 w-11/12">
          お久しぶりです。社長です。思い返せば会社を設立してかなりの年月が経ちました。当時の自分のライフスタイルと今を比べると、比べ物にならないほど変わっています。そのように変わっているのは自分自身だけでなく世の中もそうで、現代人の生活は目まぐるしく変わっています。そうした世の中を生きる上で重要なのが、「挑戦」です。挑戦とはつまりリスク、リスクは成果と隣り合わせ。ここで挑戦しなければ永遠に成果を得ることはないのでしょう。私は今日から挑戦をします。如何なる失敗もあるでしょう。では。
        </p>
        <a className="ml-3 mt-3 text-xs hover:opacity-30" href="/news">
          ニュース一覧に戻る
        </a>
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
