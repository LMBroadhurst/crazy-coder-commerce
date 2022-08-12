import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.styles.css';
import Home from './Routes/Home';
import Authentication from "./Routes/Authentication";
import Shop from './Routes/Shop.js';
import Account from './Routes/Account.js';
import Checkout from './Routes/Checkout';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/account' element={<Account />} />
          <Route path='/checkout' element={<Checkout />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;