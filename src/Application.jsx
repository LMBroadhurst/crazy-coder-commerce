import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.styles.css';
import Home from './Routes/Home';
import Authentication from "./Routes/Authentication";
import Account from './Routes/Account.jsx';
import Checkout from './Routes/Checkout';
import Desktops from './Routes/Desktops';
import Laptops from './Routes/Laptops';


const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/account' element={<Account />} />
          <Route path='/desktops' element={<Desktops />} />
          <Route path='/laptops' element={<Laptops />} />
          <Route path='/laptops' element={<Laptops />} />
          <Route path='/checkout' element={<Checkout />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;