import { useNavigate } from 'react-router-dom';

export default function SideBar({ ward }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 h-screen p-6 shadow-lg w-60">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-sky-600">{ward?.wardName || '병동 이름 없음'}</h2>
        <p className="text-sm text-gray-600 mt-1">{ward?.hospitalName}</p>
        <p className="text-sm text-gray-600 mt-1">{ward?.location}</p>
        <p className="text-sm text-gray-600 mt-1">환영합니다!</p>
      </div>
      <ul className="space-y-4">
        <li>
          <button
            onClick={() => navigate('/ward', { state: { ward } })}
            className="w-full text-left px-4 py-2 bg-white rounded-lg shadow-md hover:bg-sky-100 transition-colors text-gray-700 font-medium"
          >
            간호사 정보
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate('/ward/schedule', { state: { ward } })}
            className="w-full text-left px-4 py-2 bg-white rounded-lg shadow-md hover:bg-sky-100 transition-colors text-gray-700 font-medium"
          >
            근무표 생성
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate('/ward/setting', { state: { ward } })}
            className="w-full text-left px-4 py-2 bg-white rounded-lg shadow-md hover:bg-sky-100 transition-colors text-gray-700 font-medium"
          >
            Settings
          </button>
        </li>
      </ul>
    </div>
  );
}
