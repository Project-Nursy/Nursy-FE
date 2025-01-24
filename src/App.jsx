// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import SignUpPage from './pages/SignUpPage';
// import MainPage from './pages/MainPage';
// import Header from './components/Header';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/home" element={<MainPage />} />
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import mainRouter from './routers/main-router';
import { UserProvider } from './contexts/UserContext';
function App() {
  //const [welcomeMessage, setWelcomeMessage] = useState('');

  return (
    // <Router>
    //   <Header welcomeMessage={welcomeMessage} setWelcomeMessage={setWelcomeMessage} />
    //   <Routes>
    //     <Route path="/home" element={<MainPage setWelcomeMessage={setWelcomeMessage} />} />
    //     <Route path="/" element={<LoginPage />} />
    //     <Route path="/signup" element={<SignUpPage />} />
    //   </Routes>
    // </Router>
    <UserProvider>
      <RouterProvider router={mainRouter} />
    </UserProvider>
  );
}

export default App;
