const express = require("express");
const cluster = require("cluster");

const app = express();

const delay = (duration) => {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    //event loop is blocked
  }
};

app.get("/", (req, res) => {
  res.send(`Performance example: ${process.pid} `);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`Ding ding ding: ${process.pid}`);
});

//cluster is a module that allows us to create multiple instances of our server
//and distribute the load across them

if (cluster.isMaster) {
  console.log("Master process is running");
  //fork() is a method that creates a new instance of our server
  cluster.fork();
  cluster.fork();
} else {
  console.log("Worker process is running");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}
