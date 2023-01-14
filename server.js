const express = require("express");
const connectDB = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`RUNNING ON PORT, ${PORT}!`);
  });
});
