pragma solidity 0.4.26;

//@dev - Import Bancor
import "./bancor/BancorNetwork.sol";
import "./bancor/ContractIds.sol";
import "./bancor/converter/BancorConverter.sol";
import "./bancor/converter/BancorConverterFactory.sol";
import "./bancor/converter/BancorConverterUpgrader.sol";
import "./bancor/converter/BancorFormula.sol";
import "./bancor/utility/ContractRegistry.sol";
import "./bancor/utility/ContractFeatures.sol";
import "./bancor/helpers/TestERC20Token.sol";
import "./bancor/token/SmartToken.sol";
//import "./bancor/legacy/BancorGasPriceLimit.sol";

import "./bancor/token/interfaces/IERC20Token.sol";
import "./bancor/utility/SafeMath.sol";
import "./bancor/utility/Owned.sol";

//@dev - Import Compound
import "./compound/CTokenInterfaces.sol";

//@dev - Import Curve.fi
import "./curve/interface/IyDAI.sol";



/**
 * The BancorPoolWithLendingProtocol contract does this and that integrate bancor pool with lending protocol
 */
contract BancorPoolWithLendingProtocol is Owned {
    using SafeMath for uint;

    BancorNetwork public bancorNetwork;
    BancorConverter public bancorConverter;
    BancorConverterFactory public bancorConverterFactory;
    BancorConverterUpgrader public bancorConverterUpgrader;
    BancorFormula public bancorFormula;
    ContractRegistry public contractRegistry;
    ContractFeatures public contractFeatures;
    TestERC20Token public testERC20Token;
    SmartToken public smartToken;
    //BancorGasPriceLimit public bancorGasPriceLimit;

    IERC20Token public erc20;
    CErc20Interface public cERC20;
    //CTokenInterface public cDAI;
    IyDAI public yDAI;

    address bancorConverter_;
    address smartToken_;
    address testERC20Token_;


  	constructor(
        address _bancorNetwork,
        address _bancorConverter,
        address _bancorConverterFactory,
        address _bancorConverterUpgrader,
        address _bancorFormula,
        address _contractRegistry,
        address _contractFeatures,
        address _testERC20Token,
        address _smartToken,
        //address _bancorGasPriceLimit,

        address _erc20, 
        address _cERC20, 
        //address _cToken, 
        address _yDAI
    ) public {
        // Step #1: Initial Setup
        bancorNetwork = BancorNetwork(_bancorNetwork);
        bancorConverter = BancorConverter(_bancorConverter);
        bancorConverterFactory = BancorConverterFactory(_bancorConverterFactory);
        bancorConverterUpgrader = BancorConverterUpgrader(_bancorConverterUpgrader);
        bancorFormula = BancorFormula(_bancorFormula);
        contractRegistry = ContractRegistry(_contractRegistry);
        contractFeatures = ContractFeatures(_contractFeatures);
        testERC20Token = TestERC20Token(_testERC20Token);
        smartToken = SmartToken(_smartToken);
        //bancorGasPriceLimit = BancorGasPriceLimit(_bancorGasPriceLimit);

        erc20 = IERC20Token(_erc20);
        cERC20 = CErc20Interface(_cERC20);
        //cDAI = CTokenInterface(_cToken);
        yDAI = IyDAI(_yDAI);

        //@dev - Assign contract address
        bancorConverter_ = _bancorConverter;
        smartToken_ = _smartToken;
        testERC20Token_ = _testERC20Token;


        //@dev - Step #6: Funding & Initial Supply
        // smartToken.issue(msg.sender, 20000);

        //@dev - Step #7: Activation
        // testERC20Token.transfer(bancorConverter_, 5000);
        // smartToken.transferOwnership(bancorConverter_);
        // bancorConverter.acceptTokenOwnership();
        // testERC20Token.approve(bancorConverter_, 500000000);

        //@dev - Step #8: Listing & Discovery
        // bancorConverter.convert(smartToken, testERC20Token, 500, 1);
  	}

    /**
     * @dev - deposit (Add Liguidly) with DAI
     **/
    function deposit(address _contract, uint _amount) public returns (bool) {

        //@dev - Step #6: Funding & Initial Supply
        // smartToken.issue(_contract, 20000);

        //@dev - Step #7: Activation
        // testERC20Token.transfer(bancorConverter_, 5000);
        // smartToken.transferOwnership(bancorConverter_);
        // bancorConverter.acceptTokenOwnership();
        // testERC20Token.approve(bancorConverter_, 500000000);

        //@dev - Step #8: Listing & Discovery
        // bancorConverter.convert(smartToken, testERC20Token, 500, 1);

        // In progress
        //erc20.transfer(_contract, _amount);

        return true;
    }


    /**
     * @dev - Holding and earn interest with lending protocol. (e.g. cDAI, yDAI)
     **/
    function holdingAndEarnInterest() public returns (bool) {
        // In progress
    }

    


    /*********************
     * Internal Contracts
     *********************/

    // Step #4: Reserve Definition
    //function addReserve() internal returns (bool) {}
    
    // Step #5: Conversion Fee
    //function setConversionFee() internal returns (bool) {}
    
    // Step #6: Funding & Initial Supply
    //function issueToPoolToken() internal returns (bool) {}
    
}
