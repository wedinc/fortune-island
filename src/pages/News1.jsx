// こちらは、/news/1 のページです
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function News1() {
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

            <h3 className="text-xl font-semibold mb-2">2024年3月15日</h3>
            <p>新作たけのこ味のたけのこの里の開発を発表</p>
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
              <p>
                2024年10月20日 –
                株式会社たけのこは、本日、新作「たけのこ味のたけのこの里」の開発を正式に発表いたしました。
              </p>
              <p>
                この新作は、長年愛され続けてきた「たけのこの里」に、新鮮なたけのこ風味を取り入れたユニークな商品です。
                たけのこ特有の爽やかな風味と、これまでのチョコレートの甘さを絶妙に組み合わせた新感覚のスイーツです。
              </p>
              <h2>たけのこが味わえる新感覚のスイーツ</h2>
              <p>
                「たけのこ味のたけのこの里」は、サクサクとした食感とまろやかなチョコレートのコーティングはそのままに、竹の若芽の優しい風味が口いっぱいに広がります。
                たけのこファンのみならず、新しい味覚体験を求めるすべての方におすすめです。
              </p>
              <h2>開発の背景</h2>
              <p>
                「たけのこの里」は1979年の発売以来、長く愛されてきたお菓子ですが、今回の新作開発には自然への思いが込められています。
                開発担当者は「たけのこは成長力や持続可能性を象徴する自然の恵み。このたけのこを使った新しい味わいを通じて、自然をもっと身近に感じていただきたい」と語っています。
              </p>
              <h2>発売日と今後の展望</h2>
              <p>
                「たけのこ味のたけのこの里」は、2024年12月1日に全国のコンビニエンスストアおよびスーパーで発売予定です。
                数量限定での販売も検討されているため、お早めにお買い求めください。
              </p>
              <h3>商品概要</h3>
              <ul>
                <li>
                  <strong>商品名</strong>：たけのこ味のたけのこの里
                </li>
                <li>
                  <strong>発売日</strong>：2024年12月1日
                </li>
                <li>
                  <strong>価格</strong>：税込300円（希望小売価格）
                </li>
                <li>
                  <strong>発売場所</strong>
                  ：全国のコンビニエンスストア、スーパー、公式オンラインストア
                </li>
              </ul>
              <p>
                自然の風味を活かした「たけのこ味のたけのこの里」、ぜひご期待ください！
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
