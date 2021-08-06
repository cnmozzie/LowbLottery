const LowbLottery = artifacts.require("LowbLottery");

module.exports = function(deployer) {
  const nftAddress = '0xCf57667f3c107Cd97105B9CD97c81C21aB8ba0C5'; 
  const walletAddress = '0x568903F6A2CE809ac14E189cF31dD27992A1E4Bc'; 
  deployer.deploy(LowbLottery, walletAddress, nftAddress);
};
