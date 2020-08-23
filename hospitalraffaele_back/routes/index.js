const userController = require('../controllers/users');
const patientController = require('../controllers/patients');
const roleController = require('../controllers/roles');
const featureController = require('../controllers/features');
const permissionController = require('../controllers/permissions');

module.exports = (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: "You're in my place",
  }));

  // API Services Users
  app.post('/api/user/create', userController.create);
  app.get('/api/user/list', userController.list);
  app.get('/api/user/find/username/:username', userController.find);

  // API Services Roles
  app.post('/api/role/create', roleController.create);
  app.get('/api/role/list', roleController.list);
  app.get('/api/role/find/name/:name', roleController.find);

  // API Services Features
  app.post('/api/feature/create', featureController.create);
  app.get('/api/feature/list', featureController.list);
  app.get('/api/feature/find/name/:name', featureController.find);

  // API Services Permissions
  app.post('/api/permission/create', permissionController.create);
  //app.get('/api/feature/list', featureController.list);
  //app.get('/api/feature/find/name/:name', featureController.find);

  // API Services Patients
  app.post('/api/patient/create', patientController.create);
  app.get('/api/patient/list', patientController.list);
  app.get('/api/patient/find/dni/:dni', patientController.find);
}

