import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.styles.css';
import Home from './Routes/Home';
import Authentication from "./Routes/Authentication";
import Shop from './Routes/Shop.js';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/shop' element={<Shop />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;