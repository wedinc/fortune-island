// こちらは、/news/3 のページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function News3() {
  const navigate = useNavigate();

  return (
    <div>
      <a href="/news" className="hover:underline">
        一覧へ戻る
      </a>
      <br />
      <a href="/news/2" className="hover:underline">
        ←prev
      </a>
      <br />
      <br />
      <h2>蒼翔祭が開催されました!</h2>
      <br />
      <Image
        src="https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG7S54aaSIykKDJkY5zlm_T8CQSBaCwg0nptvs0tj4rQe9AUMvmjN_1rFFZFFZtZQLy_UBdrvzaX00Xfrsz2aEYKFkRbvWZRXd_SwQD5XueVyRpXI8zagw7M7s6pqkyURoNcVKl-QmMD_AjXqkmJQGDeS5QZd1zcnjSAsR0jc4DiIiC-efUitQH7sCODlR7vRwncf4AX8ov-K828FiMDZBqZoEnvj1jnGbUMK1c7--18M/aizuuniv-scaled.jpg?errorImage=false"
        alt="univ"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <br />
      <p>
        2024年10月12日、13日の2日間、会津大学の学園祭である蒼翔祭が開催されました。
        多くのサークルによる出店や発表、ほかにも様々な企画が開催され、地域の方もたくさん来てくれました!
        また、研究棟ではオープンラボも同時開催され、誰でも研究室を見学することができました。
      </p>
    </div>
  );
}
