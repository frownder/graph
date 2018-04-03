/*
 * BaseContract - super class of all contracts
 * @author yongary.kim@gmail.com
 * @since  2018.3.30
 */
import Web3 from 'web3';
import TruffleContract from 'truffle-contract';
import $ from 'jquery';

class BaseContract {

    constructor() {
        this.contract = {};
        this.initWeb3();
    }

    initWeb3() {
        // Metamask
        if (typeof this.web3 !== 'undefined') {
            this.web3 = new Web3(this.web3.currentProvider);
        } else {
            //LocalTest  set the provider you want from Web3.providers
            console.log("initWeb3: local");
            this.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
        }
        console.log(this.web3);

        /* setProvider 에러
        if (typeof Web3 !== 'undefined') {
            this.web3Provider = Web3.currentProvider;
        } else {
            // LocalTest. If no injected web3 instance is detected, fall back to Ganache
            this.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
        }
        console.log('BaseContract:this.web3Provider - ' + this.web3Provider);
        this.web3 = new Web3(this.web3Provider);
        */
    }

    /*new 이후에 호출 필요*/
    initContract(contractJson) {

        var self = this;
        $.getJSON(contractJson, function (data) {
            // Get the necessary contract artifact file and instantiate it with truffle-contract
            var contractArtifact = data;

            console.log('initContract:' + self.contract);

            self.contract = TruffleContract(contractArtifact);
            self.contract.setProvider(self.web3.currentProvider);

            // Use our contract to retrieve and mark the adopted pets
            return self.getValue();
        });
    }
}

export default BaseContract;