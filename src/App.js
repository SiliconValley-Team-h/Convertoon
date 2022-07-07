import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Extract from "./pages/Extract";
import Save from "./pages/Save";
import Translate from "./pages/Translate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/extract" element={<Extract />} />
        <Route path="/save" element={<Save />} />
        <Route path="/translate" element={<Translate />} />
      </Routes>
    </Router>
  );
}

export default App;