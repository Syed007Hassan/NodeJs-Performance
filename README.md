# NodeJs-Performance

* [Maximizing Cluster Perfromance ](https://github.com/Syed007Hassan/NodeJs-Performance/tree/69dabf9ae8c2f96e53baee4f383aff521882e357):
  Using the amount of logical cores available on a system, increasing the performance of web servers so that the response time can be lesser when multiple requests are being made. A module that is responsible for providing cluster related API is called a cluster. It's NodeJS inbuilt module. Cluster uses single master(parent) process and many worker(child) process. See below diagram to know more…
  <p align="center">
  <img src="https://www.sysleaf.com/static/133a45ee56a5f63eb9f85182af914996/a6906/nodejs-cluster-arch.png">
</p>

* [Load Balancing using PM2 (Process Manager)](https://pm2.keymetrics.io/docs/usage/quick-start/): It is a runtime process management and monitoring tool with a built-in load balancer for NodeJS applications which makes managing them easier on production. 
- This could be installed globally on the system, using the following command:

```
   npm i pm2 -g
```

- How to use:
The best thing about PM2 is easiness. Some of the basic commands for using PM2 are following one:

- To Start:
The following command will start an application. 
```
pm2 start server.js
```
![image](https://user-images.githubusercontent.com/104893311/218752419-cb5a06ab-300b-4eb6-8483-c20a507a1c66.png)

8 instances shows the max number of logical cores available in a system.

- To Stop an Application/Process:
```
pm2 stop pid or App-name
```

- To Restart an Application/Process:
Restart will kill and start an application
```
pm2 restart pid or App-name
```

- To Reload an Application/Process:
As opposed to restart, which kills and restarts the process, reload achieves a 0-second-downtime reload.
```
pm2 reload pid or App-name
```

- To Delete an Application/Process:
```
pm2 delete pid or App-name
```

- To effect “All” Applications/Processes:
'All' attribute will affect every process and application.
```
pm2 reload all
```

- To Monitor:
```
pm2 monit
```

   ![Screenshot 2023-02-14 171203](https://user-images.githubusercontent.com/104893311/218751697-c5730607-8f75-4a04-bf5d-397777b13224.png)


- To View Logs:
```
pm2 logs
```
Worker Threads VS Cluster
* Cluster
- Each process has it’s own memory with it’s own Node (v8) instance
- One process is launched on each CPU

* Worker Thread
- One process total
- Each worker will have its own instance of V8 and Event Loop
- Shares memory with other threads

 <p align="center">
 <img src="https://user-images.githubusercontent.com/104893311/218793390-ee614551-49e5-4779-9958-213d7c36e52a.png">
 
 <img src="https://user-images.githubusercontent.com/104893311/218793994-9415f1c3-51d8-4b07-8f2c-1719fe25802a.png">
</p>

