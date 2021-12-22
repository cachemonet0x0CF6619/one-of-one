// deploy/00_deploy_erc721_mock.js

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy('ERC721Mock', {
    from: deployer,
    args: [ deployer ],
    log: true,
  });
}

module.exports.tags = ['ERC721Mock'];
