import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
