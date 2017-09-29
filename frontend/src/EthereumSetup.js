import Web3 from 'web3';
//var Web3 = require('web3');
//var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io"));
//const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io"));

web3.eth.defaultAccount = '0x5d1EB7D49b406d210726CD627266247F86b71157';

console.log(web3.isConnected() ? 'true' : 'false')

var eightBallABI = [{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"transferFrom","outputs":[],"payable":true,"type":"function"}]

//var eightBallAddress = '0xbecb608fbae244ea6a269e81f26594fff97e2c2b';
var eightBallAddress = '0xcd7cab5535cf3e11adc0194c08bc8fd8ef3fb029';

const eightBallContract = web3.eth.contract(eightBallABI).at(eightBallAddress);
/*const eightBallContract = new web3.eth.contract([{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"transferFrom","outputs":[],"payable":true,"type":"function"}], '0xcd7cab5535cf3e11adc0194c08bc8fd8ef3fb029', {
    from: '0x5d1EB7D49b406d210726CD627266247F86b71157', // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});*/

export {eightBallContract, web3};
