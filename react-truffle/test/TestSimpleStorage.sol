pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SimpleStorage.sol";

contract TestSimpleStorage {

    //Test 컨트랙트
    SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());

    function testSimpleStorage() public {

        simpleStorage.set(10);

        uint i = simpleStorage.get();

        Assert.equal(i, 10, 'get');
    }
}
