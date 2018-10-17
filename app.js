require("./db");

let express = require("express");
let app = express();

app.get("/", (request, response) => {
    response.send("Hello,Hevay!");
});

app.listen(8000);

   