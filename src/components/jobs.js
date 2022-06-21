import React, { useMemo, useState, useEffect } from "react";
import { Image, List } from "semantic-ui-react";
import { Link } from "react-scroll";
import axios from "axios";
import SideBar from "./sidebar";
import Sidebar from "react-sidebar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";
import "./jobs.css";
function Jobs() {
  const drawerWidth = 370;
  const [jobs, setjobs] = useState([]);
  const [job, setjob] = useState("");
  const [url, seturl] = useState("");
  const [id, setid] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({ hits: [] });

  const url1 = "http://localhost:5000/jobs";
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url1);

        setjobs(result.data.jobs);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = (item) => {
    setjob(item.Job);
    setid(item.id);
    seturl(item.url);
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setjob(null);
    setid(null);
    seturl(null);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: 44, textAlign: "center" }}>
        JOIN A MISSION THAT MATTERS{" "}
      </h1>
      <div className="containerjobs">
        {jobs.map((item, i) => {
          return (
            <Button
              variant="outlined"
              key={item.id}
              className="item"
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                backgroundColor: "#85dcb8",
                color: "black",
              }}
              onClick={() => handleDrawerOpen(item)}
            >
              {" "}
              {item.Job}
            </Button>
          );
        })}
      </div>
      <Drawer
        className="drawer"
        variant="persistent"
        anchor="right"
        open={open}
      >
        <SideBar
          style={{ display: "none" }}
          handleDrawerClose={handleDrawerClose}
          job={job}
          id={id}
          url={url}
        />
      </Drawer>
    </div>
  );
}

export default Jobs;
