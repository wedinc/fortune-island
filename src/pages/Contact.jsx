//こちらは、/contact 会社へのお問い合わせページです。

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <form action="" method="get" className="max-w-wd mx-auto mt-8">
      <div className="text-saddlebrow">
        <label htmlFor="name">Enter your name: </label>
        <input
          type="text"
          name="name"
          id="name"
          className="border border-indigo-600"
        />
      </div>
      <div className=".py-2">
        <label htmlFor="comment">Enter your comment: </label>
        <input
          type="text"
          name="comment"
          id="comment"
          className="border border-indigo-600"
        />
      </div>
      <div className="text-saddlebrow">
        <input
          type="submit"
          value="Submit"
          className="border border-indigo-600"
        />
      </div>
    </form>
    // <input
    //   className="border border-indigo-600"
    //   type="text"
    //   name="name"
    //   id="name"
    // />
  );
}
