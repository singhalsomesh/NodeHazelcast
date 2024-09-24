const express = require('express');
const studentController = require('./../controller/studentController');

const studentRouter = express.Router();

studentRouter
  .route('/')
  .get(studentController.getStudentData)
  .post(studentController.createStudentData);

// studentRouter
//   .route('/:id')
//   .get(tourController.getTour)
//   .patch(tourController.updateTour)
//   .delete(tourController.deleteTour);


module.exports = studentRouter;