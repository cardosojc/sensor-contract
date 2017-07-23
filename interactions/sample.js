var web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var abi = [
    {
      "constant": false,
      "inputs": [],
      "name": "hw",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "myid",
          "type": "bytes32"
        },
        {
          "name": "result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "myid",
          "type": "bytes32"
        },
        {
          "name": "result",
          "type": "string"
        },
        {
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "update",
      "outputs": [],
      "payable": true,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "description",
          "type": "string"
        }
      ],
      "name": "newOraclizeQuery",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "price",
          "type": "string"
        }
      ],
      "name": "newQuerySensor",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "desc",
          "type": "string"
        }
      ],
      "name": "res",
      "type": "event"
    }];
var MyContract = web3.eth.contract(abi);
var myContractInstance = MyContract.at('0x0531a7c11c31d4505bd9d0fcb7e99e05f55423dd');
var account = '0x86a64895ce194ac7e5e8c57b4faf54641ec5f8cd';
var tst = myContractInstance.update();