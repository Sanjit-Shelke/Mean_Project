
const express = require("express");
const app = express();
const multer = require("multer");


const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const add = require("./db.add.user")


app.post("/auth-user", async (req, res) => {
    try {
        const input = req.body;
        await add.authenticateUser(input);
        res.json({ opr: true });
    }
    catch (err) {
        res.json({ opr: false });
    }
});

app.post("/addusers", (req, res) => {
    try {
        const input = req.body;
        console.log(input)
        let result = add.adduser(input);
        console.log(result)

        res.json({
            message: "success"
        })
    } catch (err) {
        res.json({
            message: "Failure"
        })
    }

});


app.post("/changepass", async (req, res) => {
    try {
        const input = req.body;

        await add.updateuser(input);
    

        res.json({
            message: "success"
        })
    } catch (err) {
        res.json({
            message: "Failure"
        })
    }
});


app.listen(3000);




























// const express = require("express");
// const app = express();

// const dbAddUser = require('./db.add.user');


// app.get("/user", (req, res) => {
//     try {

//         const input = req.query;

//         await dbAddUser.addUser(input);

//         res.json({ message: 'Successful!' })
//     }
//     catch (err) {
        
//         res.json({ message: 'Failure' })
//     }
// });

// app.listen(3000);