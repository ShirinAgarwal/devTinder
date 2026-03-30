const express= require("express");

const app= express();

//use of middleware
//handling auth middleware for all GET POST etc. requests
app.use("/admin", (req, res, next) => {
    console.log("Admin auth is getting checked!");
    const token= "xyz";
    const isAdminAuthorized= token == "xyz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized request");
    } else {
        next();
    }
});

app.get("/admin/getAllData", (req, res) => {
    res.send("All data sent");
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("Delete a user");
});

app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777...");
});