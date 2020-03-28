pragma solidity 0.4.26;

import "./token/interfaces/IERC20Token.sol";

import "./openzeppelin-solidity/contracts/math/SafeMath.sol";
import "./openzeppelin-solidity/contracts/ownership/Ownable.sol";


/**
 * The BancorPoolIntegrateWithLendingProtocol contract does this and that integrate bancor pool with lending protocol
 */
contract BancorPoolIntegrateWithLendingProtocol is Ownable {
    using SafeMath for uint;

    IERC20Token public erc20;

  	constructor(address _erc20) public {
        erc20 = IERC20Token(_erc20);
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
