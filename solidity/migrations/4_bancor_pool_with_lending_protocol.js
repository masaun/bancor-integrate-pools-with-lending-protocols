const BancorPoolWithLendingProtocol = artifacts.require('BancorPoolWithLendingProtocol');

const BancorNetwork = artifacts.require('BancorNetwork');
const ContractIds = artifacts.require('ContractIds');
const BancorConverter = artifacts.require('BancorConverter');
const SmartToken = artifacts.require('SmartToken');
const BancorFormula = artifacts.require('BancorFormula');
const BancorGasPriceLimit = artifacts.require('BancorGasPriceLimit');
const ContractRegistry = artifacts.require('ContractRegistry');
const ContractFeatures = artifacts.require('ContractFeatures');
const TestERC20Token = artifacts.require('TestERC20Token');
const BancorConverterFactory = artifacts.require('BancorConverterFactory');
const BancorConverterUpgrader = artifacts.require('BancorConverterUpgrader');

var _bancorNetwork = BancorNetwork.address;
var _bancorConverter = BancorConverter.address;
var _bancorConverterFactory = BancorConverterFactory.address;
var _bancorConverterUpgrader = BancorConverterUpgrader.address;
var _bancorFormula = BancorFormula.address;
var _contractRegistry = ContractRegistry.address;
var _contractFeatures = ContractFeatures.address;
var _testERC20Token = TestERC20Token.address;
var _smartToken = SmartToken.address;
var _bancorGasPriceLimit = BancorGasPriceLimit.address;

var _erc20 = "0xaD6D458402F60fD3Bd25163575031ACDce07538D";   // DAI on Ropsten
var _cERC20 = "0x6CE27497A64fFFb5517AA4aeE908b1E7EB63B9fF";  // cDAI on Ropsten
//var _cToken = "0x6CE27497A64fFFb5517AA4aeE908b1E7EB63B9fF";
var _yDAI = "0x9D25057e62939D3408406975aD75Ffe834DA4cDd";


module.exports = async function(deployer) {
    await deployer.deploy(BancorPoolWithLendingProtocol, 
                          _bancorNetwork,
                          _bancorConverter,
                          _bancorConverterFactory,
                          _bancorConverterUpgrader,
                          _bancorFormula,
                          _contractRegistry,
                          _contractFeatures,
                          _testERC20Token,
                          _smartToken,
                          _bancorGasPriceLimit,
                          _erc20, 
                          _cERC20, 
                          //_cToken, 
                          _yDAI);
};
