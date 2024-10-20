import { Image } from "../components/Image";

export default function Business() {
  const businesses = [
    {
      title: "持続可能な農業",
      description:
        "自然との共生を重視した農業事業。地域の資源を活かし、長期的な食料生産を支えます。",
      image:
        "https://c.pxhere.com/photos/02/0a/woman_mursi_ethiopia_africa-687599.jpg!d", // 画像URLを置き換えてください
    },
    {
      title: "再生エネルギーの活用",
      description:
        "風力や太陽光を利用したクリーンエネルギーの普及を目指し、持続可能な社会の実現を推進します。",
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimage.interior-book.jp%2Farticle%2Foriginal%2F45880.jpg&f=1&nofb=1&ipt=4be8b6c183b9f0bd4194af94d9e93677ab74e069dd1867330eef0307c39a4f1d&ipo=images", // 画像URLを置き換えてください
    },
    {
      title: "教育・コミュニティ支援",
      description:
        "地域社会の発展を目指し、教育プログラムやコミュニティ活動を支援しています。",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-rpKZaIAa5V0%2FVwJEEpJB4JI%2FAAAAAAAAMPg%2FSCTezOEBdm4DDMVnuRLbf9j8FtkSX9QMw%2Fw1200-h630-p-k-no-nu%2F20160405papuanewguinea1.jpg&f=1&nofb=1&ipt=e9f2fa26b9088174878c393cf2f52905c84df3fefa2ed2b480a6b3219d6e0c23&ipo=images", // 画像URLを置き換えてください
    },
  ];

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

      <main className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold text-white mb-6">事業内容</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md">
              <Image
                src={business.image}
                alt={business.title}
                width={300}
                height={200}
              />
              <h3 className="text-xl font-bold mt-4">{business.title}</h3>
              <p className="mt-2">{business.description}</p>
            </div>
          ))}
        </div>
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
        <div className="container mx-auto mt-8 text-center text-white">
          <p>&copy; 2024 株式会社ヒト. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
