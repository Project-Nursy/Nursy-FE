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
      await apiClient.post('/join', form);
      setError('');
      navigate('/'); // 회원가입 후 로그인 페이지로 이동
    } catch (err) {
      setError(err.response?.data || '회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>User Identifier</label>
          <input type="text" name="userIdentifier" value={form.userIdentifier} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Sex</label>
          <input type="text" name="sex" value={form.sex} onChange={handleChange} />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" name="phoneNum" value={form.phoneNum} onChange={handleChange} />
        </div>
        <div>
          <label>Birth</label>
          <input type="date" name="birth" value={form.birth} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
