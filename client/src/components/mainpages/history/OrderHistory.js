import React from "react";
import SalesStatistics from "./SalesStatistics";
import ProductsStatistics from "./ProductsStatistics";
import LatestOrder from "./LatestOrder";

function OrderHistory() {

  return (
    <div className="history-page">
      <div className="row">
        <ProductsStatistics />
        <SalesStatistics />
      </div>
      <LatestOrder/>
    </div>
  );
}

export default OrderHistory;
