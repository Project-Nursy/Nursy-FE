import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
