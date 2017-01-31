var LedgerWalletProvider = require('ledger-wallet-provider');
var BigNumber = require('bignumber.js');
var HookedWalletSubprovider = require('web3-provider-engine/subproviders/hooked-wallet.js');
var web3Polyfill = require('web3-polyfill')(window);

var walletSubProvider = new LedgerWalletProvider();
var WalletProvider = new HookedWalletSubprovider(walletSubProvider);
const NODE_URL = 'https://ropsten.infura.io/c1GeHOZ7ipPvjO7nDP7l';
web3Polyfill(NODE_URL, WalletProvider);

web3.version.getNetwork((error, result)=> {
    console.log("Network:", result);
})

$('#btn_wallet').on('click', ()=> {
    web3.eth.getAccounts((error, result)=> {
        $('#wallet_address')[0].value = result[0];
        web3.eth.getBalance(result[0], (error, result)=> {
            $('#address_balance')[0].value = result.toString();
        })
    })
});

$('#btn_faucet').on('click', ()=> {
    $.get({
        "url": "http://faucet.ropsten.be:3001/donate/" + $('#wallet_address')[0].value,
        "success": function (data) {
            console.log(data);
        }
    })
});

$('#btn_sign').on('click', ()=> {
    var tx = {
        from: $('#wallet_address')[0].value,
        to: "0x687422eea2cb73b5d3e242ba5456b782919afc85",
        value: web3.toWei(new BigNumber('1337'), 'shannon'),
    };
    web3.eth.sendTransaction(tx, (error, result)=> {
        console.log(error, result);
    })
});

$('#btn_compile').on('click', ()=> {
    web3.eth.compile.solidity($('#contract')[0].value, (error, result)=> {
        console.log(error, result);
        window.contract_compiled = result.greeter
    })
});

$('#btn_contract').on('click', ()=> {
    window.contract = web3.eth
        .contract(window.contract_compiled.info.abiDefinition)
        .at($('#contract_address')[0].value);
});

$('#btn_deploy').on('click', ()=> {
    var _greeting = "Hello World!";
    var greeterContract = web3.eth.contract(window.contract_compiled.info.abiDefinition);
    var greeter = greeterContract.new(_greeting, {
        from: $('#wallet_address')[0].value,
        data: window.contract_compiled.code,
        gas: 300000,
    }, (error, contract)=> {
        console.log(error, contract);
        window.contract = contract;
        if (!contract.address) {
            console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
        } else {
            console.log("Contract mined! Address: " + contract.address);
            $('#contract_address')[0].value = contract.address
        }
    })
});

$('#btn_call').on('click', ()=> {
    window.contract.greet.sendTransaction({
        from: $('#wallet_address')[0].value
    }, (error, result)=> {
        console.log('btn_call', error, result)
    })
});

$('#btn_kill').on('click', ()=> {
    window.contract.kill.sendTransaction({
        from: $('#wallet_address')[0].value,
        gas: 300000,
    }, (error, result)=> {
        console.log('btn_kill', error, result)
    })
});
