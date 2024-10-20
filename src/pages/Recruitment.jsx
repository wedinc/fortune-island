// こちらは、/recruitment 採用活動ページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import xIcon from "../icons/x.png";
import { useNavigate } from "react-router-dom";

export default function Recruitment() {
  // const navigate = useNavigate();

  return (
    <div>
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Image
              src="https://wed.company/img/wed.svg"
              alt="企業ロゴ"
              width={40}
              height={60}
            />
            <h1 className="text-2xl font-bold">株式会社HalloWork</h1>
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

      <div className="content mx-2 p-10 m-auto">
        <h1 className="text-3xl font-semibold">採用情報</h1>
        <p className="text-xs pb-6 border-solid">
          現在弊社では一緒に働く仲間を募集中です
        </p>
        <h2 className="text-2xl font-semibold">募集内容</h2>
        <table className="table-fixed lleading-10 mx-10 my-2">
          <tr>
            <th className="p-4">職業内容</th>
            <td className="p-4">
              真剣な無職に寄り添い
              <br />
              または無職に寄り添われる
            </td>
          </tr>
          <tr>
            <th className="p-4">雇用形態</th>
            <td className="p-4">正社員</td>
          </tr>
          <tr>
            <th className="p-4">給与</th>
            <td className="p-4">成果により変動</td>
          </tr>
          <tr>
            <th className="p-4">勤務時間</th>
            <td className="p-4">未定</td>
          </tr>
          <tr>
            <th className="p-4">賞与</th>
            <td className="p-4">年一回</td>
          </tr>
          <tr>
            <th className="p-4">勤務地</th>
            <td className="p-4">採用後、決定いたします</td>
          </tr>
          <tr>
            <th className="p-4">福利厚生</th>
            <td className="p-4">なし</td>
          </tr>
        </table>
        <h2 className="text-2xl font-semibold">募集要項</h2>
        <table className="table-fixed lleading-10 mx-10 my-2">
          <tr>
            <th className="p-4">応募資格</th>
            <td className="p-4">日本在住</td>
          </tr>
          <tr>
            <th className="p-4">応募書類</th>
            <td className="p-4">
              1）履歴書 2）自己PR
              <br />
              ※直接書類をお送りください
            </td>
          </tr>
          <tr>
            <th className="p-4">勤務時間</th>
            <td className="p-4">未定</td>
          </tr>
          <tr>
            <th className="p-4">賞与</th>
            <td className="p-4">年一回</td>
          </tr>
          <tr>
            <th className="p-4">お問い合わせ</th>
            <td className="p-4">
              〒151-0051
              <br />
              東京都渋谷区千駄ヶ谷 4-14-4 SKビル千駄ヶ谷 2F
            </td>
          </tr>
        </table>
      </div>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">株式会社〇〇</h3>
            <p>〒151-0051</p>
            <p>東京都渋谷区千駄ヶ谷 4-14-4 SKビル千駄ヶ谷 2F</p>
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
          <div>
            <h3 className="text-lg font-semibold mb-4">ソーシャルメディア</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/wedinc_official" aria-label="x">
                <Image src={xIcon} alt="x" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 text-center">
          <p>&copy; 2024 株式会社〇〇. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
