const express = require("express");
const cluster = require("cluster");
const os = require("os");

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

// if (cluster.isMaster) {
//   console.log("Master process is running");

//os.cpus() returns the number of cores in our machine
//   let NoOfWorkers = os.cpus().length;
//   console.log(`No of workers: ${NoOfWorkers}`);

//fork() is a method that creates a new instance of our server
//   for (let i = 0; i < NoOfWorkers; i++) {
//     cluster.fork();
//     cluster.fork();
//   }
// } else {
//   console.log("Worker process is running");
//   app.listen(3000, () => {
//     console.log("Server is running on port 3000");
//   });
// }

// pm2 is a module that allows us to run our server in cluster mode
// pm2 start server.js -i 0
// -i 0 means that pm2 will create as many instances as there are cores in our machine

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
