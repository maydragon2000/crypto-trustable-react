import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector, Provider } from "react-redux";
// import store from './store';
import Home from './pages/home/home';
import Layout from './layout/layout';
import Market from './pages/market/Market';
import Login from './pages/Auth/Login/Login';
import PasswordRecover from "./pages/Auth/PasswordRecover/passwordRecover"
import Register from './pages/Auth/Register/Register';
import SendConfirmEmail from './pages/Auth/SendConfirmEmail/SendConfirmEmail';
import ConfirmSecurityCode from './pages/Auth/ConfirmSecurityCode/ConfirmSecurityCode';
import configureStore from "./store/configureStore";
import { createBrowserHistory } from "history";
import CoinDetail from "./pages/CoinDetail/CoinDetail"
import Watchlist from "./pages/watchlist/Watchlist"

const history = createBrowserHistory();
const store = configureStore(history);
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path='login' element={<Login />} />
            <Route exact path="password-recover" element={<PasswordRecover />} />
            <Route exact path='register' element={<Register />} />
            <Route exact path='ConfirmEmail' element={<SendConfirmEmail />} />
            <Route exact path="SecurityCode" element={<ConfirmSecurityCode />} />
            <Route path='/' element={<Layout />}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/market" element={<Market />} />
              <Route exact path="detail" element={<CoinDetail />} />
              <Route exact path="/watchlist" element={<Watchlist />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
