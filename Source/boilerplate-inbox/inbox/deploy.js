const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'brother gift math cattle check grant wealth mass eyebrow limit veteran melt',
    'https://goerli.infura.io/v3/8164c6d96f1b43d9b3aa39cd7060e712'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!']})
        .send({ gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);

    provider.engine.stop()
};

deploy();