import { createContext, useEffect, useReducer } from "react";

export const multiContext = createContext();

const INITIAL_STATE = {
  darkMode: JSON.parse(localStorage.getItem("mode")) || false,
  currentUser: JSON.parse(localStorage.getItem("user")) || false,
};

export const multiReducer = (state, action) => {
  switch (action.type) {
    case "login": {
      return {
        ...state,
        currentUser: true,
      };
    }

    case "logout": {
      return {
        ...state,
        currentUser: false,
      };
    }

    case "Light": {
      return {
        ...state,
        darkMode: false,
      };
    }

    case "Dark": {
      return {
        ...state,
        darkMode: true,
      };
    }

    case "toggle": {
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }

    default:
      return state;
  }
};

export const MultiContextProvider = (props) => {
  const [state, dispatch] = useReducer(multiReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
    localStorage.setItem("mode", JSON.stringify(state.darkMode));
  }, [state.currentUser, state.darkMode]);

  return (
    <multiContext.Provider value={{ state, dispatch }}>
      {props.children}
    </multiContext.Provider>
  );
};
