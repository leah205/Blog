import App from "./App";
import AppLayout from "./components/AppLayout";
import AboutPage from "./components/AboutPage";
import PostPage from "./components/PostPage";
import PostsPage from "./components/PostsPage";
import SigninPage from "./components/SigninPage";
import SignupPage from "./components/SignupPage";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="about" />} />
        <Route index path="about" element={<AboutPage />}></Route>
        <Route path="posts">
          <Route index element={<PostsPage />}></Route>
          <Route path=":postid" element={<PostPage />}></Route>
        </Route>
        <Route path="signin" element={<SigninPage />}></Route>
        <Route path="signup" element={<SignupPage />}></Route>
      </Route>
    </Route>,
  ),
);

export default router;
