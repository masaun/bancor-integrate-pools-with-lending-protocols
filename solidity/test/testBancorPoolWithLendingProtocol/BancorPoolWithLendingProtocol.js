/* global artifacts, contract, before, it, assert */
/* eslint-disable prefer-reflect */

const fs = require('fs');

const utils = require('./helpers/Utils');
const ContractRegistryClient = require('./helpers/ContractRegistryClient');

const BancorNetwork = artifacts.require('BancorNetwork');
const BancorConverter = artifacts.require('BancorConverter');
const SmartToken = artifacts.require('SmartToken');
const BancorFormula = artifacts.require('BancorFormula');
const ContractRegistry = artifacts.require('ContractRegistry');
const ContractFeatures = artifacts.require('ContractFeatures');
const ERC20Token = artifacts.require('ERC20Token');
const TestNonStandardERC20Token = artifacts.require('TestNonStandardERC20Token');
const BancorConverterFactory = artifacts.require('BancorConverterFactory');
const BancorConverterUpgrader = artifacts.require('BancorConverterUpgrader');


contract('BancorPoolWithLendingProtocol', accounts => {
    before(async () => {
        //@dev - Create instance of BancorPoolWithLendingProtocol contract
        let bancorPoolWithLendingProtocol = await BancorPoolWithLendingProtocol.new();

        console.log("=== Test ===");
    });
}

