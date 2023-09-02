export const axelarAbi = [
  {
    inputs: [
      { internalType: 'address', name: 'authModule_', type: 'address' },
      {
        internalType: 'address',
        name: 'tokenDeployerImplementation_',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  { inputs: [], name: 'AlreadyVoted', type: 'error' },
  {
    inputs: [{ internalType: 'string', name: 'symbol', type: 'string' }],
    name: 'BurnFailed',
    type: 'error'
  },
  {
    inputs: [{ internalType: 'address', name: 'admin', type: 'address' }],
    name: 'DuplicateAdmin',
    type: 'error'
  },
  {
    inputs: [{ internalType: 'string', name: 'symbol', type: 'string' }],
    name: 'ExceedMintLimit',
    type: 'error'
  },
  { inputs: [], name: 'InvalidAdminThreshold', type: 'error' },
  { inputs: [], name: 'InvalidAdmins', type: 'error' },
  { inputs: [], name: 'InvalidAmount', type: 'error' },
  { inputs: [], name: 'InvalidAuthModule', type: 'error' },
  { inputs: [], name: 'InvalidChainId', type: 'error' },
  { inputs: [], name: 'InvalidCodeHash', type: 'error' },
  { inputs: [], name: 'InvalidCommands', type: 'error' },
  { inputs: [], name: 'InvalidSetMintLimitsParams', type: 'error' },
  { inputs: [], name: 'InvalidTokenDeployer', type: 'error' },
  {
    inputs: [{ internalType: 'string', name: 'symbol', type: 'string' }],
    name: 'MintFailed',
    type: 'error'
  },
  { inputs: [], name: 'NotAdmin', type: 'error' },
  { inputs: [], name: 'NotProxy', type: 'error' },
  { inputs: [], name: 'NotSelf', type: 'error' },
  { inputs: [], name: 'SetupFailed', type: 'error' },
  {
    inputs: [{ internalType: 'string', name: 'symbol', type: 'string' }],
    name: 'TokenAlreadyExists',
    type: 'error'
  },
  {
    inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
    name: 'TokenContractDoesNotExist',
    type: 'error'
  },
  {
    inputs: [{ internalType: 'string', name: 'symbol', type: 'string' }],
    name: 'TokenDeployFailed',
    type: 'error'
  },
  {
    inputs: [{ internalType: 'string', name: 'symbol', type: 'string' }],
    name: 'TokenDoesNotExist',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationChain',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationContractAddress',
        type: 'string'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'payloadHash',
        type: 'bytes32'
      },
      { indexed: false, internalType: 'bytes', name: 'payload', type: 'bytes' }
    ],
    name: 'ContractCall',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'commandId',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'sourceChain',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'sourceAddress',
        type: 'string'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'contractAddress',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'payloadHash',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'sourceTxHash',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sourceEventIndex',
        type: 'uint256'
      }
    ],
    name: 'ContractCallApproved',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'commandId',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'sourceChain',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'sourceAddress',
        type: 'string'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'contractAddress',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'payloadHash',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'sourceTxHash',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sourceEventIndex',
        type: 'uint256'
      }
    ],
    name: 'ContractCallApprovedWithMint',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationChain',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationContractAddress',
        type: 'string'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'payloadHash',
        type: 'bytes32'
      },
      { indexed: false, internalType: 'bytes', name: 'payload', type: 'bytes' },
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'ContractCallWithToken',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'commandId',
        type: 'bytes32'
      }
    ],
    name: 'Executed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes',
        name: 'newOperatorsData',
        type: 'bytes'
      }
    ],
    name: 'OperatorshipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenAddresses',
        type: 'address'
      }
    ],
    name: 'TokenDeployed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'limit',
        type: 'uint256'
      }
    ],
    name: 'TokenMintLimitUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationChain',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'destinationAddress',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'TokenSent',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address'
      }
    ],
    name: 'Upgraded',
    type: 'event'
  },
  {
    inputs: [],
    name: 'adminEpoch',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'epoch', type: 'uint256' }],
    name: 'adminThreshold',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'epoch', type: 'uint256' }],
    name: 'admins',
    outputs: [
      { internalType: 'address[]', name: 'results', type: 'address[]' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'allTokensFrozen',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'params', type: 'bytes' },
      { internalType: 'bytes32', name: 'commandId', type: 'bytes32' }
    ],
    name: 'approveContractCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'params', type: 'bytes' },
      { internalType: 'bytes32', name: 'commandId', type: 'bytes32' }
    ],
    name: 'approveContractCallWithMint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'authModule',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'params', type: 'bytes' },
      { internalType: 'bytes32', name: '', type: 'bytes32' }
    ],
    name: 'burnToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string', name: 'destinationChain', type: 'string' },
      {
        internalType: 'string',
        name: 'destinationContractAddress',
        type: 'string'
      },
      { internalType: 'bytes', name: 'payload', type: 'bytes' }
    ],
    name: 'callContract',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string', name: 'destinationChain', type: 'string' },
      {
        internalType: 'string',
        name: 'destinationContractAddress',
        type: 'string'
      },
      { internalType: 'bytes', name: 'payload', type: 'bytes' },
      { internalType: 'string', name: 'symbol', type: 'string' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'callContractWithToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'params', type: 'bytes' },
      { internalType: 'bytes32', name: '', type: 'bytes32' }
    ],
    name: 'deployToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes', name: 'input', type: 'bytes' }],
    name: 'execute',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'key', type: 'bytes32' }],
    name: 'getAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'key', type: 'bytes32' }],
    name: 'getBool',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'key', type: 'bytes32' }],
    name: 'getBytes',
    outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'key', type: 'bytes32' }],
    name: 'getInt',
    outputs: [{ internalType: 'int256', name: '', type: 'int256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'key', type: 'bytes32' }],
    name: 'getString',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'key', type: 'bytes32' }],
    name: 'getUint',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'implementation',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'commandId', type: 'bytes32' }],
    name: 'isCommandExecuted',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'commandId', type: 'bytes32' },
      { internalType: 'string', name: 'sourceChain', type: 'string' },
      { internalType: 'string', name: 'sourceAddress', type: 'string' },
      { internalType: 'address', name: 'contractAddress', type: 'address' },
      { internalType: 'bytes32', name: 'payloadHash', type: 'bytes32' },
      { internalType: 'string', name: 'symbol', type: 'string' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'isContractCallAndMintApproved',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'commandId', type: 'bytes32' },
      { internalType: 'string', name: 'sourceChain', type: 'string' },
      { internalType: 'string', name: 'sourceAddress', type: 'string' },
      { internalType: 'address', name: 'contractAddress', type: 'address' },
      { internalType: 'bytes32', name: 'payloadHash', type: 'bytes32' }
    ],
    name: 'isContractCallApproved',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'params', type: 'bytes' },
      { internalType: 'bytes32', name: '', type: 'bytes32' }
    ],
    name: 'mintToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string', name: 'destinationChain', type: 'string' },
      { internalType: 'string', name: 'destinationAddress', type: 'string' },
      { internalType: 'string', name: 'symbol', type: 'string' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'sendToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string[]', name: 'symbols', type: 'string[]' },
      { internalType: 'uint256[]', name: 'limits', type: 'uint256[]' }
    ],
    name: 'setTokenMintLimits',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes', name: 'params', type: 'bytes' }],
    name: 'setup',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'string', name: 'symbol', type: 'string' }],
    name: 'tokenAddresses',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'tokenDeployer',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'string', name: '', type: 'string' }],
    name: 'tokenFrozen',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'string', name: 'symbol', type: 'string' }],
    name: 'tokenMintAmount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'string', name: 'symbol', type: 'string' }],
    name: 'tokenMintLimit',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'newOperatorsData', type: 'bytes' },
      { internalType: 'bytes32', name: '', type: 'bytes32' }
    ],
    name: 'transferOperatorship',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'newImplementation', type: 'address' },
      {
        internalType: 'bytes32',
        name: 'newImplementationCodeHash',
        type: 'bytes32'
      },
      { internalType: 'bytes', name: 'setupParams', type: 'bytes' }
    ],
    name: 'upgrade',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'commandId', type: 'bytes32' },
      { internalType: 'string', name: 'sourceChain', type: 'string' },
      { internalType: 'string', name: 'sourceAddress', type: 'string' },
      { internalType: 'bytes32', name: 'payloadHash', type: 'bytes32' }
    ],
    name: 'validateContractCall',
    outputs: [{ internalType: 'bool', name: 'valid', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'commandId', type: 'bytes32' },
      { internalType: 'string', name: 'sourceChain', type: 'string' },
      { internalType: 'string', name: 'sourceAddress', type: 'string' },
      { internalType: 'bytes32', name: 'payloadHash', type: 'bytes32' },
      { internalType: 'string', name: 'symbol', type: 'string' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'validateContractCallAndMint',
    outputs: [{ internalType: 'bool', name: 'valid', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]
