/* global artifacts, contract, before, it, assert */
/* eslint-disable prefer-reflect */

const fs = require('fs');

const utils = require('../helpers/Utils');
const ContractRegistryClient = require('../helpers/ContractRegistryClient');

const BancorNetwork = artifacts.require('BancorNetwork');
const BancorConverter = artifacts.require('BancorConverter');
const BancorConverterFactory = artifacts.require('BancorConverterFactory');
const BancorConverterUpgrader = artifacts.require('BancorConverterUpgrader');
const BancorFormula = artifacts.require('BancorFormula');
const ContractRegistry = artifacts.require('ContractRegistry');
const ContractFeatures = artifacts.require('ContractFeatures');
const TestERC20Token = artifacts.require('TestERC20Token');
const SmartToken = artifacts.require('SmartToken');

//@dev - Call artifact file of BancorPoolWithLendingProtocol.sol
const BancorPoolWithLendingProtocol = artifacts.require('BancorPoolWithLendingProtocol');


contract('BancorPoolWithLendingProtocol', accounts => {
    before(async () => {
        //@dev - In progress
    });

    it('Testing BancorPoolWithLendingProtocol.sol', async () => {
        //@dev - Define assigned value in constructor of BancorPoolWithLendingProtocol.sol
        const _bancorNetwork = BancorNetwork.address;
        const _bancorConverter = BancorConverter.address;
        const _bancorConverterFactory = BancorConverterFactory.address;
        const _bancorConverterUpgrader = BancorConverterUpgrader.address;
        const _bancorFormula = BancorFormula.address;
        const _contractRegistry = ContractRegistry.address;
        const _contractFeatures = ContractFeatures.address;
        const _testERC20Token = TestERC20Token.address;
        const _smartToken = SmartToken.address;
        const _erc20 = "0xaD6D458402F60fD3Bd25163575031ACDce07538D";   // DAI on Ropsten
        const _cERC20 = "0x6CE27497A64fFFb5517AA4aeE908b1E7EB63B9fF";  // cDAI on Ropsten
        const _yDAI = "0x9D25057e62939D3408406975aD75Ffe834DA4cDd";

        //@dev - Create instance of BancorPoolWithLendingProtocol contract
        let bancorPoolWithLendingProtocol = await BancorPoolWithLendingProtocol.new(_bancorNetwork, 
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
                                                                                    _yDAI);

        //@dev - Execute deposit()
        const _contract = bancorPoolWithLendingProtocol.address;
        const _amount = 100;
        let response = await bancorPoolWithLendingProtocol.deposit(_contract, _amount);
        // Log just for comfirming
        console.log("=== Finished testing of BancorPoolWithLendingProtocol.sol ===");
        console.log("=== response of deposit() ===", response);        
    });


    // it('Testing addReserve cDAI and create cDAIBNT of PoolToken', async () => {
    //     //@dev - Define assigned value in constructor of BancorPoolWithLendingProtocol.sol
    //     const _bancorNetwork = BancorNetwork.address;
    //     const _bancorConverter = BancorConverter.address;
    //     const _bancorConverterFactory = BancorConverterFactory.address;
    //     const _bancorConverterUpgrader = BancorConverterUpgrader.address;
    //     const _bancorFormula = BancorFormula.address;
    //     const _contractRegistry = ContractRegistry.address;
    //     const _contractFeatures = ContractFeatures.address;
    //     const _testERC20Token = TestERC20Token.address;
    //     const _smartToken = SmartToken.address;
    //     const _erc20 = "0xaD6D458402F60fD3Bd25163575031ACDce07538D";   // DAI on Ropsten
    //     const _cERC20 = "0x6CE27497A64fFFb5517AA4aeE908b1E7EB63B9fF";  // cDAI on Ropsten
    //     const _yDAI = "0x9D25057e62939D3408406975aD75Ffe834DA4cDd";

    //     //@dev - Create instance of BancorPoolWithLendingProtocol contract
    //     let bancorPoolWithLendingProtocol = await BancorPoolWithLendingProtocol.new(_bancorNetwork, 
    //                                                                                 _bancorConverter, 
    //                                                                                 _bancorConverterFactory,
    //                                                                                 _bancorConverterUpgrader,
    //                                                                                 _bancorFormula,
    //                                                                                 _contractRegistry,
    //                                                                                 _contractFeatures,
    //                                                                                 _testERC20Token,
    //                                                                                 _smartToken,
    //                                                                                 _erc20,
    //                                                                                 _cERC20,
    //                                                                                 _yDAI);
    //     // Log just for comfirming
    //     console.log("=== Finished testing addReserve cDAI and create cDAIBNT of PoolToken ===");
    // });
});

