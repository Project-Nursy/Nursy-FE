// export default function WardMainPage() {
//   return (
//     <div>
//       <h1>Ward Main Page</h1>
//     </div>
//   );
// }
// import { useState, useEffect } from 'react';
// import apiClient from '../api/axios';
// import { Button } from 'react-bootstrap';
// import { Trash, Plus } from 'lucide-react';

// function WardMainPage({ ward }) {
//   const [nurses, setNurses] = useState([]);
//   const [newNurse, setNewNurse] = useState({ name: '', level: '', team: '' });

//   useEffect(() => {
//     // 간호사 목록 조회
//     const fetchNurses = async () => {
//       try {
//         const response = await apiClient.get(`/ward-nurse/list/${ward?.wardId}`);
//         setNurses(response.data);
//       } catch (err) {
//         console.error('Error fetching nurses:', err);
//       }
//     };
//     fetchNurses();
//   }, [ward?.wardId]);

//   const handleAddNurse = async () => {
//     try {
//       const response = await apiClient.post('/ward-nurse/add', newNurse);
//       setNurses((prevNurses) => [...prevNurses, response.data]);
//       setNewNurse({ name: '', level: '', team: '' });
//     } catch (err) {
//       console.error('Error adding nurse:', err);
//     }
//   };

//   const handleDeleteNurse = async (nurseId) => {
//     try {
//       await apiClient.delete(`/ward-nurse/delete/${nurseId}`);
//       setNurses((prevNurses) => prevNurses.filter((nurse) => nurse.nurseId !== nurseId));
//     } catch (err) {
//       console.error('Error deleting nurse:', err);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold text-sky-600">간호사 목록</h2>

//       <div className="my-4">
//         <h3 className="text-lg font-semibold">새 간호사 추가</h3>
//         <input
//           type="text"
//           placeholder="이름"
//           value={newNurse.name}
//           onChange={(e) => setNewNurse({ ...newNurse, name: e.target.value })}
//           className="mr-2 p-2 border rounded"
//         />
//         <input
//           type="number"
//           placeholder="레벨"
//           value={newNurse.level}
//           onChange={(e) => setNewNurse({ ...newNurse, level: e.target.value })}
//           className="mr-2 p-2 border rounded"
//         />
//         <input
//           type="text"
//           placeholder="팀"
//           value={newNurse.team}
//           onChange={(e) => setNewNurse({ ...newNurse, team: e.target.value })}
//           className="mr-2 p-2 border rounded"
//         />
//         <Button onClick={handleAddNurse} variant="outline" className="mt-2">
//           <Plus className="h-4 w-4 mr-2" /> 간호사 추가
//         </Button>
//       </div>

//       <div className="space-y-4">
//         {nurses.map((nurse) => (
//           <div key={nurse.nurseId} className="flex justify-between items-center p-4 bg-white shadow-md rounded">
//             <div>
//               <h4 className="text-lg">{nurse.name}</h4>
//               <p className="text-sm text-gray-600">{`레벨: ${nurse.level}, 팀: ${nurse.team}`}</p>
//             </div>
//             <Button onClick={() => handleDeleteNurse(nurse.nurseId)} variant="outline" className="text-red-500">
//               <Trash className="h-4 w-4 mr-2" /> 삭제
//             </Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default WardMainPage;

// import { useState, useEffect } from 'react';
// import apiClient from '../api/axios';
// import { Button } from 'react-bootstrap';
// import { Trash, Plus } from 'lucide-react';

// function WardMainPage({ ward }) {
//   const [nurses, setNurses] = useState([]);
//   const [newNurse, setNewNurse] = useState({ name: '', level: '', team: '' });

//   useEffect(() => {
//     // 간호사 목록 조회
//     const fetchNurses = async () => {
//       try {
//         const response = await apiClient.get(`/ward-nurse/list/${ward?.wardId}`);
//         setNurses(response.data);
//       } catch (err) {
//         console.error('Error fetching nurses:', err);
//       }
//     };
//     if (ward?.wardId) {
//       fetchNurses();
//     }
//   }, [ward?.wardId]);

//   const handleAddNurse = async () => {
//     if (!newNurse.name || !newNurse.level || !newNurse.team) {
//       console.error('모든 필드를 입력해주세요.');
//       return;
//     }

//     const nurseData = {
//       ...newNurse,
//       wardId: ward?.wardId, // wardId 추가
//     };

//     try {
//       await apiClient.post('/ward-nurse/add', nurseData);
//       setNurses((prevNurses) => [
//         ...prevNurses,
//         { ...nurseData, nurseId: Date.now() }, // 임시로 생성된 nurseId
//       ]);
//       setNewNurse({ name: '', level: '', team: '' });
//     } catch (err) {
//       console.error('Error adding nurse:', err);
//     }
//   };

//   const handleDeleteNurse = async (nurseId) => {
//     try {
//       await apiClient.delete('/ward-nurse/remove', {
//         data: { nurseId, wardId: ward?.wardId },
//       });
//       setNurses((prevNurses) => prevNurses.filter((nurse) => nurse.nurseId !== nurseId));
//     } catch (err) {
//       console.error('Error deleting nurse:', err);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold text-sky-600">간호사 목록</h2>

//       <div className="my-4">
//         <h3 className="text-lg font-semibold">새 간호사 추가</h3>
//         <input
//           type="text"
//           placeholder="이름"
//           value={newNurse.name}
//           onChange={(e) => setNewNurse({ ...newNurse, name: e.target.value })}
//           className="mr-2 p-2 border rounded"
//         />
//         <input
//           type="number"
//           placeholder="레벨"
//           value={newNurse.level}
//           onChange={(e) => setNewNurse({ ...newNurse, level: e.target.value })}
//           className="mr-2 p-2 border rounded"
//         />
//         <input
//           type="text"
//           placeholder="팀"
//           value={newNurse.team}
//           onChange={(e) => setNewNurse({ ...newNurse, team: e.target.value })}
//           className="mr-2 p-2 border rounded"
//         />
//         <Button onClick={handleAddNurse} variant="outline" className="mt-2">
//           <Plus className="h-4 w-4 mr-2" /> 간호사 추가
//         </Button>
//       </div>

//       <div className="space-y-4">
//         {nurses.map((nurse) => (
//           <div key={nurse.nurseId} className="flex justify-between items-center p-4 bg-white shadow-md rounded">
//             <div>
//               <h4 className="text-lg">{nurse.name}</h4>
//               <p className="text-sm text-gray-600">{`레벨: ${nurse.level}, 팀: ${nurse.team}`}</p>
//             </div>
//             <Button onClick={() => handleDeleteNurse(nurse.nurseId)} variant="outline" className="text-red-500">
//               <Trash className="h-4 w-4 mr-2" /> 삭제
//             </Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default WardMainPage;
// import { useOutletContext } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import apiClient from '../api/axios';
// import { Button } from 'react-bootstrap';
// import { Trash, Plus } from 'lucide-react';

// function WardMainPage() {
//   const { ward } = useOutletContext(); // context에서 ward 정보 받기
//   const [nurses, setNurses] = useState([]);
//   const [newNurse, setNewNurse] = useState({ name: '', level: '', team: '' });

//   useEffect(() => {
//     // 간호사 목록 조회
//     const fetchNurses = async () => {
//       try {
//         const response = await apiClient.get(`/ward-nurse/list/${ward?.wardId}`);
//         setNurses(response.data);
//       } catch (err) {
//         console.error('Error fetching nurses:', err);
//       }
//     };
//     if (ward?.wardId) {
//       fetchNurses();
//     }
//   }, [ward?.wardId]);

//   const handleAddNurse = async () => {
//     if (!newNurse.name || !newNurse.level || !newNurse.team) {
//       console.error('모든 필드를 입력해주세요.');
//       return;
//     }

//     const nurseData = {
//       ...newNurse,
//       wardId: ward?.wardId, // wardId 추가
//     };

//     try {
//       await apiClient.post('/ward-nurse/add', nurseData);
//       setNurses((prevNurses) => [
//         ...prevNurses,
//         { ...nurseData, nurseId: Date.now() }, // 임시로 생성된 nurseId
//       ]);
//       setNewNurse({ name: '', level: '', team: '' });
//     } catch (err) {
//       console.error('Error adding nurse:', err);
//     }
//   };

//   const handleDeleteNurse = async (nurseId) => {
//     try {
//       await apiClient.delete('/ward-nurse/remove', {
//         data: { nurseId, wardId: ward?.wardId },
//       });
//       setNurses((prevNurses) => prevNurses.filter((nurse) => nurse.nurseId !== nurseId));
//     } catch (err) {
//       console.error('Error deleting nurse:', err);
//     }
//   };

//   return (
//     <div className="p-4">
//       {/* <div className="my-4">
//         <h3 className="text-lg font-semibold">새 간호사 추가</h3>
//         <input
//           type="text"
//           placeholder="이름"
//           value={newNurse.name}
//           onChange={(e) => setNewNurse({ ...newNurse, name: e.target.value })}
//           className="mr-2 p-2 border rounded"
//         />
//         <input
//           type="number"
//           placeholder="레벨"
//           value={newNurse.level}
//           onChange={(e) => setNewNurse({ ...newNurse, level: e.target.value })}
//           className="mr-2 p-2 border rounded"
//         />
//         <input
//           type="text"
//           placeholder="팀"
//           value={newNurse.team}
//           onChange={(e) => setNewNurse({ ...newNurse, team: e.target.value })}
//           className="mr-2 p-2 border rounded"
//         />
//         <Button onClick={handleAddNurse} variant="outline" className="mt-2">
//           <Plus className="h-4 w-4 mr-2" /> 간호사 추가
//         </Button>
//       </div> */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h3 className="text-xl font-semibold text-sky-600 mb-4">새 간호사 추가</h3>
//         <form onSubmit={handleAddNurse} className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <input
//               type="text"
//               placeholder="이름"
//               value={newNurse.name}
//               onChange={(e) => setNewNurse({ ...newNurse, name: e.target.value })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
//               required
//             />
//             <input
//               type="number"
//               placeholder="레벨"
//               value={newNurse.level}
//               onChange={(e) => setNewNurse({ ...newNurse, level: e.target.value })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
//               required
//             />
//             <input
//               type="text"
//               placeholder="팀"
//               value={newNurse.team}
//               onChange={(e) => setNewNurse({ ...newNurse, team: e.target.value })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
//               required
//             />
//           </div>
//           <button
//             onClick={handleAddNurse}
//             type="submit"
//             className="flex items-center justify-center px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
//           >
//             <Plus className="h-5 w-5 mr-2" />
//             간호사 추가
//           </button>
//         </form>
//       </div>

//       {/* <div className="space-y-4">
//         <h2 className="text-xl font-semibold text-sky-600">간호사 목록</h2>
//         {nurses.map((nurse) => (
//           <div key={nurse.nurseId} className="flex justify-between items-center p-4 bg-white shadow-md rounded">
//             <div>
//               <h4 className="text-lg">{nurse.name}</h4>
//               <p className="text-sm text-gray-600">{`레벨: ${nurse.level}, 팀: ${nurse.team}`}</p>
//             </div>
//             <Button onClick={() => handleDeleteNurse(nurse.nurseId)} variant="outline" className="text-red-500">
//               <Trash className="h-4 w-4 mr-2" /> 삭제
//             </Button>
//           </div>
//         ))}
//       </div> */}
//       <div className="space-y-4">
//         <h2 className="text-xl font-semibold text-sky-600">간호사 목록</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {nurses.map((nurse) => (
//             <div
//               key={nurse.nurseId}
//               className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow"
//             >
//               <div className="flex-1">
//                 <h4 className="text-lg font-semibold">{nurse.name}</h4>
//                 <p className="text-sm text-gray-600">{`레벨: ${nurse.level}, 팀: ${nurse.team}`}</p>
//               </div>
//               <Button
//                 onClick={() => handleDeleteNurse(nurse.nurseId)}
//                 variant="outline"
//                 className="text-red-500 p-2 rounded-full hover:bg-red-50 transition"
//               >
//                 <Trash className="h-4 w-4" />
//               </Button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WardMainPage;
// import React, { useState, useEffect } from 'react';
// import { useOutletContext } from 'react-router-dom';
// import apiClient from '../api/axios';
// import { Trash, Plus } from 'lucide-react';

// export default function WardMainPage() {
//   const { ward } = useOutletContext();
//   const [nurses, setNurses] = useState([]);
//   const [newNurse, setNewNurse] = useState({ name: '', level: '', team: '' });

//   useEffect(() => {
//     const fetchNurses = async () => {
//       try {
//         const response = await apiClient.get(`/ward-nurse/list/${ward?.wardId}`);
//         setNurses(response.data);
//       } catch (err) {
//         console.error('Error fetching nurses:', err);
//       }
//     };
//     if (ward?.wardId) {
//       fetchNurses();
//     }
//   }, [ward?.wardId]);

//   const handleAddNurse = async (e) => {
//     e.preventDefault();
//     if (!newNurse.name || !newNurse.level || !newNurse.team) {
//       console.error('모든 필드를 입력해주세요.');
//       return;
//     }

//     try {
//       const response = await apiClient.post('/ward-nurse/add', {
//         ...newNurse,
//         wardId: ward?.wardId,
//       });
//       setNurses((prevNurses) => [...prevNurses, response.data]);
//       setNewNurse({ name: '', level: '', team: '' });
//     } catch (err) {
//       console.error('Error adding nurse:', err);
//     }
//   };

//   const handleDeleteNurse = async (nurseId) => {
//     try {
//       await apiClient.delete('/ward-nurse/remove', {
//         data: { nurseId, wardId: ward?.wardId },
//       });
//       setNurses((prevNurses) => prevNurses.filter((nurse) => nurse.nurseId !== nurseId));
//     } catch (err) {
//       console.error('Error deleting nurse:', err);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h2 className="text-2xl font-semibold text-sky-600 mb-2">{ward?.wardName || '병동 이름 없음'}</h2>
//         <p className="text-gray-600">{ward?.hospitalName}</p>
//         <p className="text-gray-600">{ward?.location}</p>
//       </div>

//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h3 className="text-xl font-semibold text-sky-600 mb-4">새 간호사 추가</h3>
//         <form onSubmit={handleAddNurse} className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <input
//               type="text"
//               placeholder="이름"
//               value={newNurse.name}
//               onChange={(e) => setNewNurse({ ...newNurse, name: e.target.value })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
//               required
//             />
//             <input
//               type="number"
//               placeholder="레벨"
//               value={newNurse.level}
//               onChange={(e) => setNewNurse({ ...newNurse, level: e.target.value })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
//               required
//             />
//             <input
//               type="text"
//               placeholder="팀"
//               value={newNurse.team}
//               onChange={(e) => setNewNurse({ ...newNurse, team: e.target.value })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="flex items-center justify-center px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
//           >
//             <Plus className="h-5 w-5 mr-2" />
//             간호사 추가
//           </button>
//         </form>
//       </div>

//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h3 className="text-xl font-semibold text-sky-600 mb-4">간호사 목록</h3>
//         <div className="space-y-4">
//           {nurses.map((nurse) => (
//             <div key={nurse.nurseId} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
//               <div>
//                 <h4 className="text-lg font-medium">{nurse.name}</h4>
//                 <p className="text-sm text-gray-600">{`레벨: ${nurse.level}, 팀: ${nurse.team}`}</p>
//               </div>
//               <button
//                 onClick={() => handleDeleteNurse(nurse.nurseId)}
//                 className="flex items-center justify-center p-2 text-red-500 hover:bg-red-100 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//               >
//                 <Trash className="h-5 w-5" />
//                 <span className="sr-only">삭제</span>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiClient from '../api/axios';
import { Button } from 'react-bootstrap';
import { Trash, Plus } from 'lucide-react';

function WardMainPage() {
  const { ward } = useOutletContext(); // context에서 ward 정보 받기
  const [nurses, setNurses] = useState([]);
  const [newNurse, setNewNurse] = useState({ name: '', level: '', team: '' });

  useEffect(() => {
    // 간호사 목록 조회
    const fetchNurses = async () => {
      try {
        const response = await apiClient.get(`/ward-nurse/list/${ward?.wardId}`);
        setNurses(response.data);
      } catch (err) {
        console.error('Error fetching nurses:', err);
      }
    };
    if (ward?.wardId) {
      fetchNurses();
    }
  }, [ward?.wardId]);

  const handleAddNurse = async (event) => {
    event.preventDefault(); // 폼 제출의 기본 동작을 방지

    if (!newNurse.name || !newNurse.level || !newNurse.team) {
      console.error('모든 필드를 입력해주세요.');
      return;
    }

    const nurseData = {
      ...newNurse,
      wardId: ward?.wardId, // wardId 추가
    };

    try {
      await apiClient.post('/ward-nurse/add', nurseData);
      setNurses((prevNurses) => [
        ...prevNurses,
        { ...nurseData, nurseId: Date.now() }, // 임시로 생성된 nurseId
      ]);
      setNewNurse({ name: '', level: '', team: '' });
    } catch (err) {
      console.error('Error adding nurse:', err);
    }
  };

  const handleDeleteNurse = async (nurseId) => {
    const isConfirmed = window.confirm('정말 삭제하시겠습니까?');
    if (isConfirmed) {
      try {
        await apiClient.delete('/ward-nurse/remove', {
          data: { nurseId, wardId: ward?.wardId },
        });
        setNurses((prevNurses) => prevNurses.filter((nurse) => nurse.nurseId !== nurseId));
      } catch (err) {
        console.error('Error deleting nurse:', err);
      }
    }
  };

  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-sky-600 mb-4">새 간호사 추가</h3>
        <form onSubmit={handleAddNurse} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="이름"
              value={newNurse.name}
              onChange={(e) => setNewNurse({ ...newNurse, name: e.target.value })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <input
              type="number"
              placeholder="레벨"
              value={newNurse.level}
              onChange={(e) => setNewNurse({ ...newNurse, level: e.target.value })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <input
              type="text"
              placeholder="팀"
              value={newNurse.team}
              onChange={(e) => setNewNurse({ ...newNurse, team: e.target.value })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            <Plus className="h-5 w-5 mr-2" />
            간호사 추가
          </button>
        </form>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-sky-600">간호사 목록</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nurses.map((nurse) => (
            <div
              key={nurse.nurseId}
              className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex-1">
                <h4 className="text-lg font-semibold">{nurse.name}</h4>
                <p className="text-sm text-gray-600">{`레벨: ${nurse.level}, 팀: ${nurse.team}`}</p>
              </div>
              <Button
                onClick={() => handleDeleteNurse(nurse.nurseId)}
                variant="outline"
                className="text-red-500 p-2 rounded-full hover:bg-red-50 transition"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WardMainPage;
