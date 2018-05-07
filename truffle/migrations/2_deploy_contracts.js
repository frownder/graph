var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Adoption = artifacts.require("./Adoption.sol");
var ATUToken = artifacts.require("./ATUToken.sol");
var ATUUserList = artifacts.require("./ATUUserList.sol");

module.exports = function(deployer) {
    deployer.deploy(SimpleStorage);
    deployer.deploy(Adoption);
    deployer.deploy(ATUToken);
    deployer.deploy(ATUUserList);
};
