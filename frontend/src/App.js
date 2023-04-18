import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Navbar } from './components/Navbar';
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
