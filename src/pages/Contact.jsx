// こちらは、/contact 会社へのお問い合わせページです。

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // フォーム送信ロジックをここに追加
    console.log("Form data submitted: ", formData);
  };

  return (
    <div className="contact-container">
      <h1>お問い合わせ</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">お名前:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">メールアドレス:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">メッセージ:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">送信</button>
        </div>
      </form>
    </div>
  );
}
