function createUserRoutes(app) {
  app.get("/user/singup", function (req, res) {
    res.json({
      message: "signup endpoint",
    });
  });

  app.post("user/signin", function (req, res) {
    res.json({
      message: "signin endpoint",
    });
  });

  app.get("/user/purchases", function (req, res) {
    res.json({
      message: "purchaes endpoint",
    });
  });
}

module.exports = {
  createUserRoutes: createUserRoutes,
};
