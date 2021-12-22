// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

import "../Strings.sol";
import "../ERC721OneOfOne.sol";

contract ERC721Mock is ERC721OneOfOne {
    constructor(address to) ERC721("OneOfOne", "1_1") {
        if (to == address(0)) revert ZeroAddressError();
        holder = to;
        emit Transfer(address(0), holder, 1);
    }

    function tokenURI(uint256 tokenId) public pure returns (string memory) {
        if (tokenId != 1) revert NonExistentToken();
        return
            string(
                abi.encodePacked(
                    "ipfs://example.com/",
                    Strings.toString(tokenId),
                    ".json"
                )
            );
    }
}
