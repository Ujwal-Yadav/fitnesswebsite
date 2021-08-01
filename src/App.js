import './App.css';
import { Navbar } from './Components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Pricing } from './Components/Pricing';
import { Contact } from './Components/Contact';
import { Courses } from './Components/Courses';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
