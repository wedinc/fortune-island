// こちらは、/company 会社紹介のページです。

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Company() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="text-center text-5xl mb-32">株式会社Hello Work</div>

      <div className="mx-96 mb-7">
        <b>社名</b>
      </div>
      <div className="mx-96 text-2xl mb-7">Hello Work</div>
      <p className="mx-96 mb-32">
        我々株式会社Hello Workは無職4人が集まり結成した。
        社名にはもう一人たりとも失業で苦しむことのないように就職を応援したいという思いを込められている。
      </p>

      <div className="mx-96 mb-7">
        <b>態度</b>
      </div>
      <div className="mx-96 text-2xl mb-7">誰一人取り残さない</div>
      <p className="mx-96 mb-32">
        全員が無理のない勤労生活を送ることができるように社員全員全力でサポートする。
      </p>

      <div className="mx-96 mb-7">
        <b>姿勢</b>
      </div>
      <div className="mx-96 text-2xl mb-5">求職者ファースト</div>
      <p className="mx-96 mb-7">お客様の最大利益の実現を目指します。</p>
      <div className="mx-96 text-2xl mb-5">夢を諦めない</div>
      <p className="mx-96 mb-7">
        全員がやりたい仕事につけるように全力でサポートします。
      </p>
      <div className="mx-96 text-2xl mb-5">世界を広げよう</div>
      <p className="mx-96 mb-32">幅広い職業の選択肢を提供します。</p>

      <div className="mx-96 mb-7">
        <b>精神</b>
      </div>
      <div className="mx-96 text-2xl mb-5">
        求職者一人一人への配慮を忘れない会社でありたい
      </div>
      <p className="mx-96 mb-32">
        お客様がお越しいただいた時に心地よく感じる環境を作ります。
      </p>

      <div className="mx-96 mb-7">
        <b>会社概要</b>
      </div>
      <div className="mx-96">設立</div>
      <div className="mx-96 mb-7">2024年10月20日</div>
      <div className="mx-96">会社名</div>
      <div className="mx-96 mb-7">株式会社Hello Work</div>
      <img
        className="h-96 w-96 mx-96"
        src="https://u-aizu.ac.jp/img/page/others/access_map02.png"
      />
    </div>
  );
}
