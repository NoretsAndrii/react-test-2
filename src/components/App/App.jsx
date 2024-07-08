import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import "./App.css";
import { Suspense } from "react";
import GameDetalPage from "../../pages/GameDetalPage/GameDetalPage";

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/:gameId" element={<GameDetalPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
