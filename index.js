import exp from "constants";
import express from "express";
import path from "path";
const app = express();



app.use((req, res, next) => {
    console.log(req.url);
    //res.send('some testing');
    next();
})

app.use(express.static("test"));

app.get("/", (req, res) => {

    res.sendFile(path.resolve("test/test.html"));
})

app.get("/person", (req, res) => {
    res.send({
        name: 'Anna',
        age: 70,
        country: 'Brazil'
    })
})

app.listen(8080);