pragma solidity ^0.4.17;

import "../installed_contracts/zeppelin/contracts/token/StandardToken.sol";

contract ATUToken is StandardToken{

    uint public INITIAL_SUPPLY = 100000000; //1억개
    string public name = 'Test ATU Token';
    string public symbol = 'ATU';
    uint8 public decimals = 4; //토큰을 얼마나 잘게 나눌수 있느냐. 10**X
    address owner;

    uint256 public totalSupply_;

    bool public released = false;

    function ATUToken(){
        totalSupply_ = INITIAL_SUPPLY * 10 ** uint(decimals);
        balances[msg.sender] = INITIAL_SUPPLY; //각 계정별 잔액 저장. 상속받아 자동생성
        owner = msg.sender;
    }

    function release() public {
        require(owner == msg.sender);
        require(!released);
        released = true;
    }

    modifier onlyReleased() {
        require(released);
        _;
    }

    function transfer(address to, uint256 value) public onlyReleased returns (bool) {
        super.transfer(to, value);
    }
    function allowance(address owner, address spender) public onlyReleased view returns (uint256) {
        super.allowance(owner, spender);
    }
    function transferFrom(address from, address to, uint256 value) public onlyReleased returns (bool) {
        super.transferFrom(from, to, value);
    }
    function approve(address spender, uint256 value) public onlyReleased returns (bool) {
        super.approve(spender, value);
    }

}
