/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CCTCrowndSale,
  CCTCrowndSaleInterface,
} from "../../../contracts/CCTCrowdSale.sol/CCTCrowndSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bnb_rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "usdt_rate",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "icotoken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BuyTokenByBNB",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BuyTokenByUSDT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "SetBNBRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "SetUSDTRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "SetUSDTToken",
    type: "event",
  },
  {
    inputs: [],
    name: "BNB_rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDT_rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_wallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buyTokenByBNB",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "USDTAmount",
        type: "uint256",
      },
    ],
    name: "buyTokenByUSDT",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bnbAmount",
        type: "uint256",
      },
    ],
    name: "getTokenAmountBNB",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "USDTAmount",
        type: "uint256",
      },
    ],
    name: "getTokenAmountUSDT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_rate",
        type: "uint256",
      },
    ],
    name: "setBNBRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_rate",
        type: "uint256",
      },
    ],
    name: "setUSDTRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token_address",
        type: "address",
      },
    ],
    name: "setUSDTToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdtToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001cc138038062001cc18339818101604052810190620000379190620002bb565b620000576200004b620000f160201b60201c565b620000f960201b60201c565b836002819055508260038190555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506200032d565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b6000819050919050565b620001d781620001c2565b8114620001e357600080fd5b50565b600081519050620001f781620001cc565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200022a82620001fd565b9050919050565b6200023c816200021d565b81146200024857600080fd5b50565b6000815190506200025c8162000231565b92915050565b60006200026f82620001fd565b9050919050565b6000620002838262000262565b9050919050565b620002958162000276565b8114620002a157600080fd5b50565b600081519050620002b5816200028a565b92915050565b60008060008060808587031215620002d857620002d7620001bd565b5b6000620002e887828801620001e6565b9450506020620002fb87828801620001e6565b93505060406200030e878288016200024b565b92505060606200032187828801620002a4565b91505092959194509250565b611984806200033d6000396000f3fe6080604052600436106100fe5760003560e01c8063610757e411610095578063a98ad46c11610064578063a98ad46c146102b6578063acb03d43146102e1578063c5d156511461031e578063f2fde38b1461033a578063fc0c546a14610363576100fe565b8063610757e41461022057806366e226bd1461024b578063715018a6146102745780638da5cb5b1461028b576100fe565b806331927737116100d157806331927737146101bd5780633ccfd60b146101c75780633e3f2359146101de578063592a00e4146101f5576100fe565b8063157fc821146101035780631832d8b61461012e5780631b4622d61461016b5780632be8629914610194575b600080fd5b34801561010f57600080fd5b5061011861038e565b60405161012591906110dc565b60405180910390f35b34801561013a57600080fd5b5061015560048036038101906101509190611128565b610394565b60405161016291906110dc565b60405180910390f35b34801561017757600080fd5b50610192600480360381019061018d9190611128565b6103aa565b005b3480156101a057600080fd5b506101bb60048036038101906101b69190611128565b6103f3565b005b6101c561043c565b005b3480156101d357600080fd5b506101dc61069c565b005b3480156101ea57600080fd5b506101f36106ed565b005b34801561020157600080fd5b5061020a610833565b60405161021791906110dc565b60405180910390f35b34801561022c57600080fd5b50610235610839565b6040516102429190611196565b60405180910390f35b34801561025757600080fd5b50610272600480360381019061026d9190611201565b61085f565b005b34801561028057600080fd5b506102896108e2565b005b34801561029757600080fd5b506102a06108f6565b6040516102ad919061123d565b60405180910390f35b3480156102c257600080fd5b506102cb61091f565b6040516102d891906112b7565b60405180910390f35b3480156102ed57600080fd5b5061030860048036038101906103039190611128565b610945565b60405161031591906110dc565b60405180910390f35b61033860048036038101906103339190611128565b61095b565b005b34801561034657600080fd5b50610361600480360381019061035c91906112fe565b610bb6565b005b34801561036f57600080fd5b50610378610c39565b60405161038591906112b7565b60405180910390f35b60025481565b6000600354826103a4919061135a565b50919050565b6103b2610c5f565b806003819055507fbdaa37e3f6679857d8c3e80d172bd45af732a8658cf1d690c81ca96f5a443b5b816040516103e891906110dc565b60405180910390a150565b6103fb610c5f565b806002819055507fb0cc740bbbfcd5af22ee3956c6b44d2d6f499e2a86cb11d915fcce88dca2113a8160405161043191906110dc565b60405180910390a150565b6000349050600061044c82610945565b905060008111610491576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610488906113f9565b60405180910390fd5b80600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016104ed919061123d565b602060405180830381865afa15801561050a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052e919061142e565b101561056f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610566906114a7565b60405180910390fd5b813373ffffffffffffffffffffffffffffffffffffffff163110156105c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c0906114a7565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610631573d6000803e3d6000fd5b5061065f600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163383610cdd565b7ff695091b71a5c3ea41510251da89a66470bbcf1ee118f820a1bab8739e29ea5033826040516106909291906114c7565b60405180910390a15050565b6106a4610c5f565b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156106ea573d6000803e3d6000fd5b50565b6106f5610c5f565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161078f919061123d565b602060405180830381865afa1580156107ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d0919061142e565b6040518363ffffffff1660e01b81526004016107ed9291906114c7565b6020604051808303816000875af115801561080c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108309190611528565b50565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610867610c5f565b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f43036333e58a6f9255617b54ec9f5825590c8ee695a222dc35e5001927f07151816040516108d791906112b7565b60405180910390a150565b6108ea610c5f565b6108f46000610d63565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060025482610955919061135a565b50919050565b600061096682610394565b9050600081116109ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a2906115a1565b60405180910390fd5b80600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610a07919061123d565b602060405180830381865afa158015610a24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a48919061142e565b1015610a89576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a80906114a7565b60405180910390fd5b813373ffffffffffffffffffffffffffffffffffffffff16311015610ae3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ada906114a7565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610b4b573d6000803e3d6000fd5b50610b79600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163383610cdd565b7f5c0161fad3fa89cfebd4a74115d9f81661cdd1b9008d05a238ea9d65088e20643382604051610baa9291906114c7565b60405180910390a15050565b610bbe610c5f565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2490611633565b60405180910390fd5b610c3681610d63565b50565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610c67610e27565b73ffffffffffffffffffffffffffffffffffffffff16610c856108f6565b73ffffffffffffffffffffffffffffffffffffffff1614610cdb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd29061169f565b60405180910390fd5b565b610d5e8363a9059cbb60e01b8484604051602401610cfc9291906114c7565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610e2f565b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000610e91826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610ef69092919063ffffffff16565b9050600081511115610ef15780806020019051810190610eb19190611528565b610ef0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee790611731565b60405180910390fd5b5b505050565b6060610f058484600085610f0e565b90509392505050565b606082471015610f53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4a906117c3565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610f7c9190611854565b60006040518083038185875af1925050503d8060008114610fb9576040519150601f19603f3d011682016040523d82523d6000602084013e610fbe565b606091505b5091509150610fcf87838387610fdb565b92505050949350505050565b6060831561103d57600083510361103557610ff585611050565b611034576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102b906118b7565b60405180910390fd5b5b829050611048565b6110478383611073565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000825111156110865781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ba919061192c565b60405180910390fd5b6000819050919050565b6110d6816110c3565b82525050565b60006020820190506110f160008301846110cd565b92915050565b600080fd5b611105816110c3565b811461111057600080fd5b50565b600081359050611122816110fc565b92915050565b60006020828403121561113e5761113d6110f7565b5b600061114c84828501611113565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061118082611155565b9050919050565b61119081611175565b82525050565b60006020820190506111ab6000830184611187565b92915050565b60006111bc82611155565b9050919050565b60006111ce826111b1565b9050919050565b6111de816111c3565b81146111e957600080fd5b50565b6000813590506111fb816111d5565b92915050565b600060208284031215611217576112166110f7565b5b6000611225848285016111ec565b91505092915050565b611237816111b1565b82525050565b6000602082019050611252600083018461122e565b92915050565b6000819050919050565b600061127d61127861127384611155565b611258565b611155565b9050919050565b600061128f82611262565b9050919050565b60006112a182611284565b9050919050565b6112b181611296565b82525050565b60006020820190506112cc60008301846112a8565b92915050565b6112db816111b1565b81146112e657600080fd5b50565b6000813590506112f8816112d2565b92915050565b600060208284031215611314576113136110f7565b5b6000611322848285016112e9565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611365826110c3565b9150611370836110c3565b925082820261137e816110c3565b915082820484148315176113955761139461132b565b5b5092915050565b600082825260208201905092915050565b7f416d6f756e74206973207a65726f000000000000000000000000000000000000600082015250565b60006113e3600e8361139c565b91506113ee826113ad565b602082019050919050565b60006020820190508181036000830152611412816113d6565b9050919050565b600081519050611428816110fc565b92915050565b600060208284031215611444576114436110f7565b5b600061145284828501611419565b91505092915050565b7f496e73756666696369656e74206163636f756e742062616c616e636500000000600082015250565b6000611491601c8361139c565b915061149c8261145b565b602082019050919050565b600060208201905081810360008301526114c081611484565b9050919050565b60006040820190506114dc600083018561122e565b6114e960208301846110cd565b9392505050565b60008115159050919050565b611505816114f0565b811461151057600080fd5b50565b600081519050611522816114fc565b92915050565b60006020828403121561153e5761153d6110f7565b5b600061154c84828501611513565b91505092915050565b7f416d6f756e7420746f207a65726f000000000000000000000000000000000000600082015250565b600061158b600e8361139c565b915061159682611555565b602082019050919050565b600060208201905081810360008301526115ba8161157e565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061161d60268361139c565b9150611628826115c1565b604082019050919050565b6000602082019050818103600083015261164c81611610565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061168960208361139c565b915061169482611653565b602082019050919050565b600060208201905081810360008301526116b88161167c565b9050919050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b600061171b602a8361139c565b9150611726826116bf565b604082019050919050565b6000602082019050818103600083015261174a8161170e565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006117ad60268361139c565b91506117b882611751565b604082019050919050565b600060208201905081810360008301526117dc816117a0565b9050919050565b600081519050919050565b600081905092915050565b60005b838110156118175780820151818401526020810190506117fc565b60008484015250505050565b600061182e826117e3565b61183881856117ee565b93506118488185602086016117f9565b80840191505092915050565b60006118608284611823565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006118a1601d8361139c565b91506118ac8261186b565b602082019050919050565b600060208201905081810360008301526118d081611894565b9050919050565b600081519050919050565b6000601f19601f8301169050919050565b60006118fe826118d7565b611908818561139c565b93506119188185602086016117f9565b611921816118e2565b840191505092915050565b6000602082019050818103600083015261194681846118f3565b90509291505056fea264697066735822122026bceb251b26bcb820afdc48fde30865f13a1ef3a2ca6a22f2258a090a8f725e64736f6c63430008120033";

type CCTCrowndSaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CCTCrowndSaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CCTCrowndSale__factory extends ContractFactory {
  constructor(...args: CCTCrowndSaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    bnb_rate: PromiseOrValue<BigNumberish>,
    usdt_rate: PromiseOrValue<BigNumberish>,
    wallet: PromiseOrValue<string>,
    icotoken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CCTCrowndSale> {
    return super.deploy(
      bnb_rate,
      usdt_rate,
      wallet,
      icotoken,
      overrides || {}
    ) as Promise<CCTCrowndSale>;
  }
  override getDeployTransaction(
    bnb_rate: PromiseOrValue<BigNumberish>,
    usdt_rate: PromiseOrValue<BigNumberish>,
    wallet: PromiseOrValue<string>,
    icotoken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      bnb_rate,
      usdt_rate,
      wallet,
      icotoken,
      overrides || {}
    );
  }
  override attach(address: string): CCTCrowndSale {
    return super.attach(address) as CCTCrowndSale;
  }
  override connect(signer: Signer): CCTCrowndSale__factory {
    return super.connect(signer) as CCTCrowndSale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CCTCrowndSaleInterface {
    return new utils.Interface(_abi) as CCTCrowndSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CCTCrowndSale {
    return new Contract(address, _abi, signerOrProvider) as CCTCrowndSale;
  }
}
