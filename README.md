<p align="center">
  <img alt="Pact" src="https://pact.io/assets/img/logo-black.png">
</p>

![Node.js](https://img.shields.io/badge/Node.js-18.16.0-brightgreen.svg)
![Pact](https://img.shields.io/badge/Pact%20-9.9.3-blue)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# Contract tests with Pact JS
Welcome to pact-js!

This project is an example implementation of using Pact with JavaScript (JS) to perform contract testing in applications. Pact is a tool that allows for contract testing between consumers and service providers, ensuring compatibility and reliable communication between them.

## 📋 Prerequisites
Before starting to use this project, make sure you have the following installed:

* Node.js (version 10 or higher)
* npm (Node.js Package Manager)
* Docker

## ⚙️ Installation
Follow these steps to install and set up the project locally:

Clone this repository on your local machine:

```sh
git clone https://github.com/aramirez5/pact-js.git
```
Navigate to the project directory:

```sh
cd pact-js
```
Install the dependencies using npm:

```sh
npm install
```

## 🚀 Usage
The project contains examples of how to use Pact in contract testing between a consumer and a service provider. Make sure to have the service provider running before running the consumer tests.

### 🧪 Running Consumer Tests
To run the consumer tests, use the following command:

```sh
npm run test:consumer
```
This will execute the tests defined in the test directory.

### 📝 Generating Contracts and Publishing
Pact allows generating contracts (JSON files) from the interactions between the consumer and the provider. These contracts can be later used to verify compatibility during testing.

First, we need to run the docker container:

```sh
docker compose up -d
```

Then, to generate and publish the contracts, use the following command:

```sh
npm run publish:contract
```
This will generate the contracts in the pacts directory and publish them to a local Pact server.

The results of the Pact will be available in this url:

```sh
http://127.0.0.1:9292/
```

### 🧪 Running Provider Tests
To run the provider tests, use the following command:

```sh
npm run test:provider
```

## 🤝 Contribution
Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please open an issue on the GitHub repository.

If you'd like to contribute code, please fork the repository, make your changes, and submit a pull request. Your contributions will help enhance the project for everyone!

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for more information.

## 📧 Contact
If you have any questions or need assistance with the project, you can reach out to the repository owner by opening an issue on the GitHub repository.
