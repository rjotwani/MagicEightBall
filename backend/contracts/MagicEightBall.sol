pragma solidity ^0.4.11;

contract MagicEightBall {

    mapping (address => uint) private balances;
    mapping (address => mapping (address => uint256)) allowed;

    string[20] public answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Do not count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
    string question;

    function setQuestion(string _question) public {
        question = _question;
    }

    function getQuestion() public returns (string) {
        return question;
    }

    function transferFrom(address _from, address _to, uint _amount) returns (bool success) {
        if (balances[_from] >= _amount && allowed[_from][msg.sender] >= _amount && _amount > 0 && balances[_to] + _amount > balances[_to]) {
            balances[_from] -= _amount;
            allowed[_from][msg.sender] -= _amount;
            balances[_to] += _amount;
            return true;
        } else {
            return false;
        }
     }

    function answerQuestion() public returns (string answer) {
        if (balances[msg.sender] >= 1000000000000000) {
            transferFrom(msg.sender, 0xB94c53B0E67FABac3d97173482663Ef597D4174a, 1000000000000000);
            balances[msg.sender] -= 1000000000000000;
            uint a = bytes(question).length;

            if (a >= 20) {
                uint b = 20 / a;
                uint c = b * 20;
                answer = answers[c];
                return answer;
            }
            else {
                answer = answers[a];
                return answer;
            }

        }
    }
}
