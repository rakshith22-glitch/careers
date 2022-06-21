import React, { useMemo, useState, useEffect } from "react";
import {
  IconButton,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import WorkIcon from "@mui/icons-material/Work";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./sidebar.css";
import axios from "axios";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
const theme = createTheme();

function SideBar({ handleDrawerClose, job, id, url }) {
  const [Status, setStatus] = useState("");
  const [StatusMessage, setStatusMessage] = useState("");
  let Alerttype;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios
      .post("http://localhost:5000/job/" + id, {
        name: data.get("name"),
        email: data.get("email"),
        linkedin: data.get("linkedin"),
      })
      .then((response) => {
        // console.log(response.data.message);
        setStatus(response.data.status);
        setStatusMessage(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(Status);
  console.log(StatusMessage);
  if (Status === 400) {
    Alerttype = (
      <h1>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {StatusMessage}
        </Alert>
      </h1>
    );
  }
  if (Status === 200) {
    Alerttype = (
      <h1>
        <Alert severity="success">
          <AlertTitle>{StatusMessage}</AlertTitle>
          {}
        </Alert>
      </h1>
    );
  }
  if (Status === "") {
    Alerttype = <h1> </h1>;
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <IconButton
          style={{ backgroundColor: "#c38d9e", margin: "10px" }}
          onClick={handleDrawerClose}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <div
        style={{ height: "90%", textAlign: "center", padding: "30px 0" }}
        id="sidebar"
      >
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#c38d9e" }}>
                <Typography variant="h6"></Typography>
                <WorkIcon />
              </Avatar>
              <a href={url} style={{ color: "black" }}>
                {job}{" "}
              </a>
              <Typography component="h1" variant="h5"></Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="linkedin"
                      label="Linkedin Url"
                      name="linkedin"
                      autoComplete="linkedin"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2 }}
                  style={{ backgroundColor: " #c38d9e", color: "black" }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
            {Alerttype}
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default SideBar;
