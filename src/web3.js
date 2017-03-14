import web3Polyfill from 'web3-polyfill';

export default (function () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 === 'undefined') {
        console.warn("No web3 detected. Using infura.");
        const NODE_URL = 'https://ropsten.infura.io/c1GeHOZ7ipPvjO7nDP7l';

        let LedgerWalletProviderFactory = require('ledger-wallet-provider').default;
        let hookedWalletSubprovider = LedgerWalletProviderFactory();
        web3Polyfill(window)(NODE_URL, hookedWalletSubprovider);
    }
    return window.web3;
}());
