// こちらは、/company 会社紹介のページです。
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Company() {
  // const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-amber-100 text-gray-800">
      {/* ヘッダーセクション */}
      <header className=" text-white py-8 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-wide">会社概要</h1>
        </div>
      </header>
      {/* メインコンテンツ */}
      <main className="py-16">
        <div className="container mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">企業情報</h2>
            <p className="text-lg mb-4">
              株式会社ヒトは、革新的な技術とサービスで社会に貢献する企業です。
              お客様と共に未来を創造し、持続可能な発展を目指します。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold">設立</h3>
                <p>2121年4月1日</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">所在地</h3>
                <p>長崎県長崎市高島町端島</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">代表者</h3>
                <p>代表取締役 田畑剣</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">資本金</h3>
                <p>1000億円</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">企業ビジョン</h2>
            <p className="text-lg">
              私たちは、技術の力でより良い社会を創造します。AI、クラウド、システム開発など、最先端技術を駆使して、社会が直面する課題を解決し、持続可能な未来を実現することを目指しています。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">沿革</h2>
            <ul className="list-disc pl-6">
              <li>2121年4月 - 株式会社ヒト設立</li>
              <li>2210年6月 - 東京本社を軍艦島に移転</li>
              <li>2211年10月 - 類人猿教育事業を開始</li>
              <li>2222年1月 - 類人猿発売事業を拡大</li>
            </ul>
          </section>

          {/* 企業イメージ画像 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">企業イメージ</h2>
            <img
              src="https://example.com/company-image.jpg"
              alt="企業イメージ"
              width={800}
              height={600}
              className="rounded-lg shadow-md"
            />
          </section>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 株式会社ヒト. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
