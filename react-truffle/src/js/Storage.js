import BaseContract from './BaseContract';
import TruffleContract from 'truffle-contract';
import $ from 'jquery';

class Storage extends BaseContract {

    constructor() {
        super();
    }

    initContract(contractJson) {

        var self = this;
        $.getJSON(contractJson, function (data) {
            // Get the necessary contract artifact file and instantiate it with truffle-contract
            var SimpleStorageArtifact = data;

            console.log('Storeage.contract:' + self.contract);

            self.contract = TruffleContract(SimpleStorageArtifact);
            self.contract.setProvider(self.web3.currentProvider);

            // Use our contract to retrieve and mark the adopted pets
            return self.getValue();
        });
    }

    getValue = () => { //adopters, account) {
        var simpleStorageInstance;

        console.log('this:' + this);
        //console.log('Storage.contract:' + this.contract.deployed());
        this.contract.deployed().then(function (instance) {
            simpleStorageInstance = instance;

            //console.log(this.web3.version.api);

            return simpleStorageInstance.get.call();
        }).then(function (value) {
            console.log(value);
            $('#myText').val(value);

        }).catch(function (err) {
            console.log(err.message);
        });
    }

    setValue = () => {
        var simpleStorageInstance;
        //web3.version.api

        console.log('Storeage.contract:' + this.web3);
        var self = this;
        this.web3.eth.getAccounts(function (error, accounts) {
            if (error) {
                console.log(error);
            }

            var account = accounts[0];

            self.contract.deployed().then(function (instance) {
                simpleStorageInstance = instance;

                // input에서 value를 가져와서 setValue에 이용
                var value = $('#myText').val();
                console.log(value);
                $('#myTest').val('');

                return simpleStorageInstance.set(value, {from: account});

            }).then(function (result) {
                return self.getValue();

            }).catch(function (err) {
                console.log(err.message);
            });
        });
    }

} //class

export default Storage;
