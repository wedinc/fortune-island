// こちらは、/company 会社紹介のページです。

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Company() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <h1 className="large-text font-family-fantasy">Fotune island</h1> */}
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Image
              src="https://wed.company/img/wed.svg"
              alt="企業ロゴ"
              width={40}
              height={40}
            />
            <h1 className="text-2xl font-bold">株式会社WED </h1>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center sm:justify-end space-x-4">
              <li>
                <a href="/" className="hover:underline">
                  ホーム
                </a>
              </li>
              <li>
                <a href="/product" className="hover:underline">
                  事業内容
                </a>
              </li>
              <li>
                <a href="/company" className="hover:underline">
                  会社概要
                </a>
              </li>
              <li>
                <a href="/recruitment" className="hover:underline">
                  採用情報
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">会社概要</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-card-foreground p-6">
              <h3>社名</h3>
              <br />
              <h2 className="text-xl font-semibold mb-2">WED</h2>
              <p>
                由来のひとつはOdin’s dayから発祥した ”Wednesday”
                。Odinに倣い、貪欲に知力を探索し、探究し、魔法（のような力）を使えるようになりたいという願いを込めて。
                もうひとつの由来は「物と物を結びつける」という意味を持つ
                ”Wedding”
                。あらゆる2つの要素のバランスを取るのではなく、あえて結合させることで化学反応を起こすという意思を込めて。
              </p>
            </div>

            <div className="text-card-foreground p-6">
              <h3>態度</h3>
              <br />
              <h2 className="text-xl font-semibold mb-2">当たり前を超える。</h2>
              <p>
                世の中の正解に囚われず、新しい常識をつくる。誰かの真似事ではなく、自己表現し続ける。プロダクト、事業、人、経営、すべてにおいて「あたりまえを超える」企業でありたい。
              </p>
            </div>

            <div className="text-card-foreground p-6">
              <h3>姿勢</h3>
              <br />
              <h2 className="text-xl font-semibold mb-2">世界観ファースト。</h2>
              <p>逆算を止めたら、理想の世界は実現しない。 </p>
              <br />
              <h2 className="text-xl font-semibold mb-2">
                新しい発見をし続けよう。
              </h2>
              <p>アップデートを止めたら、新しい常識を生み出せない。</p>
              <br />
              <h2 className="text-xl font-semibold mb-2">
                一人ではできないことをしよう。
              </h2>
              <p>逆チームでなければ、次の時代は造れない。 </p>
            </div>

            <div className="text-card-foreground p-6">
              <h3>精神</h3>
              <br />
              <h2 className="text-xl font-semibold mb-2">
                アートとクラフトの会社でありたい。
              </h2>
              <p>
                アートは目的が明確でない創造、クラフトは目的が明確な創造。アートとクラフトは振り子のように行き来されなければ、本当の新しい発見やあたりまえを超えた創造は生まれない。{" "}
              </p>
            </div>
            <div className="text-card-foreground p-6">
              <h3>宣言</h3>
              <br />
              <h2 className="text-xl font-semibold mb-2">
                さわって楽しいものを作る。さわって楽しくないものは作らない。
              </h2>
              <p>
                プロダクトやサービス、事業を作るプロセスの中で作り手である自分たちが作っていて楽しくないものは使って楽しいものではないことを忘れない。
              </p>
            </div>
            <div className="text-card-foreground p-6">
              <a
                href="https://maps.app.goo.gl/R7sNybRkMuopxgjN7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://wed.fyi/img/img_map.png"
                  alt="googleマップ"
                  width={600}
                  height={400}
                />
              </a>

              <br />
              <br />
              <h3>設立</h3>
              <p>2016年5月26日</p>
              <br />
              <h3>会社名</h3>
              <p>WED株式会社（WED, Inc.）</p>
              <br />
              <h3>所在地</h3>
              <p>〒151-0051 東京都渋谷区千駄ヶ谷4-14-4 千駄ヶ谷SKビル 2F</p>
              <br />
              <h3>お問い合わせ</h3>
              <p>info@wed.company</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
