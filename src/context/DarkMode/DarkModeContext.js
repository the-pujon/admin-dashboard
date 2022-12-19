import { createContext, useEffect, useReducer } from "react";

export const INITIAL_STATE = {
  darkMode: JSON.parse(localStorage.getItem("mode")) || false,
};

export const DarkModeContext = createContext();

export const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "Light": {
      return {
        darkMode: false,
      };
    }

    case "Dark": {
      return {
        darkMode: true,
      };
    }

    case "toggle": {
      return {
        darkMode: !state.darkMode,
      };
    }

    default:
      return state;
  }
};

export const DarkContextProvider = (props) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(state.darkMode));
  }, [state.darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
