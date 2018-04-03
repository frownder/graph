import BaseContract from './BaseContract';
import $ from 'jquery';

class Storage extends BaseContract {

    getValue = () => { //adopters, account) {
        var simpleStorageInstance;

        console.log('this:' + this);
        //console.log('Storage.contract:' + this.contract.deployed());
        this.contract.deployed().then((instance) => {
            simpleStorageInstance = instance;

            //console.log(this.web3.version.api);

            return simpleStorageInstance.get.call();
        }).then((value) => {
            console.log(value);
            $('#myText').val(value);

        }).catch((err) => {
            console.log(err.message);
        });
    }

    setValue = () => {
        var simpleStorageInstance;
        //web3.version.api

        console.log('Storeage.contract:' + this.web3);
        var self = this;
        this.web3.eth.getAccounts((error, accounts) => {
            if (error) {
                console.log(error);
            }

            var account = accounts[0];

            self.contract.deployed().then((instance) => {
                simpleStorageInstance = instance;

                // input에서 value를 가져와서 setValue에 이용
                var value = $('#myText').val();
                console.log(value);
                $('#myTest').val('');

                return simpleStorageInstance.set(value, {from: account});

            }).then((result) => {
                return self.getValue();

            }).catch((err) => {
                console.log(err.message);
            });
        });
    }

} //class

export default Storage;
