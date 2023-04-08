require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {

  defaultNetwork: "AltLayer",
  solidity: {
      compilers: [
          {
              version: '0.8.17',
              settings: {
                  optimizer: {
                      enabled: true,
                      runs: 50,
                  },
              },
          },
      ],
  },
  networks: {
    hardhat: {
      initialDate:'01 Jan 1970 00:00:00 GMT',
    },
    local: {
        url: 'http:127.0.0.1:8545',
        chainId: 111,
        accounts: [
        ]
    },
    AltLayer: {
      url: 'https://devnet-rpc.altlayer.io/',
      chainId: 9990,
      accounts: [
      ]
    },
  },
};
