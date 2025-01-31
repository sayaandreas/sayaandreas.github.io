import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./App.tsx";

const removePreloader = () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("hidden");
    setTimeout(() => preloader.remove(), 500);
  }
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

removePreloader();
