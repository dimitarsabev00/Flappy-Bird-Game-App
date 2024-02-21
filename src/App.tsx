import React from "react";
import "./App.scss";
import Game from "./components/Game";

const App: React.FC = () => {
  return (
    <div>
      <h1>Flappy Bird Game App</h1>
      <p>Tap, click or space!</p>
      <Game />
    </div>
  );
};

export default App;
