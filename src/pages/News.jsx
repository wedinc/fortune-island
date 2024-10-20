// こちらは、/news ニュース一覧のページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";
import xIcon from "../icons/x.png";

export default function News() {
  const navigate = useNavigate();

  const handleClickAbout = () => {
    navigate("/product");
  };

  const handleClickNews = () => {
    navigate("/news");
  };

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
        <section className="relative h-[1300px]">
          <Image
            src="https://media.istockphoto.com/photos/giraffe-at-sunset-in-the-savannah-picture-id669751680?k=6&m=669751680&s=170667a&w=0&h=K-IE_qzo2GJdyuIBZ8t6ysINnEe-thsMouB3TGFfQuI="
            alt="ニュース"
            layout="fill"
            width={1920}
            height={1080}
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center relative h-[300px]">
            <div className="text-left text-white">
              <h2 className="text-3xl font-bold mb-4 relative h-[50px]">
                {"ニュース一覧"}
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-muted-foreground">2024年10月20日</span>
                  <a href="/news/1" className="hover:underline">
                    猿人類の文明：自然と共生した知的社会の痕跡
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-muted-foreground">2024年10月20日</span>
                  <a href="/news/2" className="hover:underline">
                    猿人類の文明：進化の証拠が人類史を書き換える
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-muted-foreground">2024年10月20日</span>
                  <a href="/news/3" className="hover:underline">
                    猿人類の知的活動：進化論に新たな光を当てる
                  </a>
                </div>
                <p className="text-xl mb-8 font-bold text-white relative h-[100px]"></p>
              </div>
            </div>
          </div>
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnatgeo.nikkeibp.co.jp%2Fnng%2Farticle%2F20130312%2F343500%2Fph_thumb.jpg&f=1&nofb=1&ipt=657f96d07408815dbe479fe06127f0c8ff9e8b9ab044bdec76cdf548713d4fcb&ipo=images"
            alt="ニュース"
            layout="fill"
            width={1920}
            height={1500}
            objectFit="cover"
            className="brightness-50"
          />
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
