import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./ListPage.scss";
import DataTable from "../../components/datatable/DataTable";

const ListPage = ({ title, colum, dbName }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable title={title} colum={colum} dbName={dbName} />
      </div>
    </div>
  );
};

export default ListPage;
