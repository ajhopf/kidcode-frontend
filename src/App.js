import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Course from './components/pages/Course';
import Registration from './components/pages/Registration';

import './styles/cadastro.css';
import './styles/curso.css';
import './styles/footer.css';
import './styles/header.css';
import './styles/style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseId" element={<Course />} />
        <Route path="/course/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
