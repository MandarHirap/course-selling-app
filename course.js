const { Router } = require("express");
const courseRouter = Router();

courseRouter.get("/courses/preview", function (req, res) {
  res.json({
    message: "courses endpoint",
  });
});

courseRouter.post("/course/purchase", function (req, res) {
  res.json({
    message: "purchase endpoint",
  });
});
module.exports = {
  courseRouter: courseRouter,
};
