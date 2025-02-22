import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PostDetail from "../containers/postDetail/PostDetail";
import Blog from "../containers/blog/Blog";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rotta con Layout Globale */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Blog />
            </MainLayout>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <MainLayout>
              <PostDetail />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
