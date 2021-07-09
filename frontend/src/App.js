import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'
import Footer from './components/footer'
import Header from './components/header'
import { Container } from 'react-bootstrap'
import Home from './screens/home-screen'
import Product from './screens/product-screen'
import Cart from './screens/cart-screen'
import Login from './screens/login-screen'
import Register from './screens/register-screen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
          <Route path="/product/:id" component={Product} />
          {/* question mark to make it optional */}
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/" component={Home} exact/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
