// こちらは、/news/1 のページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function News() {
  const navigate = useNavigate();

  return (
    <div>
      <a href="/news" className="hover:underline">
        一覧へ戻る
      </a>
      <br />

      <br />
      <h2>PM体験とプログラミング開発を学ぶ2daysが開催されました!</h2>
      <br />
      <Image
        src="https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG4_7QpR89DnbhG4YLv-247oP-exZ-24UX98A_XultMjYf1aomSn04JRUAiCk6xkoxW3KXzGko9lg8TfgvmOBzloo87I8iWcPkN_XkWGPX8c_aE4-W9uPEB76D8ZD-3inzFlfkK3o4dD7k4In05KtsC_LiJlOV258tTKjNtwKxI1RQ3DglMTuTp3wPNoJ7b3rMB5pR2CwhL23wmJWuSxEnNfVzmyM8XjjSgvFrvhP7I4O/DSC01009-Pano-scaled.jpg?errorImage=false"
        alt="aizubase"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <br />
      <p>
        2024年10月19日・20日の2日間、会津大生を対象としたイベントがAIZU-BASEにて開催されました。
        このイベントでは、13名の学生が集まり、PM体験をプログラミング開発を学びました。
        初日は企画説明と基礎講座、2日目は3,4人のグループを作り企業ホームページの作成を疑似体験しました。
        どのグループも個性のあるホームページを作成することができました!
      </p>
      <a href="/news/2" className="hover:underline">
        next→
      </a>
    </div>
  );
}
