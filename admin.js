const { Router } = require("express");
const adminRouterRouter = Router();

adminRouter.get("/singup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

adminRouter.post("/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});

adminRouter.post("/newCourse", function (req, res) {
  res.json({
    message: "purchaes endpoint",
  });
});

adminRouter.post("/DeleteCourse", function (req, res) {
  res.json({
    message: "purchaes endpoint",
  });
});

adminRouter.post("/AddCourse", function (req, res) {
  res.json({
    message: "purchaes endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
