/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { KymRegister, KymRegisterInterface } from '../KymRegister'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_assetAddress',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newAdminAddress',
        type: 'address'
      }
    ],
    name: 'changeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'currentAdmin',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getAssetAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'assetID',
        type: 'uint256'
      }
    ],
    name: 'getKymStatusInfo',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'userAddress',
        type: 'address'
      }
    ],
    name: 'getOperatorStatusInfo',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'kymStatus',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'operatorAccess',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'assetID',
        type: 'uint256'
      },
      {
        internalType: 'bool',
        name: 'kymValue',
        type: 'bool'
      }
    ],
    name: 'setKymStatus',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOperatorAddress',
        type: 'address'
      },
      {
        internalType: 'bool',
        name: 'isOperator',
        type: 'bool'
      }
    ],
    name: 'setOperatorStatus',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506040516104f03803806104f083398101604081905261002f91610062565b60028054336001600160a01b031991821617909155600380549091166001600160a01b0392909216919091179055610090565b600060208284031215610073578081fd5b81516001600160a01b0381168114610089578182fd5b9392505050565b6104518061009f6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80638f283970116100665780638f2839701461011d5780639288bd8514610130578063b889c45c14610153578063ba4bcd7214610176578063e9d8fdc71461018957600080fd5b8063363541b21461009857806359119a41146100d0578063670ab5e9146100e55780638cc7f38f1461010a575b600080fd5b6100bb6100a63660046103e1565b60009081526020819052604090205460ff1690565b60405190151581526020015b60405180910390f35b6100e36100de3660046103af565b6101b5565b005b6003546001600160a01b03165b6040516001600160a01b0390911681526020016100c7565b6100e36101183660046103f9565b61023f565b6100e361012b36600461038e565b6102e6565b6100bb61013e3660046103e1565b60006020819052908152604090205460ff1681565b6100bb61016136600461038e565b60016020526000908152604090205460ff1681565b6002546100f2906001600160a01b031681565b6100bb61019736600461038e565b6001600160a01b031660009081526001602052604090205460ff1690565b6002546001600160a01b031633146102145760405162461bcd60e51b815260206004820152601e60248201527f756e617574686f72697a6564202d2d206f6e6c7920666f722061646d696e000060448201526064015b60405180910390fd5b6001600160a01b03919091166000908152600160205260409020805460ff1916911515919091179055565b3360009081526001602052604090205460ff168061026757506002546001600160a01b031633145b6102c65760405162461bcd60e51b815260206004820152602a60248201527f756e617574686f72697a6564202d2d206f6e6c7920666f72206f70657261746f604482015269393990131030b236b4b760b11b606482015260840161020b565b600091825260208290526040909120805460ff1916911515919091179055565b6002546001600160a01b031633146103405760405162461bcd60e51b815260206004820152601e60248201527f756e617574686f72697a6564202d2d206f6e6c7920666f722061646d696e0000604482015260640161020b565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b80356001600160a01b038116811461037957600080fd5b919050565b8035801515811461037957600080fd5b60006020828403121561039f578081fd5b6103a882610362565b9392505050565b600080604083850312156103c1578081fd5b6103ca83610362565b91506103d86020840161037e565b90509250929050565b6000602082840312156103f2578081fd5b5035919050565b6000806040838503121561040b578182fd5b823591506103d86020840161037e56fea26469706673582212208f8eae0b5276406427c2a4ee3ecaa34ef09ddb0580dd35962c72054cce9cc42764736f6c63430008040033'

export class KymRegister__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    _assetAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KymRegister> {
    return super.deploy(_assetAddress, overrides || {}) as Promise<KymRegister>
  }
  getDeployTransaction(
    _assetAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_assetAddress, overrides || {})
  }
  attach(address: string): KymRegister {
    return super.attach(address) as KymRegister
  }
  connect(signer: Signer): KymRegister__factory {
    return super.connect(signer) as KymRegister__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): KymRegisterInterface {
    return new utils.Interface(_abi) as KymRegisterInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KymRegister {
    return new Contract(address, _abi, signerOrProvider) as KymRegister
  }
}