import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";

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
