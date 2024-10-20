// こちらは、/news/2 のページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function News2() {
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

            <h3 className="text-xl font-semibold mb-2">2024年2月1日</h3>
            <p>年間売上高が過去最高を記録</p>
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
              <p>
                2024年2月1日 –
                株式会社たけのこは、2024年度の年間売上高が過去最高を記録したことを発表しました。
              </p>
              <p>
                これは、たけのこ製品に対する高い需要と、革新的な商品開発戦略が功を奏した結果です。
                特に、新製品「たけのこ味のたけのこの里」の好調な売れ行きが売上増加に大きく貢献しました。
              </p>
              <h2>売上の背景</h2>
              <p>
                環境に配慮した製品開発や、持続可能な素材の利用を重視した当社の取り組みが、多くの消費者に支持され、
                これまでにない高い評価を得ました。これにより、売上は前年比を大きく上回り、過去最高の結果となりました。
              </p>
              <h2>今後の展望</h2>
              <p>
                株式会社たけのこは、今後もたけのこを活用したユニークな製品の開発を続け、さらなる成長を目指します。
                消費者のニーズに応え、環境に配慮した製品づくりを推進し、持続可能な社会の実現に貢献していきます。
              </p>
            </div>
          </div>
        </section>
        <Button className="mt-8" onClick={() => navigate("/")}>
          ホームに戻る
        </Button>
      </main>
    </div>
  );
}
