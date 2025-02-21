// the address of the server connected to the network is: http://localhost:8383
const express = require("express");
const app = express();
const PORT = 8383;
let data = ["Purab"];

//middleware
app.use(express.json());

// Type 1 - website endpoints
app.get("/", (req, res) => {
  res.send(`
    <body style="background: pink; color: blue;">
    <h1>Data:</h1>
    <p>${JSON.stringify(data)}</p>
    <a href = "/dashboard"><h2>Go to Dashboard</h2></a>
    </body>
    `);
});

app.get("/dashboard", (req, res) => {
  res.send(`
    <body>
    <h1>Dashboard</h1>
    <a href = "/"><h2>Home</h2></a>
    </body>
    
    `);
});

// Type 2 - API endpoints
app.get("/api/data", (req, res) => {
  res.send(data);
});

// create user
app.post("/api/data", (req, res) => {
  const newData = req.body;
  console.log(newData);
  data.push(newData.name);
  res.sendStatus(201);
});

//delete data
app.delete("/api/data", (req, res) => {
  data.pop();
  console.log(`we delted the last element of the array`);
  res.sendStatus(203);
});

app.listen(PORT, () => console.log(`Server is started on PORT ${PORT}`));
