import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log(PUBLISHABLE_KEY);
const fetchData = async () => {
  const res = await fetch(
    "https://financial-track-server-production.up.railway.app/"
  );

  const data = await res.json();
  try {
    console.log("your data ", data.msg);
  } catch (error) {
    console.log(error);
  }
};

fetchData();

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <meta name="description" content="meniem financial tracker" />
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
