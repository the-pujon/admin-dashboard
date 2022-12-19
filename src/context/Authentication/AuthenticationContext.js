import { useEffect, useReducer } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || false,
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "login": {
      return {
        currentUser: action.payload,
      };
    }

    case "logout": {
      return {
        currentUser: false,
      };
    }

    default:
      return state;
  }
};

export const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};
