import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.styles.css';
import Home from './Routes/Home';
import Authentication from "./Routes/Authentication";
import Shop from './Routes/Shop.jsx';
import Account from './Routes/Account.jsx';
import Checkout from './Routes/Checkout';

import { useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, getCategoriesAndDocuments } from "./Utils/Firebase";
import { setCurrentUser } from './store/user/userAction';
import { useDispatch } from 'react-redux';
import { setCategories } from './store/categories/categoryAction';


const App = () => {

  const dispatch = useDispatch();

  useEffect( () => {
    const unsubscribe = onAuthStateChangedListener((user) => {

      if (user) {
        createUserDocumentFromAuth(user);
      }
    
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  });

  useEffect( () => {
    const getCategoriesMap = async () => {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(setCategories(categoriesArray));
    }

    getCategoriesMap();
});

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