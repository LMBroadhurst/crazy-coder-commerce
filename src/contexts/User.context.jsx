import { createContext, useEffect, useReducer, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../Utils/Firebase";
import { createAction } from "../Utils/reducer";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
  orders: [],
  setOrders: () => {},
  addOrderToUser: () => {}
});

export const USER_ACTION_TYPES = {
  'SET_CURRENT_USER': 'SET_CURRENT_USER'
}

const addOrderToUser = (orders, orderDetails) => {

  console.log(orderDetails)
  return orders.push(orderDetails);
}

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER :
      return {
        ...state,
        currentUser: payload
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
}

const INITIAL_STATE = {
  currentUser: null
}
  
export const UserProvider = ({ children }) => {

  const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE);
  const [orders, setOrders] = useState([]);

  const addOrder = (orderToAdd) => {
    setOrders(addOrderToUser(orders, orderToAdd))
  }

  const setCurrentUser = (user) => {
    dispatch(
      createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
    );
  };

  const value = { currentUser, setCurrentUser, orders, addOrder};

  useEffect( () => {
    const unsubscribe = onAuthStateChangedListener( (user) => {

      if (user) {
        createUserDocumentFromAuth(user);
      }
    
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};