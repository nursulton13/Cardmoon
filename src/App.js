import React, { createContext, useState } from "react";
import Lesson10 from "./lesson10";

export const Context = createContext();

function App() {
  const [value, setValue] = useState(0);
  const state = { value, setValue, interval: 2 };

  return (
    <Context.Provider value={state}>
      <Lesson10 />
    </Context.Provider>
  );
}

export default App;
