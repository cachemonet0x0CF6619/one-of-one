require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('hardhat-deploy');
require('hardhat-gas-reporter');
require('solidity-coverage');

module.exports = {
  defaultNetwork: 'hardhat',
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  networks: {
    hardhat: { chainId: 1337 },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [`0x${process.env.PK}`],
    },
  },
  solidity: {
    version: '0.8.10',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: '40',
    onlyCalledMethods: true,
    showTimeSpent: true,
    coinmarketcap: process.env.CMC_KEY
  },
  namedAccounts: {
    deployer: {
      default: 0, // take first account as deployer
    }
  }
};
