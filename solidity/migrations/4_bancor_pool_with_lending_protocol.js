const BancorPoolWithLendingProtocol = artifacts.require('BancorPoolWithLendingProtocol');

const BancorNetwork = artifacts.require('BancorNetwork');
const ContractIds = artifacts.require('ContractIds');
const BancorConverter = artifacts.require('BancorConverter');
const SmartToken = artifacts.require('SmartToken');
const BancorFormula = artifacts.require('BancorFormula');
//const BancorGasPriceLimit = artifacts.require('BancorGasPriceLimit');
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
//var _bancorGasPriceLimit = BancorGasPriceLimit.address;

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
                          //_bancorGasPriceLimit,
                          _erc20, 
                          _cERC20, 
                          //_cToken, 
                          _yDAI);


    let contracts = {};

    let converter = contracts['CONVERTER'];

    //@dev - Step #6: Funding & Initial Supply
    let ir = await smartToken.issue(accounts[0], 20000);
    // console.log('ir res', ir);

    //@dev - Step #7: Activation
    let tr = await contracts['CONNECTOR_1'].transfer(converter.address, 5000);
    // console.log('tr res', tr);

    //@dev - Step #7: Activation
    let t0r = await smartToken.transferOwnership(converter.address);
    // console.log('t0r res', t0r);

    //@dev - Step #7: Activation
    let a0r = await converter.acceptTokenOwnership();
    // console.log('a0r res', a0r);

    let approveRes = await connectorToken.approve(converter.address, 500000000);

    console.log('approveRes', approveRes);

    //@dev - Step #8: Listing & Discovery
    let purchaseRes = await converter.convert(smartToken.address, connectorToken.address, 500, 1);

    console.log('purchaseRes', purchaseRes);

    let purchaseAmount1 = getConversionAmount(purchaseRes);

    console.log('purchase amount 1', purchaseAmount1)

    let purchaseRes2 = await converter.convert(smartToken.address, connectorToken.address, 700, 1);

    console.log('purchaseRes2', purchaseRes2);

    let purchaseRes3 = await converter.convert(connectorToken.address, smartToken.address, 200, 1);

    console.log('purchaseRes3', purchaseRes3);

};
