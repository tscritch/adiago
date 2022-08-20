import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { Home } from './pages/home';
import { PageNotFound } from './pages/page-not-found';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="docs/:pageName" element={<Layout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
