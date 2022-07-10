import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailProduct from "./detailProduct/DetailProduct";
import NotFound from "./utils/not_found/NotFound";
import CreateProduct from "./createProduct/CreateProduct";

import { GlobalState } from "../../GlobalState";

function Pages() {
  const state = useContext(GlobalState);
  const [isAdmin] = state.userAPI.isAdmin;

  return (
    <Router>
      <Route path="/detail/:id" exact component={DetailProduct} />

      <Route
        path="/edit_product/:id"
        exact
        component={isAdmin ? CreateProduct : NotFound}
      />
      {/* <Route path="*" exact component={NotFound} /> */}
    </Router>
  );
}

export default Pages;
