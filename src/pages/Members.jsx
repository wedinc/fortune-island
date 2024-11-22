// こちらは、/members メンバー紹介ページです

import { Image } from "../components/Image";
import iroha from "../icons/S__63397890.jpg";
import takenokonoko from "../icons/S__6717460.jpg";
import yururi from "../icons/yururi.png";

export default function Members() {
  return (
    <>
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYycfBzgZCCzh0yvSxj3Cc6sz7Cp_VZggsrw&s"
              alt="企業ロゴ"
              width={40}
              height={40}
            />
            <h1 className="text-2xl font-bold">株式会社たけのこ</h1>
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

      <section className="py-16 flex flex-col items-center bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhvy1upasDEdR_NgRK7XvdNfOBJje0ijZveS8WMG3Ggzhovxpd2Xh9ZUAQSSJmRv-mhbeUBZh0hGh2NsaDXGHMKOs4VeInzrwBCJs07Gi8XfkkfFi36t39P8VN8AEzPiSidm_u8Bs_4qJCRcs0ITlx4yGWnPGXzQRjtEykXJOML7iYwi7FWnFMiDfwou_g/s1920/230913b.png')]">
        <div className="flex flex-col items-center mb-8">
          <div className="flex justify-center">
            <Image
              src={takenokonoko}
              alt="たけのこのこ"
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-xl text-center mt-4">たけのこのこ</h1>
        </div>

        <div className="flex flex-col items-center mb-8">
          <div className="flex justify-center">
            <Image src={iroha} alt="ねこいろ" width={200} height={200} />
          </div>
          <h1 className="text-xl text-center mt-4">ねこいろ</h1>
        </div>

        <div className="flex flex-col items-center mb-8">
          <div className="flex justify-center">
            <Image src={yururi} alt="ゆるり" width={200} height={200} />
          </div>
          <h1 className="text-xl text-center mt-4">ゆるり</h1>
        </div>
      </section>
    </>
  );
}
