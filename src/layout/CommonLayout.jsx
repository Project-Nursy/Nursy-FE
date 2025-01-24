import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import { Container } from 'react-bootstrap';

export default function CommonLayout() {
  return (
    <div>
      <Header />
      <div>
        <SideBar />
        <main>
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
