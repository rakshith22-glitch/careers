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
const theme = createTheme();

function SideBar({ handleDrawerClose, job, id, url }) {
  const [Status, setStatus] = useState("");

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
        setStatus(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <IconButton onClick={handleDrawerClose}>
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
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <Typography variant="h6"></Typography>
                <WorkIcon />
              </Avatar>
              <a href={url}>{job} </a>
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
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
            <h1> {Status}</h1>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default SideBar;
