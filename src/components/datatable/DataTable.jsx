import React, { useEffect, useState } from "react";
import "./DataTable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const DataTable = ({ title, colum, dbName }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let list = [];
    const unsub = onSnapshot(
      collection(db, dbName),
      (snapShot) => {
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, dbName, id));
      const filterData = data.filter((data) => data.id !== id);
      setData(filterData);
    } catch (err) {
      console.log(err);
    }
  };

  //colum for view and delete buttons
  const actionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        {title}
        <Link to="new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={colum.concat(actionColum)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
