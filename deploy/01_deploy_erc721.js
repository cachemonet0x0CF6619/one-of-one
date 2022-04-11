// deploy/01_deploy_erc721.js

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy('MockERC721', {
    from: deployer,
    args: [ deployer ],
    log: true,
  });
}

module.exports.tags = ['MockERC721'];
