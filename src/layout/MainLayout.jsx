import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <SideBar />
      <main>
        <Container>
          <div>
            <Outlet />
          </div>
        </Container>
      </main>
    </div>
  );
}
