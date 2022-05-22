import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/home';
import Layout from './layout/layout';
import Market from './pages/market/Market';
import Login from './pages/Auth/Login/Login';
import PasswordRecover from "./pages/Auth/PasswordRecover/passwordRecover"
import Register from './pages/Auth/Register/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='login' element={<Login />} />
          <Route exact path="password-recover" element={<PasswordRecover />} />
          <Route exact path='register' element={<Register />} />
          <Route path='/' element={<Layout />}>
            <Route exact path="/market" element={<Market />} />
            <Route exact path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
