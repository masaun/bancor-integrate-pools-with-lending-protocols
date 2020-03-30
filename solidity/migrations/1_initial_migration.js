module.exports = function(deployer, network, accounts) {
    if (network == "production" || network == "development")
        deployer.deploy(artifacts.require("Migrations"));
};
