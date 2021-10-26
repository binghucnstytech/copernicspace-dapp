/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  ERC20Percentage,
  ERC20PercentageInterface
} from '../ERC20Percentage'

const _abi = [
  {
    inputs: [],
    name: 'baseDecimal',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]

const _bytecode =
  '0x608f610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063db7b373e146038575b600080fd5b604768056bc75e2d6310000081565b60405190815260200160405180910390f3fea26469706673582212203ae8c8f812560edd25da476d957809b766bac27dbaf2c73c598b898066eb04fb64736f6c63430008040033'

export class ERC20Percentage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Percentage> {
    return super.deploy(overrides || {}) as Promise<ERC20Percentage>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): ERC20Percentage {
    return super.attach(address) as ERC20Percentage
  }
  connect(signer: Signer): ERC20Percentage__factory {
    return super.connect(signer) as ERC20Percentage__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ERC20PercentageInterface {
    return new utils.Interface(_abi) as ERC20PercentageInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Percentage {
    return new Contract(address, _abi, signerOrProvider) as ERC20Percentage
  }
}