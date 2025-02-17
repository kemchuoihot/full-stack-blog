// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
// import App from './App.jsx'
import HomePage from "./routes/HomePage.jsx";
import PostListPage from "./routes/PostListPage.jsx";
import Write from "./routes/Write.jsx";
import SingelPostPage from "./routes/SingelPostPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const root = document.getElementById("root");

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client={new QueryClient()}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostListPage />} />
            <Route path="/:slug" element={<SingelPostPage />} />
            <Route path="/write" element={<Write />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </ClerkProvider>
    <ToastContainer position="bottom-right" />
  </BrowserRouter>
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
