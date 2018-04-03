/*
 * BaseContract - super class of all contracts
 * @author yongary.kim@gmail.com
 * @since  2018.3.30
 */
import Web3 from 'web3';

class BaseContract {

    constructor() {
        this.contract = {};
        this.initWeb3();
    }

    initWeb3() {

        //Metamask
        if (typeof this.web3 !== 'undefined') {
            this.web3 = new Web3(this.web3.currentProvider);
        } else {
            //LocalTest  set the provider you want from Web3.providers
            console.log("initWeb3: local");
            this.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
        }
        console.log(this.web3);

        /*
        // MetaMask. Is there an injected web3 instance?
        if (typeof Web3 !== 'undefined') {
            this.web3Provider = Web3.currentProvider;
        } else {
            // LocalTest. If no injected web3 instance is detected, fall back to Ganache
            this.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
        }
        console.log('BaseContract:this.web3Provider - ' + this.web3Provider);
        this.web3 = new Web3(this.web3Provider);
        */

        //return this.initContract();
    }

    //Overload구현 필요
    //initContract(contractJson) {
        //get 로컬 컨트랙트json 후 artifact data로 작업
    //}


}

export default BaseContract;