// こちらは、/news ニュース一覧のページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function News() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYycfBzgZCCzh0yvSxj3Cc6sz7Cp_VZggsrw&s"
              alt="企業ロゴ"
              width={80}
              height={80}
            />
            <h1 className="text-4xl font-bold">株式会社たけのこ</h1>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-muted py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">news</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <a href="/news/1" className="hover:underline">
                  <h3 className="text-xl font-semibold mb-2">2024年3月15日</h3>
                  <p>新作たけのこ味のたけのこの里の開発を発表</p>
                </a>
              </div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <a href="/news/2" className="hover:underline">
                  <h3 className="text-xl font-semibold mb-2">2024年2月1日</h3>
                  <p>年間売上高が過去最高を記録</p>
                </a>
              </div>

              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <a href="/news/1" className="hover:underline">
                  <h3 className="text-xl font-semibold mb-2">2024年1月10日</h3>
                  <p>新たな開発センターを会津若松市に開設</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
