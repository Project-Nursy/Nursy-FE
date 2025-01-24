// function MainPage() {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Welcome to Nursy</h1>
//       <p>Your healthcare scheduling companion!</p>
//     </div>
//   );
// }

// export default MainPage;
import React, { useContext, useEffect } from 'react';
import apiClient from '../api/axios';
import { UserContext } from '../contexts/UserContext';

function MainPage() {
  const { user, setUser } = useContext(UserContext);
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

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Nursy</h1>
      <p>{user}</p>
      <p>Your healthcare scheduling companion!</p>
    </div>
  );
}

export default MainPage;
