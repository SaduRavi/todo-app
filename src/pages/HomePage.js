import React from "react";
import NavBar from "../components/home/NavBar";
import TodoList from "../components/home/TodoList";
import { logoutUser } from "../components/functions/UserLogout";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#D9D9D9",
      }}
    >
      <div style={{ position: "fixed", width: "100%" }}>
        <NavBar handleLogout={handleLogout} />
      </div>
      <div style={{ height: "100%", marginTop: "80px" }}>
        <TodoList />
      </div>
    </div>
  );
}
