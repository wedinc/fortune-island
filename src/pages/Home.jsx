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
    <div className="min-h-screen bg-amber-100 text-foreground">
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Image
              src="https://png.pngtree.com/png-vector/20240416/ourmid/pngtree-gorilla-hand-with-index-finger-pointing-isolated-on-white-background-png-image_12290189.png"
              alt="企業ロゴ"
              width={40}
              height={40}
            />
            <h1 className="text-2xl text-amber-950 font-bold">株式会社ヒト</h1>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-4">
              <li>
                <a
                  href="/"
                  className="bg-card text-card-foreground p-4 rounded-lg shadow-md hover:underline text-amber-950"
                >
                  ホーム
                </a>
              </li>
              <li>
                <a
                  href="/product"
                  className="bg-card text-card-foreground p-4 rounded-lg shadow-md hover:underline text-amber-950"
                >
                  事業内容
                </a>
              </li>
              <li>
                <a
                  href="/company"
                  className="bg-card text-card-foreground p-4 rounded-lg shadow-md hover:underline text-amber-950"
                >
                  会社概要
                </a>
              </li>
              <li>
                <a
                  href="/recruitment"
                  className="bg-card text-card-foreground p-4 rounded-lg shadow-md hover:underline text-amber-950"
                >
                  採用情報
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="bg-card text-card-foreground p-4 rounded-lg shadow-md hover:underline text-amber-950"
                >
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
            src="https://img.freepik.com/free-photo/funny-old-woman-with-monkey_23-2151058755.jpg"
            alt="企業イメージ"
            layout="fill"
            width={1920}
            height={1080}
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">
                類人猿にヒューマンレベルを
              </h2>
              <p className="text-xl mb-8">
                私達は新人類を生み出し社会に貢献させます
              </p>
              <Button
                size="lg"
                className="hover:underline"
                variant="secondary"
                onClick={handleClickAbout}
              >
                詳細はこちら
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">事業内容</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">類人猿研究</h3>
                <p>
                  類人猿の現在の思考力を解析しさらなる成長に繋がる研究をします。
                </p>
              </div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">AI進化</h3>
                <p>マイクロチップを脳に埋め込み思考力判断力を補助します。</p>
              </div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">徹底した教育</h3>
                <p>
                  人類、類人猿共双方にとっての安全性を守るための教育をします。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">企業理念</h2>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xl mb-4">「新たな労働力で、よりよい社会へ」</p>
              <p className="mb-4">
                私たちは、最先端の技術と創造力を駆使し、社会の課題解決に取り組みます。
                持続可能な未来の創造に向けて、常に挑戦し続けます。
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              最新のニュース
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">2024年3月15日</span>
                <a href="/news/1" className="hover:underline">
                  新AIプラットフォームの開発を発表
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">2024年2月1日</span>
                <a href="/news/2" className="hover:underline">
                  年間売上高が過去最高を記録
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">2024年1月10日</span>
                <a href="/news/3" className="hover:underline">
                  新たな研究開発センターを東京に開設
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
            <h3 className="text-lg font-semibold mb-4">株式会社ヒト</h3>
            <p>〒851-1315</p>
            <p>長崎県長崎市高島町端島</p>
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
          <p>&copy; 2024 株式会社ヒト. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
