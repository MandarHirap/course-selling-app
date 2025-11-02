const express = require("express");
const { createUserRoutes } = require("./user");
const app = express();

app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(3000);
