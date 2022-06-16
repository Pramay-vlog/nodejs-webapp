const mongoose = require("mongoose");

// creating database
mongoose
  .connect("mongodb://localhost:27017/dynamic_webapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connection succesful");
  })
  .catch((e) => {
    console.log(e);
  });
