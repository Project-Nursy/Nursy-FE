// // import React, { useContext, useEffect } from 'react';
// // import apiClient from '../api/axios';
// // import { UserContext } from '../contexts/UserContext';

// // function SelectWardPage() {
// //   const { user, setUser } = useContext(UserContext);
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         console.log('fetchData');
// //         const response = await apiClient.get('/auth/test');
// //         console.log('response:', response);
// //         const displayUserName = response.data.principal.displayUserName;
// //         //setWelcomeMessage(`${displayUserName}님 반갑습니다`);
// //         setUser(displayUserName);
// //         console.log('displayUserName:', displayUserName);
// //       } catch (error) {
// //         console.error('Error fetching data', error);
// //       }
// //     };

// //     fetchData();
// //   }, [setUser]);

// //   return (
// //     <div style={{ textAlign: 'center', marginTop: '50px' }}>

// //     </div>
// //   );
// // }
// // export default SelectWardPage;
// import React, { useContext, useEffect, useState } from 'react';
// import apiClient from '../api/axios';
// import { UserContext } from '../contexts/UserContext';

// function SelectWardPage() {
//   const { user, setUser } = useContext(UserContext);
//   const [wards, setWards] = useState([]); // 병동 목록
//   const [selectedWard, setSelectedWard] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log('fetchData');
//         const response = await apiClient.get('/auth/test');
//         console.log('response:', response);
//         const displayUserName = response.data.principal.displayUserName;
//         setUser(displayUserName);
//         console.log('displayUserName:', displayUserName);
//       } catch (error) {
//         console.error('Error fetching data', error);
//       }
//     };

//     fetchData();

//     // 병동 목록 가져오기 예시
//     const fetchWards = async () => {
//       try {
//         const response = await apiClient.get('/api/ward/list'); // 병동 리스트를 받아오는 API 호출
//         setWards(response.data);
//       } catch (error) {
//         console.error('Error fetching wards', error);
//       }
//     };

//     fetchWards();
//   }, [setUser]);

//   const handleWardSelect = (event) => {
//     setSelectedWard(event.target.value);
//   };

//   const handleCreateWard = () => {
//     // 병동 생성 로직
//     console.log('병동 생성:', selectedWard);
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//       <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">병동 선택 및 생성</h1>
//       <div className="bg-white shadow-md rounded-lg p-8">
//         <div className="mb-6">
//           <label htmlFor="ward-select" className="block text-lg font-medium text-gray-700 mb-2">
//             병동 선택
//           </label>
//           <select
//             id="ward-select"
//             value={selectedWard}
//             onChange={handleWardSelect}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500"
//           >
//             <option value="" disabled>
//               병동을 선택하세요
//             </option>
//             {wards.map((ward) => (
//               <option key={ward.id} value={ward.id}>
//                 {ward.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-6">
//           <button
//             onClick={handleCreateWard}
//             className="w-full px-4 py-2 bg-sky-600 text-white font-medium rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
//           >
//             병동 생성
//           </button>
//         </div>

//         <div className="text-center mt-6">
//           {user && (
//             <p className="text-sm text-gray-600">{user}님, 반갑습니다! 병동을 선택하거나 새 병동을 생성하세요.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SelectWardPage;

// import React, { useState, useContext, useEffect } from 'react';
// import { PlusCircle } from 'react-feather'; // Feather Icons에서 PlusCircle 아이콘 가져오기
// import apiClient from '../api/axios';
// import { UserContext } from '../contexts/UserContext';

// function SelectWardPage() {
//   const { user, setUser } = useContext(UserContext);
//   const [wards, setWards] = useState([]);
//   const [newWardName, setNewWardName] = useState('');

//   // 병동 목록 가져오기
//   const fetchWards = async () => {
//     try {
//       const response = await apiClient.get('/api/ward/list');
//       setWards(response.data);
//     } catch (error) {
//       console.error('Error fetching wards:', error);
//     }
//   };

//   useEffect(() => {
//     fetchWards();
//   }, []);

//   const handleCreateWard = async () => {
//     try {
//       await apiClient.post('/ward/add', { name: newWardName });
//       setNewWardName('');
//       fetchWards(); // 새 병동이 추가된 후 병동 목록을 갱신
//     } catch (error) {
//       console.error('Error creating ward:', error);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//       <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//         <div className="bg-sky-600 text-white p-4">
//           <h2 className="text-3xl font-bold text-center">{user ? `${user}님 반갑습니다` : '병동 선택'}</h2>
//         </div>
//         <div className="p-6">
//           <div className="space-y-6">
//             <div className="grid grid-cols-2 gap-4">
//               {wards.map((ward, index) => (
//                 <button
//                   key={index}
//                   className="w-full px-4 py-2 text-lg font-medium text-sky-600 border border-sky-600 rounded-md hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
//                 >
//                   {ward.name}
//                 </button>
//               ))}
//             </div>
//             <div className="flex items-center space-x-4">
//               <input
//                 type="text"
//                 placeholder="새 병동 이름"
//                 value={newWardName}
//                 onChange={(e) => setNewWardName(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
//               />
//               <button
//                 onClick={handleCreateWard}
//                 className="flex items-center px-4 py-2 bg-sky-600 text-white font-medium rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
//               >
//                 <PlusCircle className="mr-2 h-4 w-4" />
//                 병동 생성
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SelectWardPage;

// import React, { useState, useContext, useEffect } from 'react';
// import { PlusCircle } from 'react-feather'; // Feather Icons에서 PlusCircle 아이콘 가져오기
// import apiClient from '../api/axios';
// import { UserContext } from '../contexts/UserContext';

// function SelectWardPage() {
//   const { user, setUser } = useContext(UserContext);
//   const [wards, setWards] = useState([]);
//   const [newWardName, setNewWardName] = useState('');
//   const [newHospitalName, setNewHospitalName] = useState('');
//   const [newLocation, setNewLocation] = useState('');

//   // 병동 목록 가져오기
//   const fetchWards = async () => {
//     try {
//       const response = await apiClient.get('/ward/list');
//       setWards(response.data); // 응답에서 병동 리스트 받아오기
//     } catch (error) {
//       console.error('Error fetching wards:', error);
//     }
//   };

//   useEffect(() => {
//     fetchWards();
//   }, []);

//   // 병동 생성 핸들러
//   const handleCreateWard = async () => {
//     try {
//       const wardData = {
//         hospitalName: newHospitalName,
//         location: newLocation,
//         wardName: newWardName,
//       };

//       // 병동 생성 API 요청
//       await apiClient.post('/ward/add', wardData);
//       setNewWardName('');
//       setNewHospitalName('');
//       setNewLocation('');
//       fetchWards(); // 새 병동 추가 후 병동 목록 갱신
//     } catch (error) {
//       console.error('Error creating ward:', error);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//       <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//         <div className="bg-sky-600 text-white p-4">
//           <h2 className="text-3xl font-bold text-center">{user ? `${user}님 반갑습니다` : '병동 선택'}</h2>
//         </div>
//         <div className="p-6">
//           <div className="space-y-6">
//             <div className="flex items-center space-x-4">
//               <input
//                 type="text"
//                 placeholder="병동 이름"
//                 value={newWardName}
//                 onChange={(e) => setNewWardName(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
//               />
//               <input
//                 type="text"
//                 placeholder="병원 이름"
//                 value={newHospitalName}
//                 onChange={(e) => setNewHospitalName(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
//               />
//               <input
//                 type="text"
//                 placeholder="위치"
//                 value={newLocation}
//                 onChange={(e) => setNewLocation(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
//               />
//               <button
//                 onClick={handleCreateWard}
//                 className="flex items-center px-4 py-2 bg-sky-600 text-white font-medium rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
//               >
//                 <PlusCircle className="mr-2 h-4 w-4" />
//                 병동 생성
//               </button>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               {wards.map((ward) => (
//                 <button
//                   key={ward.wardId} // 고유 ID를 key로 사용
//                   className="w-full px-4 py-2 text-lg font-medium text-sky-600 border border-sky-600 rounded-md hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
//                 >
//                   {ward.wardName} - {ward.hospitalName} ({ward.location})
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SelectWardPage;
import React, { useState, useContext, useEffect } from 'react';
import { PlusCircle, Trash } from 'react-feather'; // Feather Icons에서 PlusCircle, Trash 아이콘 가져오기
import apiClient from '../api/axios';
import { UserContext } from '../contexts/UserContext';

function SelectWardPage() {
  const { user, setUser } = useContext(UserContext);
  const [wards, setWards] = useState([]);
  const [newWardName, setNewWardName] = useState('');
  const [newHospitalName, setNewHospitalName] = useState('');
  const [newLocation, setNewLocation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('fetchData');
        const response = await apiClient.get('/auth/test');
        console.log('response:', response);
        const displayUserName = response.data.principal.displayUserName;
        //setWelcomeMessage(`${displayUserName}님 반갑습니다`);
        setUser(displayUserName);
        console.log('displayUserName:', displayUserName);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [setUser]);
  // 병동 목록 가져오기
  const fetchWards = async () => {
    try {
      const response = await apiClient.get('/ward/list');
      setWards(response.data); // 응답에서 병동 리스트 받아오기
    } catch (error) {
      console.error('Error fetching wards:', error);
    }
  };

  useEffect(() => {
    fetchWards();
  }, []);

  // 병동 생성 핸들러
  const handleCreateWard = async () => {
    try {
      const wardData = {
        hospitalName: newHospitalName,
        location: newLocation,
        wardName: newWardName,
      };

      // 병동 생성 API 요청
      await apiClient.post('/ward/add', wardData);
      setNewWardName('');
      setNewHospitalName('');
      setNewLocation('');
      fetchWards(); // 새 병동 추가 후 병동 목록 갱신
    } catch (error) {
      console.error('Error creating ward:', error);
    }
  };

  // 병동 삭제 핸들러
  //   const handleDeleteWard = async (wardId) => {
  //     try {
  //       await apiClient.delete(`/ward/delete/${wardId}`);
  //       fetchWards(); // 병동 삭제 후 병동 목록 갱신
  //     } catch (error) {
  //       console.error('Error deleting ward:', error);
  //     }
  //   };
  const handleDeleteWard = async (wardId) => {
    const isConfirmed = window.confirm('정말 삭제하시겠습니까?');
    if (isConfirmed) {
      try {
        await apiClient.delete(`/ward/delete/${wardId}`);
        fetchWards(); // 병동 삭제 후 병동 목록 갱신
      } catch (error) {
        console.error('Error deleting ward:', error);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-sky-600 text-white p-4">
          <h2 className="text-3xl font-bold text-center">{user ? `${user}님 반갑습니다` : '병동 선택'}</h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="병동 이름"
                value={newWardName}
                onChange={(e) => setNewWardName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
              <input
                type="text"
                placeholder="병원 이름"
                value={newHospitalName}
                onChange={(e) => setNewHospitalName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
              <input
                type="text"
                placeholder="위치"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
              <button
                onClick={handleCreateWard}
                className="flex items-center px-4 py-2 bg-sky-600 text-white font-medium rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                병동 생성
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {wards.map((ward) => (
                <div key={ward.wardId} className="flex items-center justify-between">
                  <button className="w-full px-4 py-2 text-lg font-medium text-sky-600 border border-sky-600 rounded-md hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                    {ward.wardName} - {ward.hospitalName} ({ward.location})
                  </button>
                  <button
                    onClick={() => handleDeleteWard(ward.wardId)}
                    className="ml-4 text-red-600 hover:text-red-800 focus:outline-none"
                  >
                    <Trash className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectWardPage;
