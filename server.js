const express = require("express"); //Line 1
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
const port = process.env.PORT || 5000; //Line 3
const axios = require("axios");
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get("/", (req, res) => {
  //Line 9
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" }); //Line 10
});

app.get("/team_members", (req, res) => {
  //Line 9
  res.send({
    team_members: [
      {
        id: "1",
        Name: "Sata Naseri",
        title: "Founder & CEO",
        pictures:
          "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/sara.png?1616532581",
      },
      {
        id: "2",
        Name: "Søren Therkelsen",
        title: "Founder & COO",
        pictures:
          "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/soren.png?1616545852",
      },
      {
        id: "3",
        Name: "Brian Weinberg",
        title: "VP of R&D",
        pictures:
          "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/brian.png?1616545858",
      },
      {
        id: "4",
        Name: "Christin Vinther",
        title: "Admin",
        pictures:
          "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/christian.png?1616545865",
      },
      {
        id: "5",
        Name: "Matt Hardy",
        title: "Kit Production",
        pictures:
          "https://careers.qvin.com/uploads/1/2/3/5/123547525/editor/matt.png?1616533504",
      },
      {
        id: "6",
        Name: "Zufar Muhamadeev",
        title: "Backend",
        pictures:
          "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/zufar.png?1616545878",
      },
      {
        id: "7",
        Name: "Tudor Prodan",
        title: "Mobile",
        pictures:
          "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/tudor.png?1616545842",
      },
      {
        id: "8",
        Name: "Manmeet Chadha",
        title: "Software Quality",
        pictures:
          "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/manmeet.png?1616545871",
      },
      {
        id: "9",
        Name: "Miaden Savic",
        title: "App UX",
        pictures:
          "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/mladen.png?1616545818",
      },
      {
        id: "10",
        Name: "Joshua Ehrlich",
        title: " Software Lead",
        pictures:
          "https://careers.qvin.com/uploads/1/2/3/5/123547525/published/joshua.png?1634132795",
      },
      {
        id: "11",
        Name: "Dan Sivilich, Med Device",
        title: "Consultant",
        pictures:
          "https://careers.qvin.com/uploads/1/2/3/5/123547525/editor/dan.png?1616545890",
      },
      {
        id: "12",
        Name: "Aaron Joseph",
        title: "QMS, Consultant",
        pictures:
          "https://careers.qvin.com/uploads/1/2/3/5/123547525/editor/aaron.png?1616545893",
      },
    ],
  }); //Line 10
});

app.get("/jobs", (req, res) => {
  //Line 9
  res.send({
    jobs: [
      {
        id: "0",
        Job: "Web Developer, Menlo Park",
        url: "https://boards.greenhouse.io/qvin/jobs/5162295003",
      },
      {
        id: "1",
        Job: "Science Lead, Menlo Park",
        url: "https://boards.greenhouse.io/qvin/jobs/4943736003",
      },
      {
        id: "2",
        Job: "Medical Lead, Menlo Park",
        url: "https://boards.greenhouse.io/qvin/jobs/4318041003",
      },
      {
        id: "3",
        Job: "​Product Lead, Menlo Park ",
        url: "https://boards.greenhouse.io/qvin/jobs/",
      },
      {
        id: "4",
        Job: "Peoples Lead, Menlo Park (Soon!)",
        url: "https://boards.greenhouse.io/qvin/jobs/",
      },
      {
        id: "5",
        Job: "Web Developer, Menlo Park",
        url: "https://boards.greenhouse.io/qvin/jobs/",
      },
      {
        id: "6",
        Job: "Science Lead, Menlo Park",
        url: "https://boards.greenhouse.io/qvin/jobs/",
      },
      {
        id: "7",
        Job: "Medical Lead, Menlo Park",
        url: "https://boards.greenhouse.io/qvin/jobs/",
      },
      {
        id: "8",
        Job: "​Product Lead, Menlo Park ",
        url: "https://boards.greenhouse.io/qvin/jobs/",
      },
      {
        id: "9",
        Job: "Peoples Lead, Menlo Park (Soon!)",
        url: "https://boards.greenhouse.io/qvin/jobs/",
      },
    ],
  }); //Line 10
});

var JobApplications = {};

app.post("/job/:id", (req, res) => {
  const id = req.params.id;
  console.log("ID VALUE", id);
  const name = req.body.name;
  const email = req.body.email;
  const linkedin = req.body.linkedin;
  data = {
    name: name,
    email: email,
    linkedin: linkedin,
  };
  if (name === "" || email === "" || linkedin === "") {
    res.json({ status: 400, message: "Please fill all required fields" });
  } else {
    res.status(200).json({
      status: 200,
      data: data,
      message: "Details Succesfully Sent",
    });
    JobApplications = { ...JobApplications, ...data };
    console.log(JobApplications);
  }
});

console.log(JobApplications);
