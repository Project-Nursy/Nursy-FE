import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <Header />
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
