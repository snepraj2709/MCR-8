import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<EventDetail />} />
      </Routes>
    </div>
  );
}
