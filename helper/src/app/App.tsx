import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../pages/homePage/homePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Если потом добавишь новые страницы, просто добавь Route */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
