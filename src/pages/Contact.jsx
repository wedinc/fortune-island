// こちらは、/contact 会社へのお問い合わせページです。

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>お問い合わせ</h1>
      <form action="" method="get">
        <div>
          <label for="name">Enter your name: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <input type="submit" value="Subscribe!" />
        </div>
      </form>
    </div>
  );
}
