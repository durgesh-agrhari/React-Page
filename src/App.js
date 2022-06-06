import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Submenu from './components/Submenu';
import { Project } from './components/Project';
import Subfooter from './components/Subfooter';



function App() {
  return (
    <Router>
      <div className="App"> 
      <Navbar />
      <Home />
      <Submenu />
      <Project />
      <Footer />
      <Subfooter />

      
      {/* <Routes>
        <Route path='/' element = {<Home/> }/>
        <Route exact path='/contact' element = {<Footer/> }/>        
      </Routes> */}

    </div>
    </Router>
  );
}

export default App;
