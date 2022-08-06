require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remind proof harvest option force gather'; 
let testAccounts = [
"0x6d35aa9eb717dc37236e9919390d58ba66b2b64417180deb339ad1af6516ab17",
"0x9b349b1dc95813d0ee38dcaf256779ab66dc5a0dfe3f7275397dd04c3d1e7663",
"0xcaf34ea3cb0e0359a7c22bfec4de7cc57af030fdef4868efec44a9c186590145",
"0x5a14f5692a75e0b73518eed3df7167ceddcf0b862e164d1c22d2ca5322bc680f",
"0xa654b0ec9f0aabb9898f396b992b95cb3cbe87d975cca767cf33d882c7f2fba4",
"0x9686f8a8e8caaac5b81cf6a39549d1f77ed8f9042a6381145a6e2e8fdb7fb976",
"0x68145090161e210fc56b5b39dd2e5e0f4e93fbe9d64023f43fdb347e30892eb1",
"0x7ebd78cf7f013d731e729318f5b99d63ebd3b20ec01c6087ebe598a7b234ac1d",
"0x907344f77faacc2984b5e40fe7384cf6f2393485ae4a84b7d0ed66b2b3336f56",
"0xea449d2d2378125d64b31efabedeb35959787361defa1cbef8f75a9369823dca"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

