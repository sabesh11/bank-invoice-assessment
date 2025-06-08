import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";

import Collapse from "@mui/material/Collapse";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { rows } from "../Jsons/TableData";
import { Checkbox } from "@mui/material";
import Navbar from "../components/Navbar";
import '../Dayselector.css'


const days = [
  { label: "S", date: 11 },
  { label: "M", date: 12 },
  { label: "T", date: 13 },
  { label: "W", date: 14 },
  { label: "T", date: 15 },
  { label: "F", date: 16 },
  { label: "S", date: 17 },
];

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow  sx={{
    "& > *": { borderBottom: "unset" },
    backgroundColor: open ? "#13255B" : "inherit",
    color: open ? "white" : "inherit", // optional: make text white when selected
  }}>
        <TableCell align="right">
          <Checkbox
            color="primary"
            checked={open}
            onChange={() => setOpen(!open)}
            inputProps={{
              "aria-label": "select row to show details",
            }}
          />
        </TableCell>

        <TableCell align="right" sx={{ color: open ? "white" : "inherit" }}>{row.no}</TableCell>
        <TableCell align="right" sx={{ color: open ? "white" : "inherit" }}>{row.CompanyName}</TableCell>
        <TableCell align="right" sx={{ color: open ? "white" : "inherit" }}>{row.GST}</TableCell>
        <TableCell align="right" sx={{ color: open ? "white" : "inherit" }}>{row.OrderID}</TableCell>
        <TableCell align="right" sx={{ color: open ? "white" : "inherit" }}>{row.Invoice}</TableCell>
        <TableCell align="right" sx={{ color: open ? "white" : "inherit" }}>{row.date}</TableCell>
        <TableCell align="right" sx={{ color: open ? "white" : "inherit" }}>${row.amount}</TableCell>
        <TableCell align="right" sx={{ color: open ? "white" : "inherit" }}>{row.Depart}</TableCell>
      </TableRow>
      <TableRow >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0,  }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1,}} >
              <Typography variant="h6" gutterBottom component="div">
                Remark
              </Typography>
              <p>
                Its is long established flash that a render will be distracted
                by the readable content of a page while looking at its layout
                <br></br>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                vitae nisi porro quisquam, nulla sint iste exercitationem
                maiores sed commodi eos illum voluptates impedit! Provident rem
                itaque praesentium dignissimos totam?
              </p>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Invoice() {
  const selectedDay = 14;
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#EDF0F4" }}>

      <Navbar />
      <div className="container">
      <div className="container mt-5">
        <div className="row ms-2">Dashboard - Invoice</div>
        <div className="row  mt-3 justify-content-between">
          <div className="col-md-3 h3 ms-2"> Invoice Received</div>
          <div className="col-md-5">
            <div className="calendar-container">
      {days.map((day, index) => {
        const isSelected = day.date === selectedDay;
        return (
          <div key={index} className="day-column">
            <div className={`day-label ${isSelected ? "selected-top" : ""}`}>
              {day.label}
            </div>
            <div className={`day-number ${isSelected ? "selected-bottom" : ""}`}>
              {day.date}
            </div>
          </div>
        );
      })}
    </div>
          </div>
         </div>
        <div className="row mt-4 justify-content-between">
          <div className="col-5">
            <span
              className=" shadow-3 p-2 rounded"
              style={{ backgroundColor: "white" }}
            >
              Approval
            </span>
            &nbsp;&nbsp;
            <span
              className=" shadow-3 p-2 rounded"
              style={{ backgroundColor: "#13255B", color: "white" }}
            >
              Rejected
            </span>
            &nbsp; &nbsp;{" "}
            <span
              className=" shadow-3 p-2 rounded"
              style={{ backgroundColor: "white" }}
            >
              Pending
            </span>
          </div>
          <div className="col-5">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="right">All</TableCell>
              <TableCell align="right">NO</TableCell>
              <TableCell align="right">Company Name</TableCell>
              <TableCell align="right">GST OR PAN</TableCell>
              <TableCell align="right">Order ID</TableCell>
              <TableCell align="right">Invoice ID</TableCell>
              <TableCell align="right">Issued date</TableCell>
              <TableCell align="right">Invoice amount</TableCell>
              <TableCell align="right">Department</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </Box>
  );
}
