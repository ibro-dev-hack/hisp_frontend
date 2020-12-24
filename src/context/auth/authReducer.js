
export const initialState = {
   isAuthenticated: false,
   token: null,
   user: null,
}


export const rootReducer = (state, action) => {
   switch (action.type) {
      case "LOGIN":
         return { ...state, isAuthenticated: true, user: action.payload, token: localStorage.getItem("token") };
      case "LOGOUT":
         return { ...state, isAuthenticated: false };
      default:
         return state;
   }
}