import React, { useState } from 'react';

const UserRegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // フォームのデフォルトの送信を防ぐ

    // POSTリクエストを送信する
    const response = await fetch('http://localhost:8080/create/user', { // サーバーのURLを指定
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // フォームデータを送信するためのヘッダー
      },
      body: new URLSearchParams({ // フォームデータをURLエンコードする
        name,
        email,
        password,
      }),
    });

    if (response.ok) {
      const user = await response.json(); // サーバーからのレスポンスをJSON形式で取得
      console.log('User created:', user);
    } else {
      console.error('Failed to create user:', response.statusText);
    }

    // フォームのリセット
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className='text-center'>User Registration</h1>
      <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistrationForm;
