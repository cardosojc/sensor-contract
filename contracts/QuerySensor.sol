pragma solidity ^0.4.4;
import "./usingOraclize.sol";

contract QuerySensor is usingOraclize {
    event newOraclizeQuery(string description);
    event newQuerySensor(string price);
    event queryStr(string qr);

  	function QuerySensor() {
       //setting a custom gas price
       oraclize_setCustomGasPrice(1000000000 wei);
    }

    //oraclize API response
	function __callback(bytes32 myid, string result) {
        if (msg.sender != oraclize_cbAddress()) throw;
        newQuerySensor(result);
    }
    
    //call the oraclize API, that will query the sensor
    function update(string query) payable {
        newOraclizeQuery("Oraclize query was sent, standing by for the answer..");
        queryStr(strConcat("http://sensor-services.ddns.net:8080/sensor-data/",query));
        oraclize_query("URL", strConcat("http://sensor-services.ddns.net:8080/sensor-data/",query));
    }
}