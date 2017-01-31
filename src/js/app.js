var LedgerWalletProvider = require('ledger-wallet-provider');
var BigNumber = require('bignumber.js');
var HookedWalletSubprovider = require('web3-provider-engine/subproviders/hooked-wallet.js');
var web3Polyfill = require('web3-polyfill')(window);

var walletSubProvider = new LedgerWalletProvider();
var WalletProvider = new HookedWalletSubprovider(walletSubProvider);
const NODE_URL = 'https://ropsten.infura.io/c1GeHOZ7ipPvjO7nDP7l';
web3Polyfill(NODE_URL, WalletProvider);

function step1(cb) {
//
//  Step 1: Connect to the Ethereum Network
//
    web3.version.getNode((error, result)=> {
        $('#ethereum_provider')[0].value = result;
        if (/^ProviderEngine\//.test(result)) {
            // TODO: less hackish
            $('#ethereum_provider')[0].value += " on " + web3.currentProvider._providers[6].rpcUrl;
        }
    });
    web3.version.getNetwork((error, result)=> {
        $('#ethereum_network')[0].value += "Network id: " + (0 | result) + " ";
    });

    var setCurrentBlock = function (block) {
        $('#ethereum_block')[0].value = block.number + " " + block.hash;
    }

    web3.eth.getBlock('latest', (error, result)=> {
        setCurrentBlock(result);

        // We need a valid block before we can do this
        web3.version.getEthereum((error, result)=> {
            $('#ethereum_network')[0].value += "Ethereum version: " + (0 | result) + " ";
        });
    });

    var filter = web3.eth.filter('latest');
    console.log(filter);
    filter.watch((error, result)=> {
        web3.eth.getBlock(result, function (error, block) {
            setCurrentBlock(block);
            cb();
        });
    });
}

function step2a(cb) {
//
//  Step 2a: Connect to your hardware wallet
//
    walletSubProvider.getAppConfig(function (config) {
        $("#ledger_version")[0].value = config.version;
        $("#transactions_allowed")[0].value = Boolean(config.arbitraryDataEnabled).toString();
        cb();
    });
}

function step2b(cb) {
//
//  Step 2b: Open your hardware wallet
//
    web3.eth.getAccounts((error, result)=> {
        $('#wallet_address')[0].value = result[0];
        web3.eth.getBalance(result[0], (error, result)=> {
            $('#wallet_balance')[0].value = result.toString();
            cb();
        })
    });
}

function step3a(cb) {
//
//  Step 3a: Connect to Neufund ICO
//
//
    var ICO_addr = $("#neufund_address")[0].value;
    web3.eth.getBalance(ICO_addr, (err, balance) => {
        $("#amount_invested")[0].value = balance;
        cb();
    });
}

step1(()=> {
    step2a(()=> {
        step2b(()=> {
            step3a(()=> {
                console.log("finished");
            })
        })
    })
});

// $('#btn_sign').on('click', ()=> {
//     var tx = {
//         from: $('#wallet_address')[0].value,
//         to: "0x687422eea2cb73b5d3e242ba5456b782919afc85",
//         value: web3.toWei(new BigNumber('1337'), 'shannon'),
//     };
//     web3.eth.sendTransaction(tx, (error, result)=> {
//         console.log(error, result);
//     })
// });
//
// $('#btn_compile').on('click', ()=> {
//     web3.eth.compile.solidity($('#contract')[0].value, (error, result)=> {
//         console.log(error, result);
//         window.contract_compiled = result.greeter
//     })
// });
//
// $('#btn_contract').on('click', ()=> {
//     var ABI = JSON.parse($('#ABI')[0].value);
//     window.contract = web3.eth
//         .contract(ABI)
//         .at($('#contract_address')[0].value);
// });
//
// $('#btn_deploy').on('click', ()=> {
//     var _greeting = "Hello World!";
//     var greeterContract = web3.eth.contract(window.contract_compiled.info.abiDefinition);
//     var greeter = greeterContract.new(_greeting, {
//         from: $('#wallet_address')[0].value,
//         data: window.contract_compiled.code,
//         gas: 300000,
//     }, (error, contract)=> {
//         console.log(error, contract);
//         window.contract = contract;
//         if (!contract.address) {
//             console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
//         } else {
//             console.log("Contract mined! Address: " + contract.address);
//             $('#contract_address')[0].value = contract.address
//         }
//     })
// });
//
// $('#btn_call').on('click', ()=> {
//     window.contract.greet.sendTransaction({
//         from: $('#wallet_address')[0].value
//     }, (error, result)=> {
//         console.log('btn_call', error, result)
//     })
// });
//
// $('#btn_kill').on('click', ()=> {
//     window.contract.kill.sendTransaction({
//         from: $('#wallet_address')[0].value,
//         gas: 300000,
//     }, (error, result)=> {
//         console.log('btn_kill', error, result)
//     })
// });
