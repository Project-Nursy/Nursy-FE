// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import apiClient from '../api/axios';

// function SignUpPage() {
//   const [form, setForm] = useState({
//     name: '',
//     userIdentifier: '',
//     password: '',
//     sex: '',
//     phoneNum: '',
//     birth: '',
//     email: '',
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await apiClient.post('/auth/join', form);
//       setError('');
//       navigate('/main'); // 회원가입 후 로그인 페이지로 이동
//     } catch (err) {
//       setError(err.response?.data || '회원가입에 실패했습니다. 다시 시도해주세요.');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '50px auto' }}>
//       <h2>Sign Up</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input type="text" name="name" value={form.name} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>User Identifier</label>
//           <input type="text" name="userIdentifier" value={form.userIdentifier} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" name="password" value={form.password} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Sex</label>
//           <input type="text" name="sex" value={form.sex} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Phone Number</label>
//           <input type="text" name="phoneNum" value={form.phoneNum} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Birth</label>
//           <input type="date" name="birth" value={form.birth} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Email</label>
//           <input type="email" name="email" value={form.email} onChange={handleChange} />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default SignUpPage;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api/axios';

function SignUpPage() {
  const [form, setForm] = useState({
    name: '',
    userIdentifier: '',
    password: '',
    sex: '',
    phoneNum: '',
    birth: '',
    email: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.post('/auth/join', form);
      setError('');
      navigate('/main'); // 회원가입 후 메인 페이지로 이동
    } catch (err) {
      setError(err.response?.data || '회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">회원가입</h2>
          {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                이름
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="이름"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="userIdentifier" className="sr-only">
                사용자 아이디
              </label>
              <input
                id="userIdentifier"
                name="userIdentifier"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="아이디"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="비밀번호"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="sex" className="sr-only">
                성별
              </label>
              <input
                id="sex"
                name="sex"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="성별"
                value={form.sex}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phoneNum" className="sr-only">
                전화번호
              </label>
              <input
                id="phoneNum"
                name="phoneNum"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="전화번호"
                value={form.phoneNum}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="birth" className="sr-only">
                생년월일
              </label>
              <input
                id="birth"
                name="birth"
                type="date"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="생년월일"
                value={form.birth}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="이메일"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              회원가입
            </button>
          </div>
        </form>
        <div>
          <button
            onClick={() => navigate('/')}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-sky-600 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            로그인 페이지로 이동
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
