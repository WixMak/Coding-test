// import https from "https";

const express = require("express");
const { getInternetConnectionStatus } = require("./functions/getResponseStatus");
const FunctionRouter = require("./route/function-route");

const app = express();
const port = 8080;

//Cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-type, Authorization",
  );
  next();
});

app.get('/', (req, res) => {
  const uri = "https://www.google.com";
  getInternetConnectionStatus(uri, (status) => {
    res.send(`Connection condition: ${status}`);
  });

});

app.use(express.static("public"));

app.use("/api/functions", FunctionRouter);

//Server connection
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
