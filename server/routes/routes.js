const PirateController = require("../controller/controller");

module.exports = app => {
  app.get("/api/pirate", PirateController.findAllPirates);
  app.get("/api/pirate/captain", PirateController.findCaptain);//
  app.get("/api/pirate/:id", PirateController.findOneSinglePirate);
  app.put("/api/pirate/update/:id", PirateController.updateExistingPirate);
  app.post("/api/pirate/new", PirateController.createNewPirate);
  app.delete("/api/pirate/delete/:id", PirateController.deleteAnExistingPirate);

  //user
  // app.get("/api/users/", PirateController.findAllUsers);
  // app.get("/api/users/:iddd", PirateController.findOneSingleUser);
  // app.put("/api/users/update/:id", PirateController.updateExistingUser);
  // app.post("/api/users/new", PirateController.createNewUser);
  // app.delete("/api/users/delete/:id", PirateController.deleteAnExistingUser);
};