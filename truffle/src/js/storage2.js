import './BaseApp.js'

class App extends BaseApp {

    initContract(contractJson) {

        $.getJSON(contractJson, function (data) {
            // Get the necessary contract artifact file and instantiate it with truffle-contract
            var SimpleStorageArtifact = data;

            this.contracts.SimpleStorage = TruffleContract(SimpleStorageArtifact);

            // Set the provider for our contract
            this.contracts.SimpleStorage.setProvider(this.web3Provider);

            // Use our contract to retrieve and mark the adopted pets
            return this.storageGet();
        });
    }

    storageGet() { //adopters, account) {
        var simpleStorageInstance;

        this.contracts.SimpleStorage.deployed().then(function (instance) {
            simpleStorageInstance = instance;

            console.log(web3.version.api);

            return simpleStorageInstance.get.call();
        }).then(function (value) {

            console.log(value);
            $('#myText').val(value);

        }).catch(function (err) {
            console.log(err.message);
        });
    }

    storageSet() {

        var simpleStorageInstance;
        //web3.version.api

        web3.eth.getAccounts(function (error, accounts) {
            if (error) {
                console.log(error);
            }

            var account = accounts[0];

            this.contracts.SimpleStorage.deployed().then(function (instance) {
                simpleStorageInstance = instance;

                // Execute adopt as a transaction by sending account
                var value = $('#myText').val();
                console.log(value);
                $('#myTest').val('');
                return simpleStorageInstance.set(value, {from: account});
            }).then(function (result) {
                return this.storageGet();
            }).catch(function (err) {
                console.log(err.message);
            });
        });
    }

} //class


//////////////////////////////////////////////////////
function init() {

    //bind html이벤트
    $(document).on('click', '.setBtn', app.storageSet);
    $(document).on('click', '.getBtn', app.storageGet);

    //contract 초기화
    var app = new App({});
    app.initContract('SimpleStorage.json');

}

$(function() {
  $(window).load(function() {
    init();
  });
});
