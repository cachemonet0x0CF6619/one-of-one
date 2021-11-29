const { Interface } = require('@ethersproject/abi');

const contract = require('../artifacts/contracts/Divy.sol/Divy.json');

async function main() {
  const it = new Interface(contract.abi);
  const lol = it.encodeDeploy(require('./deploy-args')).replace("0x", "");
  console.log(lol);
}

main();

