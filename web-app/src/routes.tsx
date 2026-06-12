import App from "./App";
import AboutPage from "./components/AboutPage";
import PostPage from "./components/PostPage";
import PostsPage from "./components/PostsPage";
import SigninPage from "./components/SigninPage";
import SignupPage from "./components/SignupPage";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route
        index
        element={<Navigate to="about" />}
        errorElement={<ErrorPage />}
      />
      <Route
        index
        path="about"
        element={<AboutPage />}
        errorElement={<ErrorPage />}
      ></Route>
      <Route path="posts">
        <Route
          index
          element={<PostsPage />}
          errorElement={<ErrorPage />}
        ></Route>
        <Route
          path=":postid"
          element={<PostPage />}
          errorElement={<ErrorPage />}
        ></Route>
      </Route>
      <Route
        path="signin"
        element={<SigninPage />}
        errorElement={<ErrorPage />}
      ></Route>
      <Route
        path="signup"
        element={<SignupPage />}
        errorElement={<ErrorPage />}
      ></Route>
    </Route>,
  ),
);

export default router;
