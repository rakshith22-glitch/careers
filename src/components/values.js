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
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: 44, textAlign: "center" }}>OUR VALUES</h1>

      <div style={{ display: "flex", textAlign: "center" }}>
        <Card style={{ backgroundColor: "#eaf2fa", fontSize: 22 }}>
          <CardContent>
            <h3>Take Ownership </h3>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
            <Typography variant="body2" style={{ fontSize: 18 }}>
              You'll be given the autotomy <br />
              and trust you need. <br />
              It's okay to fail, learn, and try again that's how we grow!
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card style={{ fontSize: 22 }}>
          <CardContent>
            <h3>Think big and scale</h3>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
            <Typography variant="body2" style={{ fontSize: 18 }}>
              ​We're always looking for ways to simplify,
              <br />
              do better
              <br /> and go faster to impact over 2.2 billion women.
              <br />
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card style={{ backgroundColor: "#eaf2fa", fontSize: 22 }}>
          <CardContent>
            <h3 variant="h4" component="div">
              Work hard, play hard
            </h3>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
            <Typography variant="body2" style={{ fontSize: 18 }}>
              Our team works hard to bring our mission to life,
              <br /> but that doesn't mean that <br />
              we can't have fun while we're doing it!
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Values;
