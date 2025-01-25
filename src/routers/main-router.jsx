import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
// import MainPage from '../pages/MainPage';
import MainLayout from '../layout/MainLayout';
import CommonLayout from '../layout/CommonLayout';
import SignUpPage from '../pages/SignUpPage';
import SelectWardPage from '../pages/SelectWardPage';
import WardMainPage from '../pages/WardMainPage';
import WardSettingsPage from '../pages/WardSettingsPage';
import GenerateSchedulePage from '../pages/GenerateSchedulePage';

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
        element: <SelectWardPage />, // MainPage를 Outlet으로 렌더링
      },
    ],
  },
  {
    path: '/ward',
    element: <CommonLayout />,
    children: [
      {
        path: '', // 기본 경로, 즉 /ward
        element: <WardMainPage />, // 간호사 관리 페이지
      },
      {
        path: 'setting',
        element: <WardSettingsPage />,
      },
      {
        path: 'generate',
        element: <GenerateSchedulePage />,
      },
    ],
  },
]);
export default router;
