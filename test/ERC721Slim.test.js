const { expect } = require('chai');
const { ethers } = require('hardhat');

describe.only('ERC721Slim', function () {
  let buyer, contract, other, owner;
  before(async () => {
    const [owner_, other_, buyer_] = await ethers.getSigners();
    buyer = buyer_;
    other = other_;
    owner = owner_;

    const Contract = await ethers.getContractFactory('ERC721Slim');
    contract = await Contract.deploy(
      [
        owner_.address,
        other.address,
        buyer.address,
      ],
      [50, 25, 25],
    );
    await contract.deployed();
  });
  it('should mint token', async () => {
    await contract
      .connect(buyer)
      .mint({ value: ethers.utils.parseEther('1') });
    expect(await contract.totalSupply()).to.equal(1);
  });
  it('should allow owner to claim funds', async () => {
    try {

      const prov = await ethers.getDefaultProvider();

      await prov.getBalance(owner.address);
      await prov.getBalance(contract.address);

      await contract.release(owner.address);
      await prov.getBalance(owner.address);
    } catch (error) {
      expect(error).to.not.exist;
    }
  });
  it('should allow other to claim funds', async () => {
    try {
      contract.release(other.address);
    } catch (error) {
      expect(error).to.not.exist;
    }
  });
});
