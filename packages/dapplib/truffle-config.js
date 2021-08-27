require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remain hospital imitate prize foam ten'; 
let testAccounts = [
"0x24fedc09d81ec7303cc029f634dafdf848b77ad5caee7c9ad7c402fe286eb456",
"0x6415edb125dc1adbc5832a322fd06b8f8036936041d85a46fb9b2969f2d57cd1",
"0xc44fa6d3c8806a5f60bbb3820a190bad4e53d8b4602c93bd404d05576764bb01",
"0xa6b0fd4a5e62ca11a84614fe5416367f2a361c3acd7ea7172d908f6d11c301a9",
"0x3bb7f70258c84be06258e022d4ed9984b2e03cff574c0cc41ec6d8f1a1ec3545",
"0x0d54110e8b00c1da072c68de01f7060a7450021999477d4216f558a585aa16a7",
"0xbcd3d39497ff46d958495ae74f770b51a924df1b2613421895557b99b1a2d816",
"0x0c1a04976fa32fc15b9e5bba3790b5c4ee988edae656359b2df7d2d42fe10a27",
"0xf157f4133b51c47ba60f5f0545e163d8b0ef529a881de5b263f189afa482ba72",
"0x250b4aee9739bbe1fd87a51f2cbecda9026520f32371dd7cf646d6e4be4cb9ba"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

