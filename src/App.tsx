import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

export default function App() {
  return (
    <div className="dark:bg-dark dark:text-light bg-light text-dark min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
