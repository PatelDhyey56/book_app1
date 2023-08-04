import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup.jsx';
import Bookdetails from './pages/Bookdetails';
import Signin from './pages/Signin';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/book-detail" element={<Bookdetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
