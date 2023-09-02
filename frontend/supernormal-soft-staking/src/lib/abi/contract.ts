const contract = {
  "contractName": "ERC20Basic",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "Deposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"Deposit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/ERC20Basic.sol\":\"ERC20Basic\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32\",\"dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"project:/contracts/ERC20Basic.sol\":{\"keccak256\":\"0x84647f1a5cd78ca0ad2e4761cfada7af70a5c834d348c5a362cee285fdd77254\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8a4d4c5c3f74aa72682e52abb840eaa5519668e369ff9e03a58e7d8cc1e05d49\",\"dweb:/ipfs/QmaYyWHUwYPn25oANiSw4fwRUWB5Kz6ByCkC5GzNr856Qj\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6104aa8061010d6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063715018a6146100515780638da5cb5b1461005b578063ed21248c14610079578063f2fde38b14610083575b600080fd5b61005961009f565b005b6100636100b3565b60405161007091906102ec565b60405180910390f35b6100816100dc565b005b61009d60048036038101906100989190610338565b6100de565b005b6100a7610161565b6100b160006101df565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b565b6100e6610161565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610155576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014c906103e8565b60405180910390fd5b61015e816101df565b50565b6101696102a3565b73ffffffffffffffffffffffffffffffffffffffff166101876100b3565b73ffffffffffffffffffffffffffffffffffffffff16146101dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101d490610454565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102d6826102ab565b9050919050565b6102e6816102cb565b82525050565b600060208201905061030160008301846102dd565b92915050565b600080fd5b610315816102cb565b811461032057600080fd5b50565b6000813590506103328161030c565b92915050565b60006020828403121561034e5761034d610307565b5b600061035c84828501610323565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006103d2602683610365565b91506103dd82610376565b604082019050919050565b60006020820190508181036000830152610401816103c5565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061043e602083610365565b915061044982610408565b602082019050919050565b6000602082019050818103600083015261046d81610431565b905091905056fea2646970667358221220e16d4637abaeb1d0580efc952cde7ea9b9befd9e0a5a9f2cfd31d9b6a67b1d3b64736f6c63430008130033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c8063715018a6146100515780638da5cb5b1461005b578063ed21248c14610079578063f2fde38b14610083575b600080fd5b61005961009f565b005b6100636100b3565b60405161007091906102ec565b60405180910390f35b6100816100dc565b005b61009d60048036038101906100989190610338565b6100de565b005b6100a7610161565b6100b160006101df565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b565b6100e6610161565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610155576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014c906103e8565b60405180910390fd5b61015e816101df565b50565b6101696102a3565b73ffffffffffffffffffffffffffffffffffffffff166101876100b3565b73ffffffffffffffffffffffffffffffffffffffff16146101dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101d490610454565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102d6826102ab565b9050919050565b6102e6816102cb565b82525050565b600060208201905061030160008301846102dd565b92915050565b600080fd5b610315816102cb565b811461032057600080fd5b50565b6000813590506103328161030c565b92915050565b60006020828403121561034e5761034d610307565b5b600061035c84828501610323565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006103d2602683610365565b91506103dd82610376565b604082019050919050565b60006020820190508181036000830152610401816103c5565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061043e602083610365565b915061044982610408565b602082019050919050565b6000602082019050818103600083015261046d81610431565b905091905056fea2646970667358221220e16d4637abaeb1d0580efc952cde7ea9b9befd9e0a5a9f2cfd31d9b6a67b1d3b64736f6c63430008130033",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:3713:5",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "52:81:5",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "62:65:5",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "77:5:5"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "84:42:5",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "73:3:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "73:54:5"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "62:7:5"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "34:5:5",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "44:7:5",
                "type": ""
              }
            ],
            "src": "7:126:5"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "184:51:5",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "194:35:5",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "223:5:5"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "205:17:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "205:24:5"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "194:7:5"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "166:5:5",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "176:7:5",
                "type": ""
              }
            ],
            "src": "139:96:5"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "306:53:5",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "323:3:5"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "346:5:5"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "328:17:5"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "328:24:5"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "316:6:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "316:37:5"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "316:37:5"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "294:5:5",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "301:3:5",
                "type": ""
              }
            ],
            "src": "241:118:5"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "463:124:5",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "473:26:5",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "485:9:5"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "496:2:5",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "481:3:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "481:18:5"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "473:4:5"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "553:6:5"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "566:9:5"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "577:1:5",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "562:3:5"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "562:17:5"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "509:43:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "509:71:5"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "509:71:5"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "435:9:5",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "447:6:5",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "458:4:5",
                "type": ""
              }
            ],
            "src": "365:222:5"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "633:35:5",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "643:19:5",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "659:2:5",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "653:5:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "653:9:5"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "643:6:5"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "626:6:5",
                "type": ""
              }
            ],
            "src": "593:75:5"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "763:28:5",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "780:1:5",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "783:1:5",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "773:6:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "773:12:5"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "773:12:5"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "674:117:5"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "886:28:5",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "903:1:5",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "906:1:5",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "896:6:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "896:12:5"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "896:12:5"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "797:117:5"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "963:79:5",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1020:16:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1029:1:5",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1032:1:5",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1022:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1022:12:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1022:12:5"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "986:5:5"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1011:5:5"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "993:17:5"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "993:24:5"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "983:2:5"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "983:35:5"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "976:6:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "976:43:5"
                  },
                  "nodeType": "YulIf",
                  "src": "973:63:5"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "956:5:5",
                "type": ""
              }
            ],
            "src": "920:122:5"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1100:87:5",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1110:29:5",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1132:6:5"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1119:12:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1119:20:5"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1110:5:5"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1175:5:5"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "1148:26:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1148:33:5"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1148:33:5"
                }
              ]
            },
            "name": "abi_decode_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "1078:6:5",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1086:3:5",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1094:5:5",
                "type": ""
              }
            ],
            "src": "1048:139:5"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1259:263:5",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1305:83:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "1307:77:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1307:79:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1307:79:5"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1280:7:5"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1289:9:5"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1276:3:5"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1276:23:5"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1301:2:5",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1272:3:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1272:32:5"
                  },
                  "nodeType": "YulIf",
                  "src": "1269:119:5"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1398:117:5",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1413:15:5",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1427:1:5",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1417:6:5",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1442:63:5",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1477:9:5"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1488:6:5"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1473:3:5"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1473:22:5"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1497:7:5"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "1452:20:5"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1452:53:5"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1442:6:5"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1229:9:5",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1240:7:5",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1252:6:5",
                "type": ""
              }
            ],
            "src": "1193:329:5"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1624:73:5",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1641:3:5"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1646:6:5"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1634:6:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1634:19:5"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1634:19:5"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1662:29:5",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1681:3:5"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1686:4:5",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1677:3:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1677:14:5"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "1662:11:5"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1596:3:5",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1601:6:5",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "1612:11:5",
                "type": ""
              }
            ],
            "src": "1528:169:5"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1809:119:5",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "1831:6:5"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1839:1:5",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1827:3:5"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1827:14:5"
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "1843:34:5",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1820:6:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1820:58:5"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1820:58:5"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "1899:6:5"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1907:2:5",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1895:3:5"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1895:15:5"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "1912:8:5",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1888:6:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1888:33:5"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1888:33:5"
                }
              ]
            },
            "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "1801:6:5",
                "type": ""
              }
            ],
            "src": "1703:225:5"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2080:220:5",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2090:74:5",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2156:3:5"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2161:2:5",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2097:58:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2097:67:5"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2090:3:5"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2262:3:5"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                      "nodeType": "YulIdentifier",
                      "src": "2173:88:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2173:93:5"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2173:93:5"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2275:19:5",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2286:3:5"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2291:2:5",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2282:3:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2282:12:5"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "2275:3:5"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "2068:3:5",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2076:3:5",
                "type": ""
              }
            ],
            "src": "1934:366:5"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2477:248:5",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2487:26:5",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2499:9:5"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2510:2:5",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2495:3:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2495:18:5"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2487:4:5"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2534:9:5"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2545:1:5",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2530:3:5"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2530:17:5"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2553:4:5"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2559:9:5"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2549:3:5"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2549:20:5"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2523:6:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2523:47:5"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2523:47:5"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2579:139:5",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2713:4:5"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2587:124:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2587:131:5"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2579:4:5"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2457:9:5",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2472:4:5",
                "type": ""
              }
            ],
            "src": "2306:419:5"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2837:76:5",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "2859:6:5"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2867:1:5",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2855:3:5"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2855:14:5"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "2871:34:5",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2848:6:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2848:58:5"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2848:58:5"
                }
              ]
            },
            "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "2829:6:5",
                "type": ""
              }
            ],
            "src": "2731:182:5"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3065:220:5",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3075:74:5",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3141:3:5"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3146:2:5",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3082:58:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3082:67:5"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "3075:3:5"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3247:3:5"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                      "nodeType": "YulIdentifier",
                      "src": "3158:88:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3158:93:5"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3158:93:5"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3260:19:5",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3271:3:5"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3276:2:5",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3267:3:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3267:12:5"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "3260:3:5"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "3053:3:5",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "3061:3:5",
                "type": ""
              }
            ],
            "src": "2919:366:5"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3462:248:5",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3472:26:5",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3484:9:5"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3495:2:5",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3480:3:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3480:18:5"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3472:4:5"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3519:9:5"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3530:1:5",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3515:3:5"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3515:17:5"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3538:4:5"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3544:9:5"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3534:3:5"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3534:20:5"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3508:6:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3508:47:5"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3508:47:5"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3564:139:5",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3698:4:5"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3572:124:5"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3572:131:5"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3564:4:5"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3442:9:5",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3457:4:5",
                "type": ""
              }
            ],
            "src": "3291:419:5"
          }
        ]
      },
      "contents": "{\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: new owner is the zero a\")\n\n        mstore(add(memPtr, 32), \"ddress\")\n\n    }\n\n    function abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: caller is not the owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
      "id": 5,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "112:112:2:-:0;;;150:17;;;;;;;;;;936:32:0;955:12;:10;;;:12;;:::i;:::-;936:18;;;:32;;:::i;:::-;112:112:2;;640:96:1;693:7;719:10;712:17;;640:96;:::o;2426:187:0:-;2499:16;2518:6;;;;;;;;;;;2499:25;;2543:8;2534:6;;:17;;;;;;;;;;;;;;;;;;2597:8;2566:40;;2587:8;2566:40;;;;;;;;;;;;2489:124;2426:187;:::o;112:112:2:-;;;;;;;",
  "deployedSourceMap": "112:112:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1824:101:0;;;:::i;:::-;;1201:85;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;177:44:2;;;:::i;:::-;;2074:198:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1824:101;1094:13;:11;:13::i;:::-;1888:30:::1;1915:1;1888:18;:30::i;:::-;1824:101::o:0;1201:85::-;1247:7;1273:6;;;;;;;;;;;1266:13;;1201:85;:::o;177:44:2:-;:::o;2074:198:0:-;1094:13;:11;:13::i;:::-;2182:1:::1;2162:22;;:8;:22;;::::0;2154:73:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;2237:28;2256:8;2237:18;:28::i;:::-;2074:198:::0;:::o;1359:130::-;1433:12;:10;:12::i;:::-;1422:23;;:7;:5;:7::i;:::-;:23;;;1414:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1359:130::o;2426:187::-;2499:16;2518:6;;;;;;;;;;;2499:25;;2543:8;2534:6;;:17;;;;;;;;;;;;;;;;;;2597:8;2566:40;;2587:8;2566:40;;;;;;;;;;;;2489:124;2426:187;:::o;640:96:1:-;693:7;719:10;712:17;;640:96;:::o;7:126:5:-;44:7;84:42;77:5;73:54;62:65;;7:126;;;:::o;139:96::-;176:7;205:24;223:5;205:24;:::i;:::-;194:35;;139:96;;;:::o;241:118::-;328:24;346:5;328:24;:::i;:::-;323:3;316:37;241:118;;:::o;365:222::-;458:4;496:2;485:9;481:18;473:26;;509:71;577:1;566:9;562:17;553:6;509:71;:::i;:::-;365:222;;;;:::o;674:117::-;783:1;780;773:12;920:122;993:24;1011:5;993:24;:::i;:::-;986:5;983:35;973:63;;1032:1;1029;1022:12;973:63;920:122;:::o;1048:139::-;1094:5;1132:6;1119:20;1110:29;;1148:33;1175:5;1148:33;:::i;:::-;1048:139;;;;:::o;1193:329::-;1252:6;1301:2;1289:9;1280:7;1276:23;1272:32;1269:119;;;1307:79;;:::i;:::-;1269:119;1427:1;1452:53;1497:7;1488:6;1477:9;1473:22;1452:53;:::i;:::-;1442:63;;1398:117;1193:329;;;;:::o;1528:169::-;1612:11;1646:6;1641:3;1634:19;1686:4;1681:3;1677:14;1662:29;;1528:169;;;;:::o;1703:225::-;1843:34;1839:1;1831:6;1827:14;1820:58;1912:8;1907:2;1899:6;1895:15;1888:33;1703:225;:::o;1934:366::-;2076:3;2097:67;2161:2;2156:3;2097:67;:::i;:::-;2090:74;;2173:93;2262:3;2173:93;:::i;:::-;2291:2;2286:3;2282:12;2275:19;;1934:366;;;:::o;2306:419::-;2472:4;2510:2;2499:9;2495:18;2487:26;;2559:9;2553:4;2549:20;2545:1;2534:9;2530:17;2523:47;2587:131;2713:4;2587:131;:::i;:::-;2579:139;;2306:419;;;:::o;2731:182::-;2871:34;2867:1;2859:6;2855:14;2848:58;2731:182;:::o;2919:366::-;3061:3;3082:67;3146:2;3141:3;3082:67;:::i;:::-;3075:74;;3158:93;3247:3;3158:93;:::i;:::-;3276:2;3271:3;3267:12;3260:19;;2919:366;;;:::o;3291:419::-;3457:4;3495:2;3484:9;3480:18;3472:26;;3544:9;3538:4;3534:20;3530:1;3519:9;3515:17;3508:47;3572:131;3698:4;3572:131;:::i;:::-;3564:139;;3291:419;;;:::o",
  "source": "\n\n//SPDX-License-Identifier: MIT\npragma solidity 0.8.19;\n\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\ncontract ERC20Basic is Ownable {\n\n    constructor()  {}\n    \n    function Deposit() external {\n        \n    }\n\n}",
  "sourcePath": "/Users/vlad/Development/EthConKorea2023/contracts/ERC20Basic.sol",
  "ast": {
    "absolutePath": "project:/contracts/ERC20Basic.sol",
    "exportedSymbols": {
      "Context": [
        134
      ],
      "ERC20Basic": [
        148
      ],
      "Ownable": [
        112
      ]
    },
    "id": 149,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 136,
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:2"
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 137,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 149,
        "sourceUnit": 113,
        "src": "58:52:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 138,
              "name": "Ownable",
              "nameLocations": [
                "135:7:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 112,
              "src": "135:7:2"
            },
            "id": 139,
            "nodeType": "InheritanceSpecifier",
            "src": "135:7:2"
          }
        ],
        "canonicalName": "ERC20Basic",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 148,
        "linearizedBaseContracts": [
          148,
          112,
          134
        ],
        "name": "ERC20Basic",
        "nameLocation": "121:10:2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 142,
              "nodeType": "Block",
              "src": "165:2:2",
              "statements": []
            },
            "id": 143,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 140,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "161:2:2"
            },
            "returnParameters": {
              "id": 141,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "165:0:2"
            },
            "scope": 148,
            "src": "150:17:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 146,
              "nodeType": "Block",
              "src": "205:16:2",
              "statements": []
            },
            "functionSelector": "ed21248c",
            "id": 147,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "Deposit",
            "nameLocation": "186:7:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 144,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "193:2:2"
            },
            "returnParameters": {
              "id": 145,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "205:0:2"
            },
            "scope": 148,
            "src": "177:44:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 149,
        "src": "112:112:2",
        "usedErrors": []
      }
    ],
    "src": "33:191:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.19+commit.7dd6d404.Emscripten.clang"
  },
  "networks": {
    "59140": {
      "events": {},
      "links": {},
      "address": "0x331e7DfD2699b5199DfC797e2232E78Cc05dfF76",
      "transactionHash": "0x39cbcb37f29893bea58ea4ed2105460ecb999cab815219f942c16c69ca785311"
    }
  },
  "schemaVersion": "3.4.15",
  "updatedAt": "2023-09-02T10:48:19.568Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}

export const abi = contract.abi
