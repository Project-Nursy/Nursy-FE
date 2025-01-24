import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api/axios';
import { UserContext } from '../contexts/UserContext';

function LoginPage() {
  const [form, setForm] = useState({ userIdentifier: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post('/auth/login', form);
      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken); // JWT 저장
      setError('');

      navigate('/main'); // 로그인 후 메인 페이지로 이동
    } catch (err) {
      setError(err.response?.data || '로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    // <div style={{ maxWidth: '400px', margin: '50px auto' }}>
    //   <h2>Login</h2>
    //   {error && <p style={{ color: 'red' }}>{error}</p>}
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>User Identifier</label>
    //       <input type="text" name="userIdentifier" value={form.userIdentifier} onChange={handleChange} required />
    //     </div>
    //     <div>
    //       <label>Password</label>
    //       <input type="password" name="password" value={form.password} onChange={handleChange} required />
    //     </div>
    //     <button type="submit">Login</button>
    //   </form>
    // </div>

    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-6xl font-extrabold text-sky-600 hover:text-sky-500 transition-colors">
            Nursy
          </h2>
          {/* <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">로그인</h2> */}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                사용자 이름
              </label>
              <input
                id="username"
                name="userIdentifier"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
                placeholder="사용자 이름"
                value={form.userIdentifier}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
                placeholder="비밀번호"
                value={form.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              로그인
            </button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {/* <div>
              <button
                //onClick={() => signIn("naver", { callbackUrl: "/" })}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                네이버로 로그인
              </button>
            </div>
            <div>
              <button
                //onClick={() => signIn("kakao", { callbackUrl: "/" })}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                카카오로 로그인
              </button>
            </div>*/}
          </div>
        </div>
        <div>
          <button
            onClick={() => navigate('/signup')}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
