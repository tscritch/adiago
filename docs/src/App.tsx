import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { Home } from './pages/home';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="docs/:pageName" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
