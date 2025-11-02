function createCourseRoutes(app) {
  app.get("/courses/preview", function (req, res) {
    res.json({
      message: "courses endpoint",
    });
  });

  app.post("/course/purchase", function (req, res) {
    res.json({
      message: "purchase endpoint",
    });
  });
}

module.exports = {
  createCourseRoutes: createCourseRoutes,
};
