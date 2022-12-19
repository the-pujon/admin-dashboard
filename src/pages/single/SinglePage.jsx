import React from "react";

import "./SinglePage.scss";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const SinglePage = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Joe Jon</h1>
                <div className="detailsItem">
                  <span className="detailItemKey">Email: </span>
                  <span className="detailItemValue">
                    pujondas1234@gmail.com
                  </span>
                </div>

                <div className="detailsItem">
                  <span className="detailItemKey">Phone: </span>
                  <span className="detailItemValue">012 1234 1234</span>
                </div>

                <div className="detailsItem">
                  <span className="detailItemKey">Address: </span>
                  <span className="detailItemValue">Old Dhaka</span>
                </div>

                <div className="detailsItem">
                  <span className="detailItemKey">Country: </span>
                  <span className="detailItemValue">Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart title={"User's Spending (Last 6 month)"} aspect={3 / 1} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
