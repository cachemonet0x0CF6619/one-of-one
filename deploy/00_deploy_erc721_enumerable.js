// deploy/00_deploy_erc721_enumerable.js

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy('MockERC721Enumerable', {
    from: deployer,
    args: [ deployer ],
    log: true,
  });
}

module.exports.tags = ['MockERC721Enumerable'];
