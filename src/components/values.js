import React from "react";
import { Link } from "react-scroll";
import Table from "react-bootstrap/Table";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
function Values() {
  const bull = <Box component="span"></Box>;
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center" }}>Our values</h1>

      <div style={{ display: "flex", textAlign: "center" }}>
        <div>
          <Card sx={{ minWidth: 100 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Take ownership
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
              <Typography variant="body2">
                You'll be given the autotomy <br />
                and trust you need. <br />
                It's okay to fail, learn, and try again that's how we grow!
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </div>
        <div>
          <Card sx={{ minWidth: 100 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Think big and scale
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
              <Typography variant="body2">
                ​We're always looking for ways to simplify
                <br />, do better,
                <br /> and go faster to impact over 2.2 billion women.
                <br />
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </div>
        <div>
          <Card sx={{ minWidth: 100 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Work hard, play hard
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
              <Typography variant="body2">
                Our team works hard to bring our mission to life,
                <br /> but that doesn't mean that <br />
                we can't have fun while we're doing it!
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Values;
