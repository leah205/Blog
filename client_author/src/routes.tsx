import App from "./App";
import PostPage from "./components/PostPage";
import PostsPage from "./components/PostsPage";
import SigninPage from "./components/SigninPage";
import ErrorPage from "./components/ErrorPage";
import NotFoundPage from "./components/NotFoundPage";
import DraftsPage from "./components/DraftsPage";
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
        element={<Navigate to="posts" />}
        errorElement={<ErrorPage />}
      />

      <Route path="posts">
        <Route
          index
          element={<PostsPage />}
          errorElement={<ErrorPage />}
        ></Route>
        <Route path="drafts" element={<DraftsPage />}></Route>
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

      <Route path="*" element={<NotFoundPage />}></Route>
    </Route>,
  ),
);

export default router;
