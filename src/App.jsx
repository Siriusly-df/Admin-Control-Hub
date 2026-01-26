import React from "react";
import Sidebar from "./components/Sidebar";
import "./style.css"; 

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <h1>Главный контент</h1>
      </main>
    </div>
  );
}

export default App;