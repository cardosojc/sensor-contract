var QuerySensor = artifacts.require("./QuerySensor.sol");

module.exports = function(deployer) {
  deployer.deploy(QuerySensor);
};
