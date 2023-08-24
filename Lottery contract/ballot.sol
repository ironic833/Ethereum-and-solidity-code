// SPDX-License-Identifier: MIT

pragma solidity ^0.8.11;

contract Lottery {
    // The address of the manager who oversees the lottery.
    address public manager;
    // An array containing addresses of participants who have entered the lottery.
    address payable[] public players;

    constructor() {
        // The contract deployer becomes the manager.
        manager = msg.sender;
    }

    /** 
     * Returns an array of addresses of participants in the lottery.
     * @return An array of payable addresses representing participants.
     */
    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }

    /** 
     * Returns the current amount of Ether held in the lottery contract.
     * @return The balance of the contract in Ether.
     */
    function getPrize() public view returns (uint) {
        return address(this).balance;
    }

    /** 
     * Allows a user to enter the lottery by sending 1 Ether.
     */
    function enter() public payable {
        // Ensure the player has not already registered for the lottery.
        for (uint i = 0; i < players.length; i++) {
            require(msg.sender != players[i], '409: Player is already registered.');
        }

        // Ensure the correct amount of Ether is sent to participate.
        require(msg.value == 1 ether, '402: Participation requires 1 ether.');

        // Add the player's address to the list of participants.
        players.push(payable(msg.sender));
    }

    /** 
     * Randomly selects a winner from the participants and sends them the prize money.
     * Restricted to be called only by the manager.
     */
     
    function pickWinner() public payable restricted {
        // Generate a random index to select a winner and transfer the prize.
        address payable winner = players[uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players))) % players.length];
        winner.transfer(address(this).balance);

        // Clear the list of participants to prepare for the next round.
        delete players;
    }

    /** 
     * Modifier that restricts access to functions only to the manager.
     */
    modifier restricted() {
        // Ensure the caller is the manager.
        require(msg.sender == manager, '403: Restricted to the manager.');

        // Continue with the function's execution.
        _;
    }
}
