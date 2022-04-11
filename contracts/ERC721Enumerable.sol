// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.10;
import "./ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";

abstract contract ERC721Enumberable is ERC721, IERC721Enumerable {
    /// @dev revert attempt to enumerate non-existing tokens
    error TokenNotOwned();

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(IERC165, ERC721)
        returns (bool)
    {
        return
            interfaceId == type(IERC721Enumerable).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    function tokenOfOwnerByIndex(address owner, uint256 index)
        public
        view
        override
        returns (uint256 tokenId)
    {
        if (index < ERC721.balanceOf(owner)) revert TokenNotOwned();
        return index;
    }

    // @dev fixed for 1 of 1. initial holder provided at construction.
    function totalSupply() public view virtual override returns (uint256) {
        return 1;
    }

    function tokenByIndex(uint256 index)
        public
        view
        virtual
        override
        returns (uint256)
    {
        if (index != totalSupply()) revert TokenNotOwned();
        return index;
    }
}
