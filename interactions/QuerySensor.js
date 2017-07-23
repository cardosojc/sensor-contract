module.exports = function(callback) {
	var QuerySensor = artifacts.require("./QuerySensor.sol");
	var meta;
	var account = "0x86a64895ce194ac7e5e8c57b4faf54641ec5f8cd";
	QuerySensor.deployed().then(function(instance) {
	  meta = instance;
	  //return meta.update({from:account,value:web3.toWei(0.1,'ether')});
	  return meta.hw();
	  // result is an object with the following values:
	}).then(function(result) {
	  //
	  // result.tx      => transaction hash, string
	  // result.logs    => array of decoded events that were triggered within this transaction
	  // result.receipt => transaction receipt object, which includes gas used

	  //console.log(result.logs[0].args);
	  console.log(result.logs);

	  // We can loop through result.logs to see if we triggered the Transfer event.
	  for (var i = 0; i < result.logs.length; i++) {
	    var log = result.logs[i];
	    console.log(log);
	  }
	}).catch(function(err) {
	  console.log(err);
	});
}