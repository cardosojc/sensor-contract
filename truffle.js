module.exports = {
  networks: {
    development: {
      host: "104.198.105.192",
      port: 8545,
      network_id: "*",
      gas: 2000000
    }
  }
};
//this should be runned on web3js console before attemping to deploy the contract
//web3.personal.unlockAccount('0xfE19F4197FFE5c2A1C1D7f051c77637959d8FFc7','#####');
