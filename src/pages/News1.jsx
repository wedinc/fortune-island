// こちらは、/news/1 のページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function News1() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ backgroundColor: "black" }}
    >
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Image
              src="https://wed.company/img/wed.svg"
              alt="企業ロゴ"
              width={40}
              height={40}
            />
            <h1 className="text-2xl font-bold text-white">株式会社ヒト</h1>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center sm:justify-end space-x-4">
              <li>
                <a href="/" className="hover:underline font-bold text-white">
                  ホーム
                </a>
              </li>
              <li>
                <a
                  href="/product"
                  className="hover:underline font-bold text-white"
                >
                  事業内容
                </a>
              </li>
              <li>
                <a
                  href="/company"
                  className="hover:underline font-bold text-white"
                >
                  会社概要
                </a>
              </li>
              <li>
                <a
                  href="/recruitment"
                  className="hover:underline font-bold text-white"
                >
                  採用情報
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline font-bold text-white"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section>
          <Image
            src="https://media.istockphoto.com/photos/giraffe-at-sunset-in-the-savannah-picture-id669751680?k=6&m=669751680&s=170667a&w=0&h=K-IE_qzo2GJdyuIBZ8t6ysINnEe-thsMouB3TGFfQuI="
            alt="ニュース"
            layout="fill"
            width={1920}
            height={500}
            objectFit="cover"
            className="brightness-40"
          />
          <div className="absolute inset-0 flex items-center justify-center relative h-[400px]">
            <div className="text-left text-white">
              <h2 className="text-bold text-center text-4xl relative h-[75px]">
                猿人類の文明：自然と共生した知的社会の痕跡
              </h2>
              <ul>
                <li>
                  中央アフリカの奥地で、科学者たちは猿人類が築いた文明の痕跡を発見しました。この文明は、自然との共生
                </li>
                <li>
                  を重視し、持続可能な生活を送っていたことがうかがえます。調査によると、彼らは土器や簡易的な農耕技術を
                </li>
                <li>
                  活用し、限られた資源の中で食料生産を行っていました。また、集落内の洞窟からは、装飾品や壁画が見つか
                </li>
                <li>
                  り、宗教的儀式や芸術活動も営まれていたと推測されています。
                </li>
                <li>
                  この発見は、人間だけが文明を築くわけではないということを示唆するものであり、科学者たちは猿人類の行動が
                </li>
                <li>
                  進化の中で独立した「社会的知性の発展」と見なしています。この発見により、動物と人間の境界線が揺らぎ、
                </li>
                <li>知的な社会の定義が見直される可能性が出てきました。</li>
                <li className="text-right relative h-[300px]">
                  2024年10月20日
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <h3 className="text-lg font-semibold mb-4">株式会社ヒト</h3>
            <p>〒151-0051</p>
            <p>東京都渋谷区千駄ヶ谷 4-14-4 Sビル千駄ヶ谷 2F</p>
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
        </div>
        <div className="container mx-auto mt-8 text-center">
          <p>&copy; 2024 株式会社ヒト. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
