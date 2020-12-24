import React from 'react';
import { initialState, rootReducer } from './authReducer';

export const AuthStateToProps = React.createContext();
export const AuthDispatchToProps = React.createContext();


export const AuthProvider = ({ children }) => {
   const [state, dispatch] = React.useReducer(rootReducer, initialState);
   return <AuthStateToProps.Provider value={state} >
      <AuthDispatchToProps.Provider value={dispatch} >
         {children}
      </AuthDispatchToProps.Provider>
   </AuthStateToProps.Provider>
}

export const useAuthState = () => {
   const context = React.useContext(AuthStateToProps);
   if (context === undefined) {
      return console.log("le  state doit s'utilser dans le context ");
   }
   return context;
}

export const useAuthDispatch = () => {
   const context = React.useContext(AuthDispatchToProps);
   if (context === undefined) {
      return console.log("le dispatch doit s'utilser dans le context ");
   }
   return context;
}

export const login = async (dispatch, { username, password }, cb) => {

   if (username !== "admin" || password !== "district") {
      return alert("informations incorrect");
   }

   localStorage.setItem("username", username);
   localStorage.setItem("password", password);
   localStorage.setItem("token", `kratos.${username}${password}`);

   dispatch({ type: "LOGIN", payload: { username, password } });
   return setTimeout(cb, 100);
}

export const logout = (dispatch) => {

   localStorage.removeItem("user");
   localStorage.removeItem("token");
   localStorage.removeItem("username");
   localStorage.removeItem("password");
   return dispatch({ type: "LOGOUT" });
}


