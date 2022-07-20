import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Convertoon from './pages/Convertoon';
import ModifyText from './pages/ModifyText';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/convertoon" element={<Convertoon />} />
        <Route path="/modify-text" element={<ModifyText />} />
      </Routes>
    </Router>
  );
}

export default App;
