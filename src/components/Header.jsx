// import { Link, useNavigate } from 'react-router-dom';
// import apiClient from '../api/axios';
// import { UserContext } from '../contexts/UserContext';
// import { useContext } from 'react';
// import { LogOut } from 'lucide-react';
// import { Button } from 'react-bootstrap';

// function Header() {
//   const navigate = useNavigate();
//   const { user, setUser } = useContext(UserContext);

//   const handleLogout = async () => {
//     try {
//       await apiClient.post('/auth/logout');
//       localStorage.removeItem('accessToken'); // JWT 제거
//       setUser(null);
//       navigate('/');
//     } catch (err) {
//       console.error('Logout failed:', err);
//     }
//   };

//   return (
//     <header className="bg-white shadow">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <Link to="/main" className="text-2xl font-bold text-indigo-600 hover:text-indigo-500 transition-colors">
//             Nursy
//           </Link>

//           {/* Navigation / User Section */}
//           <div className="flex items-center space-x-6">
//             {user ? (
//               <div className="flex items-center space-x-4">
//                 {/* User Greeting */}
//                 <span className="text-sm text-gray-600 font-medium">
//                   안녕하세요, <strong className="text-gray-800">{user}</strong>님
//                 </span>

//                 {/* Logout Button */}
//                 <Button
//                   onClick={handleLogout}
//                   variant="outline"
//                   size="sm"
//                   className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   aria-label="로그아웃"
//                 >
//                   <LogOut className="h-4 w-4 mr-2" />
//                   로그아웃
//                 </Button>
//               </div>
//             ) : (
//               <div className="flex items-center space-x-4">
//                 {/* Login Button */}
//                 <Button
//                   onClick={() => navigate('/login')}
//                   variant="outline"
//                   size="sm"
//                   className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus: ring-indigo-500"
//                   aria-label="로그인 페이지로 이동"
//                 >
//                   로그인
//                 </Button>

//                 {/* Sign Up Button */}
//                 <Button
//                   onClick={() => navigate('/signup')}
//                   variant="solid"
//                   size="sm"
//                   className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   aria-label="회원가입 페이지로 이동"
//                 >
//                   회원가입
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
import { Link, useNavigate } from 'react-router-dom';
import apiClient from '../api/axios';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import { LogOut } from 'lucide-react';
import { Button } from 'react-bootstrap';

function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await apiClient.post('/auth/logout');
      localStorage.removeItem('accessToken'); // JWT 제거
      setUser(null);
      navigate('/');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/main" className="text-3xl font-bold text-sky-600 hover:text-sky-500 transition-colors">
            Nursy
          </Link>

          {/* Navigation / User Section */}
          <div className="flex items-center space-x-6">
            {user ? (
              <div className="flex items-center space-x-4">
                {/* User Greeting */}
                <span className="text-sm text-gray-600 font-medium">
                  안녕하세요, <strong className="text-gray-800">{user}</strong>님
                </span>

                {/* Logout Button */}
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-sky-600 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  aria-label="로그아웃"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  로그아웃
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                {/* Login Button */}
                <Button
                  onClick={() => navigate('/login')}
                  variant="outline"
                  size="sm"
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-sky-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  aria-label="로그인 페이지로 이동"
                >
                  로그인
                </Button>

                {/* Sign Up Button */}
                <Button
                  onClick={() => navigate('/signup')}
                  variant="solid"
                  size="sm"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-sky-600 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  aria-label="회원가입 페이지로 이동"
                >
                  회원가입
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
