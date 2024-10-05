// ページを増やした時は、このファイルを編集してください

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import Product from "./pages/Product";
import Company from "./pages/Company";
import Recruitment from "./pages/Recruitment";
import Contact from "./pages/Contact";
import News from "./pages/News";
import News1 from "./pages/News1";
import News2 from "./pages/News2";
import News3 from "./pages/News3";
import Members from "./pages/Members";

const router = createBrowserRouter([
  //   あなたが指定したいpathを、path: "/example"の部分に指定してください。
  //   あなたが指定したいコンポーネントを、element: <Example />の部分に指定してください。
  //   import Example from "./pages/Example";も忘れずに。
  // 　{
  //   path: "/example",
  //   element: <Example />,
  // 　},
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/company",
    element: <Company />,
  },
  {
    path: "/recruitment",
    element: <Recruitment />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "news/1",
    element: <News1 />,
  },
  {
    path: "news/2",
    element: <News2 />,
  },
  {
    path: "news/3",
    element: <News3 />,
  },
  {
    path: "/members",
    element: <Members />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
