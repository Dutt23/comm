import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'
import Footer from './components/footer'
import Header from './components/header'
import { Container } from 'react-bootstrap'
import Home from './screens/home-screen'
function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
