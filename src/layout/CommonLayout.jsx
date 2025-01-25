// import Header from '../components/Header';
// import { Outlet, useLocation } from 'react-router-dom';
// import SideBar from '../components/SideBar';
// import { Container } from 'react-bootstrap';

// export default function CommonLayout() {
//   const location = useLocation();
//   const ward = location.state?.ward; // ward 객체를 받아옵니다.

//   return (
//     <div>
//       <Header />
//       <div className="flex h-[88vh]">
//         <SideBar ward={ward} />
//         <main>
//           <Container>
//             <div>
//               <Outlet />
//             </div>
//           </Container>
//         </main>
//       </div>
//     </div>
//   );
// }
import Header from '../components/Header';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import { Container } from 'react-bootstrap';

export default function CommonLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const ward = location.state?.ward; // ward 객체를 받아옵니다.

  // ward 객체가 없을 경우 메인 페이지로 리다이렉트
  if (!ward) {
    navigate('/main');
    return null;
  }

  return (
    <div>
      <Header />
      <div className="flex h-[88vh]">
        <SideBar ward={ward} />
        <main className="flex-1">
          <Container>
            <div>
              <Outlet />
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
}
