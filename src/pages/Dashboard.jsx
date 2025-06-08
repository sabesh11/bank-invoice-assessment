import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import grr from "../assets/grr.svg";
import overdue from "../assets/gr.png";
import paidamount from "../assets/23492.svg";
import payable from "../assets/noun-pay-2303736.svg";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import "../Dayselector.css";

const COLORS1 = [
  "#f06292",
  "#4db6ac",
  "#9575cd",
  "#64b5f6",
  "#ffb74d",
  "#90a4ae",
]; // Queues colors
const COLORS2 = ["#ffb74d", "#4db6ac", "#212121"]; // KPI colors

const data1 = [
  { name: "Processing Queue", value: 20 },
  { name: "Exception Queue", value: 54 },
  { name: "Duplicate Queue", value: 10 },
  { name: "Missing PO Queue", value: 8 },
  { name: "Receipt Hold Queue", value: 4 },
  { name: "Supplier Portal Queue", value: 4 },
];

const data2 = [
  { name: "Role", value: 30 },
  { name: "Person Responsible", value: 54 },
  { name: "Triggers Alert", value: 26 },
];

const days = [
  { label: "S", date: 11 },
  { label: "M", date: 12 },
  { label: "T", date: 13 },
  { label: "W", date: 14 },
  { label: "T", date: 15 },
  { label: "F", date: 16 },
  { label: "S", date: 17 },
];

const DonutChart = ({ title, data, colors }) => (
  <div style={{ width: 300 }} className="p-4">
    <h4>{title}</h4>
    <PieChart width={350} height={200}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        dataKey="value"
      >
        &nbsp;
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend layout="vertical" verticalAlign="middle" align="right" />
    </PieChart>
  </div>
);

const Dashboard = () => {
  const [data, setData] = useState([
    {
      image: grr,
      name: "invoice Received",
      total: "2123",
      amount: "12341233",
    },
    {
      image: paidamount,
      name: "payable amount",
      total: "2123",
      amount: "12341233",
    },
    {
      image: overdue,
      name: "overdue",
      total: "2123",
      amount: "12341233",
    },
    {
      image: payable,
      name: "paid amount",
      total: "2123",
      amount: "12341233",
    },
    {
      image: grr,
      name: "Rejected",
      total: "2123",
      amount: "12341233",
    },
    {
      image: payable,
      name: "Dispute",
      total: "2123",
      amount: "12341233",
    },
    {
      image: paidamount,
      name: "Department",
      total: "2123",
      amount: "12341233",
    },
    {
      image: overdue,
      name: "vendors",
      total: "2123",
      amount: "12341233",
    },
  ]);

  const [dueByAge, setDueByAge] = useState([
    {
      Days: "7 days",
      amount: "12341233",
    },
    {
      Days: "15 days",
      amount: "12341233",
    },
    {
      Days: "30 days",
      amount: "12341233",
    },
    {
      Days: "45 days",
      amount: "12341233",
    },
    {
      Days: "60 days",
      amount: "12341233",
    },
    {
      Days: "90 days",
      amount: "12341233",
    },
    {
      Days: "180 days",
      amount: "12341233",
    },
  ]);

  const selectedDay = 14;

  return (
    <Box sx={{ backgroundColor: "#EDF0F4" }}>
      <Navbar />
      <div className="container mt-5">
        <div className="row ms-2">Dashboard</div>
        <div className="row mt-3 justify-content-between">
          <div className="col-md-3 h3 ms-2">Dashboard</div>
          <div className="col-md-5">
            <div className="calendar-container">
              {days.map((day, index) => {
                const isSelected = day.date === selectedDay;
                return (
                  <div key={index} className="day-column">
                    <div
                      className={`day-label ${
                        isSelected ? "selected-top" : ""
                      }`}
                    >
                      {day.label}
                    </div>
                    <div
                      className={`day-number ${
                        isSelected ? "selected-bottom" : ""
                      }`}
                    >
                      {day.date}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-between">
          <div className="col-md-3">
            <span
              className=" shadow-3 p-3 rounded"
              style={{ backgroundColor: "white" }}
            >
              Over all outstanding $12341233
            </span>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-around ">
          {data.map((data, i) => (
            <div className="col-md-2 me-5 mt-4" key={i}>
              <Card sx={{ minWidth: 230 }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                  >
                    <img src={data.image} alt="..." className="img-fluid" />{" "}
                    {data.name}
                  </Typography>

                  {/* <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography> */}
                  <Typography variant="body2" className="mt-2">
                    <span className="text-secondary">Total</span> &nbsp;&nbsp;
                    <b>{data.total}</b>
                    <br />
                    <span className="text-secondary">$</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b>{data.amount}</b>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}

          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="mt-5 container"
          >
            <div style={{ backgroundColor: "white", width: "480px" }}>
              <DonutChart title="Queues" data={data1} colors={COLORS1} />
            </div>
            <div style={{ backgroundColor: "white", width: "450px" }}>
              <DonutChart title="KPI" data={data2} colors={COLORS2} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="container mt-5 p-4"
        style={{ backgroundColor: "#D5E3FF" }}
      >
        <div className="row justify-content-between">
          <div className="col-md-4 mt-4">
            <b>Due by Age Summary</b>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              Payment due date wise
            </Typography>
          </div>
          <div className="col-md-4  mt-4 text-end">
            <span>penalty saved amount</span>{" "}
            <span
              className=" shadow-3 p-3 rounded"
              style={{ backgroundColor: "white" }}
            >
              $12341233
            </span>
          </div>
        </div>
        <div className="row justify-content-around mt-4 p-2">
          {dueByAge.map((d, i) => (
            <div className="col-md-1 me-5 " key={i}>
              <Card sx={{ minWidth: 150 }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                  >
                    {d.Days}
                  </Typography>

                  <Typography variant="body2" className="mt-2">
                    <span className="text-secondary">$</span> &nbsp;&nbsp;
                    <b>{d.amount}</b>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Dashboard;
