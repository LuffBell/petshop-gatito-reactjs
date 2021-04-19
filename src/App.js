import './assets/css/base/base.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <AboutUs />
      </Route>
      <Route path="/contacts">
        <Contact />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
