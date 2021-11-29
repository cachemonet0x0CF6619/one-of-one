require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('hardhat-gas-reporter');
require('solidity-coverage');

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: { chainId: 1337 },
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
    gasPrice: '100',
    coinmarketcap: process.env.CMC_KEY
  }
};
