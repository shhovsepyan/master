require("@nomicfoundation/hardhat-toolbox");

require("@nomicfoundation/hardhat-chai-matchers");


const INFURA_API_KEY = "561b59da6a654ac99e1cb779931c8f2a";

const SEPOLIA_PRIVATE_KEY = "b35beebb41704994bcf95cacc1b127bbd97d6b3de13e075fc29bb8b2e55c895e";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
