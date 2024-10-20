// こちらは、/news/3 のページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function News3() {
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

            <h3 className="text-xl font-semibold mb-2">2024年1月10日</h3>
            <p>新たな開発センターを会津若松市に開設</p>
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
              <p>
                2024年10月20日 –
                株式会社たけのこは、福島県会津若松市に新たな開発センターを開設することを発表しました。この開発センターは、たけのこ製品の研究・開発を強化し、さらなる技術革新を推進する拠点となる予定です。
              </p>

              <h2>会津若松市での新たな取り組み</h2>
              <p>
                会津若松市は、豊かな自然環境と技術産業の成長が共存する地域です。新たに開設される開発センターでは、自然素材である竹を活かした製品開発をさらに進め、持続可能な社会の実現に貢献することを目指します。
              </p>

              <h2>最先端の技術と環境への配慮</h2>
              <p>
                この開発センターは、最新の技術設備を備え、エコロジーにも配慮した設計が施されています。エネルギー効率の高い設備を導入し、環境への負荷を最小限に抑えながら、革新的な製品開発に取り組みます。
              </p>

              <h2>地域社会との連携</h2>
              <p>
                株式会社たけのこは、地域社会との連携を重視し、会津若松市の地元企業や教育機関との協力を強化していく予定です。地元の技術者や若い人材の育成にも力を入れ、地域の発展にも貢献していきます。
              </p>

              <h2>開設の意義と展望</h2>
              <p>
                新開発センターの開設により、たけのこ製品の研究開発をさらに強化し、新しい価値を創造していくことが期待されています。会津若松市の豊かな環境の中で、革新的な製品が生まれることでしょう。
              </p>

              <h3>概要</h3>
              <ul>
                <li>
                  <strong>名称</strong>：株式会社たけのこ 会津若松開発センター
                </li>
                <li>
                  <strong>所在地</strong>：福島県会津若松市〇〇丁目〇〇番地
                </li>
                <li>
                  <strong>開設日</strong>：2024年11月1日
                </li>
              </ul>
              <p>
                今後も株式会社たけのこは、技術革新と環境への配慮を両立させた開発を進めてまいります。
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
