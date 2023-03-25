// SPDX-License-Identifier: Unlicense

pragma solidity >0.8.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "openzeppelin-solidity/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract Choco is ERC20("Choco", "CCT"), ERC20Burnable, Ownable {
    uint256 private cap = 50_000_000 * 10 ** uint256(18);
    constructor(){
        console.log("owner: %s , cap: %s ", msg.sender, cap);
        _mint(msg.sender, cap);
        transferOwnership(msg.sender);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(
            ERC20.totalSupply() + amount <= cap,
            "Choco: cap exceeded"
        );
        _mint(to, amount);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20) {
        super._beforeTokenTransfer(from, to, amount);
    }
}
