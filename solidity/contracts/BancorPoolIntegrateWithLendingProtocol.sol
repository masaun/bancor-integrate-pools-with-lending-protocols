pragma solidity 0.4.26;


import "./BancorNetwork";
import "./ContractIds";
import "./converter/BancorConverter";
import "./converter/BancorConverterFactory";
import "./converter/BancorConverterUpgrader";
import "./converter/BancorFormula";
import "./utility/ContractRegistry";
import "./utility/ContractFeatures";
import "./helpers/TestERC20Token";
import "./token/SmartToken";
import "./legacy/BancorGasPriceLimit";

import "./token/interfaces/IERC20Token.sol";
import "./utility/SafeMath.sol";
import "./utility/Owned.sol";

//@dev - Import compound
import "./compound-protocol/CTokenInterfaces.sol";

//@dev - Import curve.fi
import "./curve/interface/IyDAI.sol";



/**
 * The BancorPoolIntegrateWithLendingProtocol contract does this and that integrate bancor pool with lending protocol
 */
contract BancorPoolIntegrateWithLendingProtocol is Owned {
    using SafeMath for uint;

    IERC20Token public erc20;
    CErc20Interface public cERC20;
    CTokenInterface public cDAI;
    IyDAI public yDAI;

  	constructor(address _erc20, address _cERC20, address _cToken, address _yDAI) public {
        erc20 = IERC20Token(_erc20);
        cERC20 = CErc20Interface(_cERC20);
        cDAI = CTokenInterface(_cToken);
        yDAI = IyDAI(_yDAI);
  	}

    /**
     * @dev - deposit (Add Liguidly) with DAI
     **/
    function deposit(address _contract, uint _amount) public returns (bool) {
        // In progress
        erc20.transfer(_contract, _amount);
    }


    /**
     * @dev - Holding and earn interest with lending protocol. (e.g. cDAI, yDAI)
     **/
    function holdingAndEarnInterest() public returns (bool) {
        // In progress
    }

    
}
