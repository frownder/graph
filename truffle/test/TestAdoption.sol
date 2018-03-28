pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Adoption.sol";

contract TestAdoption {
    //Test 컨트랙트
    Adoption adoption = Adoption(DeployedAddresses.Adoption());

    //8번pet adopt테스트 - 의미없음
    function testUserCanAdoptPet() public {
        uint returnedId = adoption.adopt(8);

        uint expected = 8;

        Assert.equal(returnedId, expected, "Adoption of pet ID 8 should be recorded.");
    }

    // this가 위함수에서 지정한 adoper인지 테스트
    function testGetAdopterAddressByPetId() public {
        // 예상 owner = this contract
        address expected = this;

        address adopter = adoption.adopters(8);

        Assert.equal(adopter, expected, "Owner of pet ID 8 should be recorded.");
    }


}
