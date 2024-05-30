import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <p>Page not found 😢</p>
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
}
