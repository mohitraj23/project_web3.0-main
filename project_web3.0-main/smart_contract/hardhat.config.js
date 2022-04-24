require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-ropsten.alchemyapi.io/v2/yJHLq4LZpeFQNDNtn-JjbbkWOPWrLugo',
            accounts: ['b98bff15a5ba76d39be1e3b52edc1bd0c48c92443d4a44da3a7661994d1d579b'],
        },
    },
};