import { Container, Navbar } from 'react-bootstrap';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App custom-app">
      <Container className="d-flex flex-column min-vh-100">
        <Navbar className="custom-navbar mb-4">
          <Navbar.Brand>TimeWise</Navbar.Brand>
        </Navbar>

        <div className="mb-3">
          <TaskList />
        </div>
      </Container>
    </div>
  );
}

export default App;
