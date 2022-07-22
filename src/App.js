import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Convertoon from './pages/Convertoon';
import ModifyText from './pages/ModifyText';
import { ImgInfoProvider } from './store/ImgInfo';

function App() {
  return (
    <ImgInfoProvider>
      <Router>
        <Routes>
          <Route path="/convertoon" element={<Convertoon />} />
          <Route path="/modify-text" element={<ModifyText />} />
        </Routes>
      </Router>
    </ImgInfoProvider>
  );
}

export default App;
