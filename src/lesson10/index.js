import React, { createContext, useState, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout } from "./comps";
import { CategoryP, HomeP, SpecificCategoryP } from "./pages";

export const Context = createContext();

const Index = () => {
  const [categories, setCategories] = useState([
    "Ovqat",
    "Internet",
    "Transport",
  ]);
  const [costs, setCosts] = useState([]);
  const state = { categories, setCategories, costs, setCosts };
  return (
    <Context.Provider value={state}>
      <ToastContainer />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/">
              <Route index element={<HomeP />} />
              <Route path="category" element={<CategoryP />}></Route>
              <Route path="category/:id" element={<SpecificCategoryP />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default memo(Index);
