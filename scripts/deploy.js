const hre = require('hardhat')

async function main() {
  const Contract = await hre.ethers.getContractFactory('Divy');
  const contract = await Contract.deploy(...require('./deploy-args'));
  console.log(contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
