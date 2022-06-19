import React, { useMemo, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Container from "@mui/material/Container";

import Bod from "./components/body";
import axios from "axios";
import "./App.css";
function App() {
  const getdata = () => {
    axios
      .get("http://localhost:5000")
      .then((data) => console.log(data.data.express))
      .catch((error) => console.log(error));
  };
  getdata();
  return (
    <div>
      <Bod />
    </div>
  );
}
export default App;
