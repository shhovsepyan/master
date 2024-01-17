Tesvan task


Smart contract test development and execution with the Hardhat Ethereum development environment

Using Hardhat as a Solidity smart contract development environment makes it easy to include automated tests as part of the development process. The ethers.js and Chai assertion libraries allow test code to deploy contracts and validate functionality.


Hardhat project automatically includes the ethers.js library and the Chai Assertion Library which together allow quick development and execution of smart contract tests. 

The project includes:

contracts/ is the folder where the smart contract Solidity code lives

test/ is the folder where the JavaScript test code will go

scripts/ is where we put deployment and other scripts.

Token.sol- implements the ERC20 standard token.

Test code is written in a file called Token.js within the test/ folder.
