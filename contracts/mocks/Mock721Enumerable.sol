// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.10;

import "../ERC721Enumerable.sol";

contract MockERC721Enumerable is ERC721Enumberable {
    constructor(address to) ERC721("OneOfOne", "1_1") {
        if (to == address(0)) revert ZeroAddressError();
        holder = to;
        emit Transfer(address(0), holder, 1);
    }

    function tokenURI(uint256 tokenId) public pure returns (string memory) {
        if (tokenId != 1) revert NonExistentToken();
        return "ifps://example.com/1.json";
    }
}
