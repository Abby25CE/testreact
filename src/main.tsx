import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { LoginForm } from "./LoginForm";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoginForm
      onSubmit={function (data: { username: string; password: string }): void {
        throw new Error("Function not implemented.");
      }}
    />
  </StrictMode>
);
