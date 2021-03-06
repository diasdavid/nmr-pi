var five = require('johnny-five');

var board = new five.Board({ port: '/dev/ttyS0'});
board.on('ready', function () {
  console.log('Board is ready');
});

var controllers = {};


var addController = function (path) {
  // 1. Require the controller
  var controller = require(path)(five);
  console.log('new controller added');
  console.log(controller);

  // 2. Add the controller to controller list
  controllers[controller.id] = controller;
};

var execute = function(controllerID, functionName) {
  console.log(controllerID, functionName);

  console.log(controllers[controllerID]);
  console.log(controllers[controllerID][functionName]);

  controllers[controllerID][functionName]();
};



// var listControllers = function () {

// };


module.exports = {
  addController: addController,
  execute: execute,
  board: board,
};