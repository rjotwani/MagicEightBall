import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io"));

web3.eth.defaultAccount = '0x5d1EB7D49b406d210726CD627266247F86b71157';

console.log(web3.isConnected() ? 'true' : 'false')

var eightBallABI = [{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"transferFrom","outputs":[],"payable":true,"type":"function"}]

var eightBallAddress = '0x23f13d15f130e20e0bdb7f741644b60d3efd3081';
//var eightBallAddress = '0xcd7cab5535cf3e11adc0194c08bc8fd8ef3fb029';

const eightBallContract = web3.eth.contract(eightBallABI).at(eightBallAddress);

export {eightBallContract, web3};
