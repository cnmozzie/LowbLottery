// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC721LOWB {

    function holderOf(uint256 tokenId) external view returns (address holder);
    function totalSupply() external view returns (uint n);

}
