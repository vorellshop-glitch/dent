import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Landing } from "./screens/Landing";
import { Desktop } from "./screens/Desktop";
import { RadicalLanding } from "./screens/RadicalLanding";

const App = (): JSX.Element => {
  // Allow switching views via query parameters (e.g., ?page=desktop, ?page=landing, ?page=radical)
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page") || params.get("v");

  if (page === "desktop" || page === "legacy") {
    return <Desktop />;
  }

  if (page === "landing" || page === "luxury") {
    return <Landing />;
  }

  return <RadicalLanding />;
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
