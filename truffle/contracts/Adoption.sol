pragma solidity ^0.4.17;

contract Adoption {

    // address 선언
    address[16] public adopters;

    // petId를 발신자에게 할당
    function adopt(uint petId) public returns (uint) {
        require(petId >= 0 && petId <= 15);

        adopters[petId] = msg.sender;

        return petId;
    }

    // 리턴 adopters
    function getAdopters() public view returns (address[16]) {
        return adopters;
    }



}
