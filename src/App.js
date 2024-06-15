import './App.css';
import Home from './components/Home';
import Interface from './components/Interface';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/interface" element={<Interface />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


