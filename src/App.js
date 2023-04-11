import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componets/Header';
import About from './componets/About';
import Skills from './componets/Skills';
import Qualification from './componets/Qualification';
import Portfolio from './componets/Portfolio';
import Footer from './componets/Footer';
import Scrollup from './componets/Scrollup';
import Home from './componets/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Portfolio/>
      <Footer/>
      <Scrollup/>
      
    </div>
  );
}

export default App;
