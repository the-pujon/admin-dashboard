//for users colum
export const userColums = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "user",
    headerName: "User",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },

  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "address",
    headerName: "Address",
    width: 180,
  },
  {
    field: "country",
    headerName: "Country",
    width: 180,
  },
];

//for products colum
export const productColums = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.title}
        </div>
      );
    },
  },

  {
    field: "category",
    headerName: "Category",
    width: 230,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 160,
    renderCell: (params) => {
      let classs;

      if (params.row.stock === "In Stock") {
        classs = "stock-in";
      } else if (params.row.stock === "Stock Out") {
        classs = "stock-out";
      } else {
        classs = "TBA";
      }

      return (
        <div className={`cellWithStatus ${classs}`}>{params.row.stock}</div>
      );
    },
  },

  {
    field: "price",
    headerName: "Price",
    width: 100,
    renderCell: (params) => {
      return <div className="cellWithImg">$ {params.row.price}</div>;
    },
  },
];
