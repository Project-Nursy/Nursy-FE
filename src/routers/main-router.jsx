import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import MainLayout from '../layout/MainLayout';
import CommonLayout from '../layout/CommonLayout';
import SignUpPage from '../pages/SignUpPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    index: true,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
    index: true,
  },
  {
    path: '/main',
    element: <MainLayout />,
    children: [
      {
        path: '', // 기본 경로, 즉 /main
        element: <MainPage />, // MainPage를 Outlet으로 렌더링
      },
    ],
  },
  {
    path: '/ward',
    element: <CommonLayout />,
    children: [{}, {}, {}],
  },
]);
export default router;
