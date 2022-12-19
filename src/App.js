import React from "react";
import HomePage from "./pages/home/HomePage";

import LoginPage from "./pages/Login/LoginPage";

import SinglePage from "./pages/single/SinglePage";

import NewPage from "./pages/new/NewPage";

import ListPage from "./pages/list/ListPage";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/darkStyle.scss";
import { useContext } from "react";
import { multiContext } from "./context/multiCotext/MultipleContext";
import { productColums, userColums } from "./dataTableSource";

const App = () => {
  const { state } = useContext(multiContext);

  const AuthRequire = ({ children }) => {
    return state.currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={state.darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<LoginPage />} />
            <Route
              index
              element={
                <AuthRequire>
                  <HomePage />
                </AuthRequire>
              }
            />

            <Route path="users">
              <Route
                index
                element={
                  <AuthRequire>
                    <ListPage
                      title="Add New User"
                      colum={userColums}
                      dbName="user"
                    />
                  </AuthRequire>
                }
              />
              <Route
                path=":userId"
                element={
                  <AuthRequire>
                    <SinglePage />
                  </AuthRequire>
                }
              />
              <Route
                path="new"
                element={
                  <NewPage
                    inputs={userInputs}
                    title="Add new User"
                    dbName="user"
                  />
                }
              />
            </Route>

            <Route path="products">
              <Route
                index
                element={
                  <AuthRequire>
                    <ListPage
                      title="Add New Products"
                      colum={productColums}
                      dbName="products"
                    />
                  </AuthRequire>
                }
              />
              <Route
                path=":productId"
                element={
                  <AuthRequire>
                    <SinglePage />
                  </AuthRequire>
                }
              />
              <Route
                path="new"
                element={
                  <AuthRequire>
                    <NewPage
                      inputs={productInputs}
                      title="Add new Product"
                      dbName="products"
                    />
                  </AuthRequire>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
