const { Router } = require("express");
const userRouter = Router();

userRouter.get("/singup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

userRouter.post("/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});

userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "purchaes endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
