// こちらは、/company 会社紹介のページです。
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Company() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Image
              src="https://yomerunet.com/wp-content/uploads/2021/11/%E3%81%9F%E3%81%91%E3%81%AE%E3%81%93%E3%81%AE%E9%87%8C.jpg"
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
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-8 text-center">社名</h2>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-xl mb-4">株式会社たけのこ</p>
                <p className="mb-4">
                  たけのこは「竹の子」、つまり竹の若芽を意味し、その成長力としなやかさは、私たちの目指す姿と重なります。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container mx-auto">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-8 text-center">姿勢</h2>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-xl mb-4">柔軟性と強さ</p>
                <p className="mb-4">
                  変化する市場に柔軟に対応しながら、確かな基盤を持ち、持続的に発展する企業を目指しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container mx-auto">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-8 text-center">製品</h2>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-xl mb-4">たけのこの里</p>
                <p className="mb-4">
                  チョコとクッキーのおいしいコラボレーション
                </p>
                <p className="text-xl mb-4">たけのこマグカップ</p>
                <p className="mb-4">竹の風味を楽しめるマグカップ</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-16">
          <div className="container mx-auto">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-8 text-center">会社概要</h2>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-xl mb-4">我らが里</p>
                <p className="mb-4 ml-10">
                  {" "}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51077.89006849834!2d140.60970038606214!3d36.857606340768235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6021a03589721bb7%3A0xbd0f6499727d6865!2z44CSMzE5LTE1MzEg6Iyo5Z-O55yM5YyX6Iyo5Z-O5biC6I-v5bed55S66Iqx5ZyS!5e0!3m2!1sja!2sjp!4v1729389244044!5m2!1sja!2sjp"
                    width="280"
                    height="210"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
