import Web3 from 'web3';
//const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/"));

web3.eth.defaultAccount = '0x5d1EB7D49b406d210726CD627266247F86b71157';

console.log(web3.isConnected() ? 'true' : 'false')

var eightBallABI = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"answers","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"answerQuestion","outputs":[{"name":"answer","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_question","type":"string"}],"name":"setQuestion","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getQuestion","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"}]

//var eightBallAddress = '0x18530dc08ae1ea51c2904f5f66169d5425e3ba96';
var eightBallAddress = '0xcd7cab5535cf3e11adc0194c08bc8fd8ef3fb029';


const eightBallContract = web3.eth.contract(eightBallABI).at(eightBallAddress);

export {eightBallContract};
