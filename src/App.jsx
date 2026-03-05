import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports"

function App() {
  return (
    <BrowserRouter>

     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;