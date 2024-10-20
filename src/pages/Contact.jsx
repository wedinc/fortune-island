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
    console.log("Form data submitted: ", formData);
  };

  return (
    <div className="min-h-screen bg-amber-100 text-foreground">
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl text-amber-950 font-bold">株式会社ヒト</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:underline text-amber-950">
                  ホーム
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline text-amber-950">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-16">
        <h1 className="text-3xl font-bold text-center mb-8">お問い合わせ</h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
        >
          <div className="form-group mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              お名前:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              メールアドレス:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2"
            >
              メッセージ:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="form-group text-center">
            <button
              type="submit"
              className="bg-primary text-primary-foreground p-4 rounded-lg shadow-md hover:underline"
            >
              送信
            </button>
          </div>
        </form>
      </main>
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 株式会社ヒト. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
