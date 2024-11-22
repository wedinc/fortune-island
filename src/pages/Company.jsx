// こちらは、/company 会社紹介のページです。

// import { Button } from "../components/Button";
// import { Image } from "../components/Image";
// import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import xIcon from "../icons/x.png";
import { useNavigate } from "react-router-dom";

export default function Company() {
  return (
    <div className="min-h-screen bg-amber-100 text-gray-800">
      {/* ヘッダーセクション */}
      <header className="bg-primary text-primary-foreground p-4 shadow-md">
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

      {/* メインコンテンツ */}
      <main className="py-16">
        <div className="container mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl text-amber-950 font-bold mb-4">企業情報</h2>
            <p className="text-lg text-amber-950 mb-4">
              株式会社ヒトは常に人類にとっての新しいアイデアを生み続けます。後世をより豊かにしていくために。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl text-amber-950 font-semibold">設立</h3>
                <p>2121年4月1日</p>
              </div>
              <div>
                <h3 className="text-xl text-amber-950 font-semibold">所在地</h3>
                <p>長崎県長崎市高島町端島</p>
              </div>
              <div>
                <h3 className="text-xl text-amber-950 font-semibold">代表者</h3>
                <p>代表取締役 田畑剣</p>
              </div>
              <div>
                <h3 className="text-xl text-amber-950 font-semibold">資本金</h3>
                <p>1000億円</p>
              </div>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg shadow-md border border-gray-300">
            <h2 className="text-2xl font-bold mb-4 text-amber-950">
              企業ビジョン
            </h2>
            <p className="text-lg text-gray-700">
              私たちは、人口減少の現実に立ち向かうため新たな視点で経済を支える労働力を生み出し、経済を発展させ持続可能な未来を実現することを目指しています。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">企業イメージ</h2>
            <img
              src="https://img.freepik.com/free-photo/funny-old-woman-with-monkey_23-2151058755.jpg"
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
