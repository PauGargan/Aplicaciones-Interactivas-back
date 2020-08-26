const userController = require('../controllers/users');
const patientController = require('../controllers/patients');
const roleController = require('../controllers/roles');
const featureController = require('../controllers/features');
const permissionController = require('../controllers/permissions');
const availabilityController = require('../controllers/availability');
const appointmentController = require('../controllers/appointments');
const uploadController = require('../controllers/uploads');
const downloadController = require('../controllers/downloads');

module.exports = (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: "You're in my place",
  }));

  // API Services Users
  app.post('/api/user/create', userController.create);
  app.post('/api/user/update', userController.update);
  app.post('/api/user/disable', userController.disable);
  app.get('/api/user/list', userController.list);
  app.get('/api/user/find/email/:email', userController.find);
  app.get('/api/user/list/role/:role', userController.listByRole);

  // API Services Roles
  app.post('/api/role/create', roleController.create);
  app.post('/api/role/update', roleController.update);
  app.get('/api/role/list', roleController.list);
  app.get('/api/role/find/name/:name', roleController.find);

  // API Services Features
  app.post('/api/feature/create', featureController.create);
  app.get('/api/feature/list', featureController.list);
  app.get('/api/feature/find/name/:name', featureController.find);

  // API Services Permissions
  app.post('/api/permission/update', permissionController.update);
  app.get('/api/permission/list/role/:role', permissionController.find);
  //app.get('/api/feature/list', featureController.list);
  //app.get('/api/feature/find/name/:name', featureController.find);

  // API Services Patients
  app.post('/api/patient/update', patientController.update);
  app.get('/api/patient/list', patientController.list);
  app.get('/api/patient/find/dni/:dni', patientController.find);

  // API Services Availability
  app.post('/api/availability/create', availabilityController.create);
  app.get('/api/availability/list', availabilityController.list);
  app.get('/api/availability/find/doctor/:doctor', availabilityController.find);
  app.get('/api/availability/find/doctor/:doctor/date/:date', availabilityController.findByDate); 
  
  // API Services Appointments
  app.post('/api/appointment/create', appointmentController.create);
  app.post('/api/appointment/delete', appointmentController.delete);
  app.get('/api/appointment/find/doctor/:doctor', appointmentController.findByDoctor);
  app.get('/api/appointment/find/patient/:patient', appointmentController.findByPatient);
  app.get('/api/appointment/exists/doctor/:doctor/date/:date/time/:time', appointmentController.appointmentExists);

  // Upload and download
  app.post('/api/upload', uploadController.uploadFiles);
  app.get('/api/upload/patient/:patient', uploadController.findByPatient);
  app.get('/api/download/fileName/:fileName', downloadController.download); 

}

