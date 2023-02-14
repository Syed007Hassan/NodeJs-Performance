const { Worker, isMainThread, workerData } = require("worker_threads");

if (isMainThread) {
  console.log(`Main Thread! Process id ${process.pid}`);
  new Worker(__filename, {
    workerData: [4, 45, 67, 4, 23],
  });
  new Worker(__filename, {
    workerData: [5, 95, 17, 42, 03],
  });
} else {
  console.log(`Worker Thread! Process id ${process.pid}`);
  console.log(`${workerData} sorted is ${workerData.sort()}  `);
}
