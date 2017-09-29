pragma solidity ^0.4.11;

contract MagicEightBall {

    mapping (address => uint) private balances;
    mapping (address => mapping (address => uint256)) allowed;
    uint cost = 1000000000000000;

    modifier costs(uint price) {
        if (msg.value >= price) {
            _;
        }
    }

    function transferFrom(address _to) public payable costs(cost) {
        if (balances[msg.sender] >= cost && allowed[msg.sender][msg.sender] >= cost && cost > 0 && balances[_to] + cost > balances[_to]) {
            balances[msg.sender] -= cost;
            allowed[msg.sender][msg.sender] -= cost;
            balances[_to] += cost;
        } else {
        }
    }

}
