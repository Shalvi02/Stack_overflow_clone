import { BrowserRouter as Router} from 'react-router-dom'
import logo from './logo.svg';
import Navbar from './components/Navbar';
import AllRoutes from './AllRoutes'

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
       <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
