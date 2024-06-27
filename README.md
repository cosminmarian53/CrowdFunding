# Crowd-Coin Kickstart
!!DISCLAIMER: THIS APPLICATION IS STILL WORK-IN-PROGRESS.
This repository contains a Kickstarter-like application built on Ethereum. It allows users to create and manage crowdfunding campaigns using smart contracts.

## Features

- **Campaign Creation:** Users can create new crowdfunding campaigns with specified funding goals and deadlines.
- **Contribution:** Supporters can contribute to campaigns with Ethereum.
- **Request Management:** Campaign creators can create requests for fund withdrawals, which must be approved by contributors.
- **Secure Transactions:** Utilizes Ethereum smart contracts for secure and transparent transactions.

## Getting Started

### Prerequisites
- Next.js
- React.js
- Web3.js
- Node.js
- NPM
- [MetaMask](https://metamask.io/) (for interacting with the Ethereum network)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/cosminmarian53/Crowd-Coin-kickstart-copy.git
   cd Crowd-Coin-kickstart-copy
   ```
2. Install dependencies
  ```sh
   npm install
  ```
3.Running the Application
In order to run the application, you have to first compile the contract and then deploy it:
  ```sh
  node compile.js
  node deploy.js
  ```
4.Start the local server
```sh
npm run dev
```
5. Testing
   You can test the application with:
   ```sh
    npm test
   ```
Project Structure

    components/: React components used in the application.
    ethereum/: Smart contracts and related scripts.
    pages/: Next.js pages.
    test/: Test cases for smart contracts and application logic.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

    Inspired by the Kickstarter platform.
    Built with Ethereum and Next.js.

## Contact
For questions or suggestions, please reach out to cosminmarian53.
