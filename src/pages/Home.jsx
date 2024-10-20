// こちらは、一番最初に表示されるページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import xIcon from "../icons/x.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClickAbout = () => {
    navigate("/product");
  };

  const handleClickNews = () => {
    navigate("/news");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
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

      <main>
        <section className="relative h-[1441px]">
          <Image
            src="https://sakuranouta.biz/wp-content/uploads/2023/10/%E3%82%AA%E3%83%95%E3%82%A3%E3%82%B9_1_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89-1.jpg"
            alt="企業イメージ"
            layout="fill"
            width={1920}
            height={2180}
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">
                あなたにあった求人先を
              </h2>
              <p className="text-xl mb-8">
                私たちは、あなたに寄り添って、あなたの人生に貢献します
              </p>
              <Button size="lg" variant="secondary" onClick={handleClickAbout}>
                <a href="https://u-aizu.ac.jp" className="hover:underline">
                  詳細はこちら
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">事業内容</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">職をアテンド</h3>
                <p>
                  無職それぞれにあった素晴らしい職場を見つけるお手伝いを行います。
                </p>
              </div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  安心のアフターケア
                </h3>
                <p>
                  職場復帰が怖くても大丈夫！弊社はそんな無職すらも救う救世主です。
                </p>
              </div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  リーモートハローワーク
                </h3>
                <p>ハローワークの機能をリモートで実現！</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">企業理念</h2>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xl mb-4">
                「無職を通じて、より良い社会の実現に貢献する」
              </p>
              <p className="mb-4">
                私たちは、無職に職を与えることで社会貢献を行う営利団体です。
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <a href="/news">最新のニュース</a>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">2024年3月15日</span>
                <a href="/news/1" className="hover:underline">
                  社名を変更いたしました
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">2024年2月1日</span>
                <a href="/news/2" className="hover:underline">
                  社員退社のお知らせです
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">2024年1月10日</span>
                <a href="/news/3" className="hover:underline">
                  『週刊社長コラム』挑戦の時。
                </a>
              </div>
            </div>
            <div className="text-center mt-8 ">
              <Button size="lg" variant="primary" onClick={handleClickNews}>
                ニュース一覧へ
              </Button>
            </div>
          </div>
        </section>
      </main>

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
