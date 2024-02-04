import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import Navbar from 'react-bootstrap/Navbar';
import { Row } from 'react-bootstrap';



function App() {
  return (
    <div className='app-container'>
      <Header />

      <Container>
        <TableUsers />

      </Container>


    </div>
  );
}

export default App;
