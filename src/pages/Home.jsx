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

  const handleClickMembers = () => {
    navigate("/members");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
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

      <main>
        <section className="relative h-[1441px]">
          <Image
            src="https://yomerunet.com/wp-content/uploads/2021/11/%E3%81%9F%E3%81%91%E3%81%AE%E3%81%93%E3%81%AE%E9%87%8C.jpg"
            alt="企業イメージ"
            layout="fill"
            width={1920}
            height={1080}
            objectFit="cover"
          />
        </section>

        <div className="flex items-center justify-center text-center text-black mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              たけのこが未来を創造する
            </h2>
            <p className="text-xl mb-8">
              私たちは、革新的なソリューションで社会に貢献します
            </p>
            <Button
              className="text-black bg-transparent border border-black text-3xl"
              variant="secondary"
              onClick={handleClickAbout}
            >
              詳細はこちら
            </Button>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">事業内容</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">たけのこ開発</h3>
                <p>最新技術を活用した、美味しいたけのこの里を提供します。</p>
              </div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">AIソリューション</h3>
                <p>
                  機械学習と深層学習を用いた、革新的なたけのこの里量産開発をします。
                </p>
              </div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">クラウドサービス</h3>
                <p>
                  安全で効率的なたけのこクラウドインフラストラクチャを構築・運用します。
                </p>
              </div>
              <Button
                className="text-black bg-transparent border border-black text-3xl"
                variant="secondary"
                onClick={handleClickMembers}
              >
                社員紹介
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">企業理念</h2>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xl mb-4">
                「たけのこを通じて、より良い社会の実現に貢献する」
              </p>
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
                  新作たけのこ味のたけのこの里の開発を発表
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
                  新たな開発センターを会津若松市に開設
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

      {/* フッター */}

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
    </div>
  );
}
