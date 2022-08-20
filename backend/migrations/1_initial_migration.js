var NoteContract = artifacts.require("NoteContract");

module.exports = function(deployer) {
  // Deploy the Migrations contract as our only task
  deployer.deploy(NoteContract);
};
