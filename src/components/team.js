import React, { useMemo, useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import logo from "../logo.svg";
import Container from "@mui/material/Container";
function Team() {
  const [teamdata, setteamdata] = useState([]);
  const [query, setQuery] = useState("redux");
  const [url, setUrl] = useState("http://localhost:5000/team_members");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({ hits: [] });
  const index = teamdata.length;
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
        setteamdata(result.data.team_members);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1 style={{ fontSize: 44, textAlign: "center" }}> TEAM </h1>
      </div>
      <div className="container">
        {teamdata.map((item, i) => {
          let logo = item.pictures;

          return (
            <div key={item.Name} className="item">
              <div>
                <img src={logo} style={{ width: "60%" }} />
              </div>
              <p style={{ fontSize: 12 }}>
                {" "}
                {item.Name},{item.title}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
