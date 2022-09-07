import { useState, useEffect } from "react";
import React from "react";
import NavBarAdmin from "components/navbarAdmin";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { outputWithSpace } from "utils/";
import { Container } from "@mui/material";
import SplitButton from "components/splitbutton"
import style from "./Admin.module.css"
import { getItemsByConditionAll } from "service/api";


function createData(name, price, discount, stock, size, amount) {
  return {
    name,
    price,
    discount,
    stock,
    size,
    amount,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">{row.discount}</TableCell>
        <TableCell align="right">{row.stock}</TableCell>
        <TableCell align="right">{row.size}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha de compra</TableCell>
                    <TableCell>Clientes</TableCell>
                    <TableCell align="right">Cantidad</TableCell>
                    <TableCell align="right">Precio total ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
// name,
// price,
// discount,
// stock,
// size,
// amount,

Row.propTypes = {
  row: PropTypes.shape({
    stock: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
];

export default function Admin() {
  const [product, setProduct] = useState([]);
  const [rows, setRows] = useState([]);
  const [nameCol, setNameCol] = useState({category: "women", type: "jeans"});
console.log(nameCol, "aksldjflkadjsflkaj");
  useEffect(() => {
    const getProducts = async () => {
      // const response = await fetch(`/data/women/jeans.json`);
      let str = `/data/${nameCol.category}/${nameCol.type}.json`;
      console.log(str, "str");
//firebase
const allItems = await getItemsByConditionAll(nameCol.type);
// console.log(allItems);
      // setProduct(allItems[0].data);
//firebase


      // const response = await fetch(str);
      // const data = await response.json();
      
      // setProducts(data);
      // setFilteredProducts(data);
      console.log("data", allItems[0].data);
      if (allItems[0].data) {
        // name,
        // price,
        // discount,
        // stock,
        // size,
        // amount,
        const newItems = allItems[0].data.map((item) => createData(item.title, item.price, 159, 6.0, 24, 4.0, 3.99));
        console.log("ultra data: ",newItems);
        
        setRows(newItems)
        // console.log("end data: ", ultraData);
        // setRows(
        //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
        //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
        //   createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
        //   createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
        //   createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5)
        // );
        // const newItem = data.filter((i) => outputWithSpace(i.title) === key);
        // console.log("your item selected: ", newItem);
        // setProduct(newItem);
      }
      // setMatches(matchesAux);
    };

    getProducts();
  }, [nameCol]);
  const handleItemSelected = (value) => {
    let str = ""
      switch(value.index){
        case 0:
          str = "coats"
          break;
          case 1:
          str = "formal_shirts"
          break;
          case 2:
          str = "sportswear"

          break;
          case 3:
          str = "formal_shirts"

          break;
          case 4:
          str = "jeans"

          break;
          case 5:
          str = "makeup"
          break;
        default:
          break;

      }
    console.log(str, "value item selected");
    if(value.index <=2){
    let obj = { category: "men", type: str };
    setNameCol(obj)
      
    }else{
      let obj = { category: "woman", type: str };
      setNameCol(obj)
    }
  }
  console.log("rows:", rows);
  return (
    <>
      <NavBarAdmin />
      <Container className={style.containerSplitButton}>
        <SplitButton itemSelected={handleItemSelected}/>
      </Container>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Descuento</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Medidas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <Row key={index} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
// const Admin = () => {
//   return (
//     <>
//     <NavBarAdmin/>
//     </>
//   )
// }

// export default Admin
