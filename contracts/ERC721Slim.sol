// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/finance/PaymentSplitter.sol";

import "./lib/ERC721Enum.sol";

contract ERC721Slim is ERC721Enum, PaymentSplitter {
    uint256 public cost = 0.1 ether;

    event Minted(
        address indexed owner,
        string tokenURI,
        uint256 indexed mintTime
    );

    constructor(address[] memory _payees, uint256[] memory _shares)
        ERC721("Omg", "OMG")
        PaymentSplitter(_payees, _shares)
    {}

    function mint() public payable {
        require(_owners.length + 1 <= 3_000, "All gone!");
        require(msg.value >= cost, "Must send enough money!");
        _safeMint(msg.sender, _owners.length + 1);
        emit Minted(msg.sender, tokenURI(_owners.length), block.timestamp);
    }

    function totalSupply() public view override returns (uint256) {
        return _owners.length;
    }

    function tokenURI(uint256 tokenId) public pure returns (string memory) {
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
