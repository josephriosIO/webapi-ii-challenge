const server = require("./server");

//listens for localhost server
server.listen(4000, () => {
  console.log("\n *** RUNNING ON LOCALHOST:4000 ***  \n");
});
