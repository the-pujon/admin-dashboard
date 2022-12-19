import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import "./HomePage.scss";
import Widgets from "../../components/widgets/Widgets";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

import List from "../../components/table/Table";

const HomePage = () => {
  return (
    <div className="home">
      <Sidebar />

      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="products" />
          <Widgets type="order" />
          <Widgets type="earnings" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title={"Last 6 Months (Revenue)"} aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transaction</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
