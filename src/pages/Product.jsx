// こちらは、/product　プロダクト紹介ページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();

  return (
    <center>
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Image
              src="https://wed.company/img/wed.svg"
              alt="企業ロゴ"
              width={40}
              height={40}
            />
            <h1 className="text-2xl font-bold">株式会社HelloWork</h1>
          </div>
        </div>

        <h1 className="text-2xl font-bold">
          <br></br>
          <br></br>
          <br></br>
          〜過去にHelloWorkを利用していたお客様の声〜
        </h1>

        <br></br>
        <br></br>
        <h1> HelloWorkを利用したAさん</h1>

        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrhTmiYL06um5JVH9MsMaj91eQiDmMXlb-LdieJxTqKFA7elFCsSVMdU4a6jjv-1Ineo&usqp=CAU"
          width={200}
          height={500}
        />
        <p>HelloWorkさんに親身に寄り添ってもらえたおかげで、</p>
        <p>私は、現在建設会社に就職し、日々充実した社会生活を</p>
        <p>過ごしています。Hello Workさんありがとうございました。</p>
        <br></br>
        <h1> Aさんの職場の様子（完成済み）</h1>

        <Image
          src="https://u-aizu.ac.jp/img/page/intro/img_campus_map_pic01.jpg"
          width={500}
          height={500}
        />

        <br></br>
        <br></br>
        <h1> HelloWorkを利用したBさん</h1>

        <Image
          src="https://kotonohaworks.com/free-icons/wp-content/uploads/kkrn_icon_user_2.png"
          width={200}
          height={500}
        />

        <p>HelloWorkさんに親身に寄り添ってもらえたおかげで、</p>
        <p>私は、現在ジムトレーナーになり、日々充実した社会生活を</p>
        <p>過ごしています。Hello Workさんありがとうございました。</p>
        <br></br>
        <h1> Bさんの職場の様子</h1>
        <Image
          src="https://u-aizu.ac.jp/img/page/intro/img_campus_map_pic07.jpg"
          width={500}
          height={500}
        />
        <br></br>
        <br></br>
        <h1> HelloWorkを利用したCさん</h1>
        <Image
          src="https://kotonohaworks.com/free-icons/wp-content/uploads/kkrn_icon_user_5.png"
          width={200}
          height={500}
        />
        <p>HelloWorkさんに親身に寄り添ってもらえたおかげで、</p>
        <p>私は、現在カフェの店員になり、日々充実した社会生活を</p>
        <p>過ごしています。Hello Workさんありがとうございました。</p>
        <br></br>
        <h1> Cさんの職場の様子</h1>
        <Image
          src="https://u-aizu.ac.jp/kiyare_tana.JPG"
          width={500}
          height={500}
        />
        <br></br>
        <br></br>
        <h1 className="text-2xl font-bold">
          株式会社HelloWorkはこれからもお客様の人生を応援しています！！
        </h1>
      </header>
    </center>
  );
}
