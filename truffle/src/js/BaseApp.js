class BaseApp {

    constructor(options) {
        this.web3Provider = options.web3Provider;
        this.contracts = options.contracts;


        this.initWeb3();
    }

    initWeb3() {
        // MetaMask. Is there an injected web3 instance?
        if (typeof web3 !== 'undefined') {
            this.web3Provider = web3.currentProvider;
        } else {
            // LocalTest. If no injected web3 instance is detected, fall back to Ganache
            this.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
        }
        this.web3 = new Web3(this.web3Provider);
        return this.initContract();
    }

    //Overload구현 필요
    initContract(contractJson) {
        //get 로컬 컨트랙트json 후 artifact data로 작업
    }


}