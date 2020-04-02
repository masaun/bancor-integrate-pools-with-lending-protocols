const BancorPoolWithLendingProtocol = artifacts.require('BancorPoolWithLendingProtocol');

const BancorNetwork = artifacts.require('BancorNetwork');
const ContractIds = artifacts.require('ContractIds');
const BancorConverter = artifacts.require('BancorConverter');
const SmartToken = artifacts.require('SmartToken');
const BancorFormula = artifacts.require('BancorFormula');
const ContractRegistry = artifacts.require('ContractRegistry');
const ContractFeatures = artifacts.require('ContractFeatures');
const TestERC20Token = artifacts.require('TestERC20Token');
const BancorConverterFactory = artifacts.require('BancorConverterFactory');
const BancorConverterUpgrader = artifacts.require('BancorConverterUpgrader');

const Web3Utils = require('web3-utils');

// var bancorNetwork = BancorNetwork.new();
// var contractIds = ContractIds.new();
// var bancorConverter = BancorConverter.new();
// var bancorConverterFactory = BancorConverterFactory.new();
// var bancorConverterUpgrader = BancorConverterUpgrader.new();
// var bancorFormula = BancorFormula.new();
// var contractRegistry = ContractRegistry.new();
// var contractFeatures = ContractFeatures.new();
// var testERC20Token = TestERC20Token.new();

var _bancorNetwork = BancorNetwork.address;
var _contractIds = ContractIds.address;
var _bancorConverter = BancorConverter.address;
var _bancorConverterFactory = BancorConverterFactory.address;
var _bancorConverterUpgrader = BancorConverterUpgrader.address;
var _bancorFormula = BancorFormula.address;
var _contractRegistry = ContractRegistry.address;
var _contractFeatures = ContractFeatures.address;
var _testERC20Token = TestERC20Token.address;
var _smartToken = SmartToken.address;

var _erc20 = "0xaD6D458402F60fD3Bd25163575031ACDce07538D";   // DAI on Ropsten
var _cERC20 = "0x6CE27497A64fFFb5517AA4aeE908b1E7EB63B9fF";  // cDAI on Ropsten
//var _cToken = "0x6CE27497A64fFFb5517AA4aeE908b1E7EB63B9fF";
var _yDAI = "0x9D25057e62939D3408406975aD75Ffe834DA4cDd";




module.exports = async function(deployer, network, accounts) {
    //@dev - Deploy BancorPoolWithLendingProtocol.sol
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
                          _erc20, 
                          _cERC20, 
                          //_cToken, 
                          _yDAI);

    console.log('=== accounts ===', accounts);

    //@dev - Create instance of contract
    let bancorConverter = await BancorConverter.new(_smartToken, _contractRegistry, 30000, _erc20, 250000);
    let smartToken = await SmartToken.new('Token1', 'TKN1', 18);
    let connectorToken = await TestERC20Token.new('Wrapped DAI 2', 'WDAI', 10000000);

    //@dev - Test
    let weiAmount = Web3Utils.toWei('0.1');
    console.log('=== weiAmount ===', weiAmount);

    //@dev - Step #6: Funding & Initial Supply
    let ir = await smartToken.issue(accounts[0], 20000);
    console.log('=== ir res ===', ir);

    //@dev - Step #7: Activation
    let tr = await connectorToken.transfer(_bancorConverter, 5000);
    console.log('=== tr res ===', tr);

    //@dev - Step #7: Activation
    let t0r = await smartToken.transferOwnership(_bancorConverter);
    console.log('=== t0r res ===', t0r);

    //@dev - Step #7: Activation
    //let a0r = await bancorConverter.acceptTokenOwnership();
    //console.log('=== a0r res ===', a0r);

    let approveRes = await connectorToken.approve(_bancorConverter, 500000000);
    console.log('approveRes', approveRes);

    //@dev - Step #8: Listing & Discovery
    let purchaseRes = await bancorConverter.convert(_smartToken, connectorToken.address, 500, 1);
    console.log('purchaseRes', purchaseRes);

    let purchaseAmount1 = getConversionAmount(purchaseRes);
    console.log('purchase amount 1', purchaseAmount1);

    let purchaseRes2 = await bancorConverter.convert(_smartToken, connectorToken.address, 700, 1);
    console.log('purchaseRes2', purchaseRes2);

    let purchaseRes3 = await bancorConverter .convert(connectorToken.address, _smartToken, 200, 1);
    console.log('purchaseRes3', purchaseRes3);

    function getConversionAmount(transaction, logIndex = 0) {
        return transaction.logs[logIndex].args._return.toNumber();
    }
};
