import web3Polyfill from 'web3-polyfill';

let web3 = null;
let ledger = null;
let initWeb3 = async function () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 === 'undefined') {
        console.warn("No web3 detected. Using infura.");
        const NODE_URL = 'https://ropsten.infura.io/c1GeHOZ7ipPvjO7nDP7l';

        let LedgerWalletProviderFactory = require('ledger-wallet-provider').default;
        let hookedWalletSubprovider = await LedgerWalletProviderFactory();
        ledger = hookedWalletSubprovider.ledger;
        web3Polyfill(window)(NODE_URL, hookedWalletSubprovider);
    }
    return window.web3;
};

let exportObject = {
    get ledger() {
        return ledger;
    },
    initWeb3,
    get web3() {
        return window.web3;
    }
};

module.exports = exportObject;
