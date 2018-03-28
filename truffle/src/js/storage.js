App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    // Load pets.


    return App.initWeb3();
  },

  initWeb3: function() {

      // MetaMask. Is there an injected web3 instance?
      if (typeof web3 !== 'undefined') {
          App.web3Provider = web3.currentProvider;
      } else {
          // LocalTest. If no injected web3 instance is detected, fall back to Ganache
          App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
      }
      web3 = new Web3(App.web3Provider);
    return App.initContract();
  },

  initContract: function() {

      $.getJSON('SimpleStorage.json', function(data) {
          // Get the necessary contract artifact file and instantiate it with truffle-contract
          var SimpleStorageArtifact = data;

          App.contracts.SimpleStorage = TruffleContract(SimpleStorageArtifact);

          // Set the provider for our contract
          App.contracts.SimpleStorage.setProvider(App.web3Provider);

          // Use our contract to retrieve and mark the adopted pets
          return App.storageGet();
      });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.setBtn', App.storageSet);
    $(document).on('click', '.getBtn', App.storageGet);
  },

  storageGet: function() { //adopters, account) {
    var simpleStorageInstance;

    App.contracts.SimpleStorage.deployed().then(function(instance) {
        simpleStorageInstance = instance;

        console.log(web3.version.api);

        return simpleStorageInstance.get.call();
    }).then(function(value) {

        console.log(value);
        $('#myText').val(value);

    }).catch(function(err) {
        console.log(err.message);
    });
  },

  storageSet: function(event) {
    event.preventDefault();
    //var petId = parseInt($(event.target).data('id'));
    /*
     * Replace me...
     */
    var simpleStorageInstance;
    //web3.version.api

    web3.eth.getAccounts(function(error, accounts) {
        if (error) {
            console.log(error);
        }

        var account = accounts[0];

        App.contracts.SimpleStorage.deployed().then(function(instance) {
            simpleStorageInstance = instance;

            // Execute adopt as a transaction by sending account
            var value = $('#myText').val();
            console.log(value);
            $('#myTest').val('');
            return simpleStorageInstance.set(value, {from: account});
        }).then(function(result) {
            return App.storageGet();
        }).catch(function(err) {
            console.log(err.message);
        });
    });

  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
