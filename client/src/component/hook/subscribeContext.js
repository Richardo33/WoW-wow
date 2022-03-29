import { createContext, useReducer } from "react";

export const SubsContext = createContext(); //function

const initialState = {
  isSubs: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SUBSCRIBE":
      return {
        isSubs: payload,
      };
    case "NOT_SUBSCRIBE":
      return {
        isSubs: false,
      };
    default:
      throw new Error();
  }
};

export const SubsContextProvider = ({ children }) => {
  const [state, dispacth] = useReducer(reducer, initialState);

  return (
    <SubsContext.Provider value={[state, dispacth]}>
      {children}
    </SubsContext.Provider>
  );
};
