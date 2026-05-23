import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-dark text-light min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
