"use client";
import { createContext, useEffect, useReducer } from "react";

type StateType = {
  theme: string;
  fontSize: number;
};

// type ActionType = {
//   type: "CHANGE_THEME" | "CHANGE_FONTSIZE";
//   payload?: number;
// };

//Discriminated Unions
type ColorActionType = {
  type: "CHANGE_THEME";
};
type SizeActionType = {
  type: "CHANGE_FONTSIZE";
  payload: number;
};

type ActionType = ColorActionType | SizeActionType;

const INITIAL_STATE = {
  theme: "dark",
  fontSize: 16,
};

export const ThemeContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    case "CHANGE_FONTSIZE":
      return {
        ...state,
        fontSize: action.payload,
      };

    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  // Apply the "dark" class to the html element when the theme is dark
  useEffect(() => {
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
