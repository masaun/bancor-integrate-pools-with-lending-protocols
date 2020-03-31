const Migrations = artifacts.require('Migrations');

module.exports = function(deployer, network, accounts) {
    deployer.deploy(Migrations);
};


// module.exports = function(deployer, network, accounts) {
//     if (network == "production" || network == "development")
//         deployer.deploy(artifacts.require("Migrations"));
// };
