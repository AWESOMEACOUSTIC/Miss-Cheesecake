import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Cheesecakes from './pages/Cheesecakes.jsx'
import NotFound from './pages/NotFound.jsx';
import Layout from './components/Layout'
import Loader from './pages/Loader.jsx';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cheesecakes" element={<Cheesecakes />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="loader" element={<Loader />} />
        </Route>
      </Routes>
    </div>
  );
}
