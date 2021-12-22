const { expect } = require('chai');
const { deployments, ethers } = require('hardhat');

const _INTERFACE_ID_ERC165 = '0x01ffc9a7';
const _INTERFACE_ID_ERC721 = '0x80ac58cd';
const _INTERFACE_ID_IERC721ENUMERABLE = '0x780e9d63';

describe('ERC721OneOfOne', function () {
  let contract;
  let deployer;

  beforeEach(async () => {
    [deployer] = await ethers.getSigners();

    await deployments.fixture();
    const Contract = await deployments.get('ERC721Mock');
    contract = await ethers.getContractAt(
      'ERC721Mock',
      Contract.address,
      deployer,
    );
  });
  it('supports the proper interfaces', async function () {
    expect(
        await contract.supportsInterface(
            _INTERFACE_ID_ERC165,
        ),
        'Error ERC165',
    ).to.be.true;

    expect(
        await contract.supportsInterface(
          _INTERFACE_ID_IERC721ENUMERABLE,
        ),
        'Error IERC721Enumberable',
    ).to.be.true;

    expect(
        await contract.supportsInterface(
            _INTERFACE_ID_ERC721,
        ),
        'Error ERC721',
    ).to.be.true;
  });
});
