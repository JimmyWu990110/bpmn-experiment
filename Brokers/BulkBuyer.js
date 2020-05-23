// 初始化
var Web3 = require('web3');
// 连接到区块链
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
// 打印账户信息
console.log('account: ' + web3.eth.accounts[0]);

var deployCode = "608060405234801561001057600080fd5b50611432806100206000396000f3006080604052600436106100e6576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806307fcff04146100eb57806316d3b8b61461011a578063199c08f1146101495780631e91bafb1461018e5780634fe96e95146101bd57806356d3037e146101ec57806357a86f7d1461021b57806370928caf14610232578063809db3111461027757806382284fc3146102d25780638f1d3775146103015780639b752e3214610330578063a04c08f21461035f578063bfb5abd21461038e578063d1257700146103de578063dc2b8e9914610439575b600080fd5b3480156100f757600080fd5b50610100610468565b604051808215151515815260200191505060405180910390f35b34801561012657600080fd5b5061012f610597565b604051808215151515815260200191505060405180910390f35b34801561015557600080fd5b5061015e6106c6565b60405180841515151581526020018315151515815260200182151515158152602001935050505060405180910390f35b34801561019a57600080fd5b506101a3610705565b604051808215151515815260200191505060405180910390f35b3480156101c957600080fd5b506101d2610834565b604051808215151515815260200191505060405180910390f35b3480156101f857600080fd5b50610201610961565b604051808215151515815260200191505060405180910390f35b34801561022757600080fd5b50610230610a8e565b005b34801561023e57600080fd5b50610247610ce5565b60405180841515151581526020018315151515815260200182151515158152602001935050505060405180910390f35b34801561028357600080fd5b5061028c610d24565b6040518086151515158152602001851515151581526020018415151515815260200183151515158152602001821515151581526020019550505050505060405180910390f35b3480156102de57600080fd5b506102e7610d89565b604051808215151515815260200191505060405180910390f35b34801561030d57600080fd5b50610316610eb8565b604051808215151515815260200191505060405180910390f35b34801561033c57600080fd5b50610345610fe6565b604051808215151515815260200191505060405180910390f35b34801561036b57600080fd5b506103746110f2565b604051808215151515815260200191505060405180910390f35b34801561039a57600080fd5b506103a3611221565b604051808515151515815260200184151515158152602001831515151581526020018215151515815260200194505050505060405180910390f35b3480156103ea57600080fd5b506103f3611273565b6040518086151515158152602001851515151581526020018415151515815260200183151515158152602001821515151581526020019550505050505060405180910390f35b34801561044557600080fd5b5061044e6112d8565b604051808215151515815260200191505060405180910390f35b6000801515600260000160009054906101000a900460ff16151514806104a4575060011515600260000160019054906101000a900460ff161515145b156104b25760009050610594565b6001600260000160016101000a81548160ff0219169083151502179055506001600460000160006101000a81548160ff0219169083151502179055507fdde1bdee01f450ce964399245ce7d62aa8d740a2db56eafd5391b8983d635de3604051808060200180602001838103835260088152602001807f537570706c6965720000000000000000000000000000000000000000000000008152506020018381038252600c8152602001807f726563656976654f7264657200000000000000000000000000000000000000008152506020019250505060405180910390a1600190505b90565b6000801515600460000160029054906101000a900460ff16151514806105d3575060011515600460000160039054906101000a900460ff161515145b156105e157600090506106c3565b6001600460000160036101000a81548160ff0219169083151502179055506001600360000160036101000a81548160ff0219169083151502179055507faecc31439770fb9bf6c160bb1612226217807a112fa3e05a350128707bc65d2c6040518080602001806020018381038352600e8152602001807f5370656369616c436172726965720000000000000000000000000000000000008152506020018381038252600e8152602001807f7265636569766557617962696c6c0000000000000000000000000000000000008152506020019250505060405180910390a1600190505b90565b60008060000160009054906101000a900460ff16908060000160019054906101000a900460ff16908060000160029054906101000a900460ff16905083565b6000801515600460000160019054906101000a900460ff1615151480610741575060011515600460000160029054906101000a900460ff161515145b1561074f5760009050610831565b6001600460000160026101000a81548160ff0219169083151502179055506001600360000160026101000a81548160ff0219169083151502179055507f2a869b7f29862848d27991405ef27775ffd29736baf96a1c0c390a5a6908e71e6040518080602001806020018381038352600e8152602001807f5370656369616c436172726965720000000000000000000000000000000000008152506020018381038252600e8152602001807f7265636569766544657461696c730000000000000000000000000000000000008152506020019250505060405180910390a1600190505b90565b6000801515600160000160029054906101000a900460ff1615151480610870575060011515600160000160039054906101000a900460ff161515145b1561087e576000905061095e565b60018060000160036101000a81548160ff02191690831515021790555060016000800160016101000a81548160ff0219169083151502179055507f12a2a1c0e8499845d0b0bb33e53727dd1702a5267c5cf4de730a3f28c1c49988604051808060200180602001838103835260098152602001807f42756c6b427579657200000000000000000000000000000000000000000000008152506020018381038252600c8152602001807f72656365697665537461727400000000000000000000000000000000000000008152506020019250505060405180910390a1600190505b90565b6000801515600160000160039054906101000a900460ff161515148061099d575060011515600160000160049054906101000a900460ff161515145b156109ab5760009050610a8b565b60018060000160046101000a81548160ff02191690831515021790555060016000800160026101000a81548160ff0219169083151502179055507f5488dc6b168e404cf6438d191aa6151e69083c9d9583ca6ee2ac0bfeca342fb0604051808060200180602001838103835260098152602001807f42756c6b427579657200000000000000000000000000000000000000000000008152506020018381038252600e8152602001807f7265636569766550726f647563740000000000000000000000000000000000008152506020019250505060405180910390a1600190505b90565b60008060000160006101000a81548160ff02191690831515021790555060008060000160016101000a81548160ff02191690831515021790555060008060000160026101000a81548160ff0219169083151502179055506000600160000160006101000a81548160ff0219169083151502179055506000600160000160016101000a81548160ff0219169083151502179055506000600160000160026101000a81548160ff0219169083151502179055506000600160000160036101000a81548160ff0219169083151502179055506000600160000160046101000a81548160ff0219169083151502179055506000600260000160006101000a81548160ff0219169083151502179055506000600260000160016101000a81548160ff0219169083151502179055506000600260000160026101000a81548160ff0219169083151502179055506000600360000160006101000a81548160ff0219169083151502179055506000600360000160016101000a81548160ff0219169083151502179055506000600360000160026101000a81548160ff0219169083151502179055506000600360000160036101000a81548160ff0219169083151502179055506000600360000160046101000a81548160ff0219169083151502179055506000600460000160006101000a81548160ff0219169083151502179055506000600460000160016101000a81548160ff0219169083151502179055506000600460000160026101000a81548160ff0219169083151502179055506000600460000160036101000a81548160ff021916908315150217905550565b60028060000160009054906101000a900460ff16908060000160019054906101000a900460ff16908060000160029054906101000a900460ff16905083565b60038060000160009054906101000a900460ff16908060000160019054906101000a900460ff16908060000160029054906101000a900460ff16908060000160039054906101000a900460ff16908060000160049054906101000a900460ff16905085565b6000801515600360000160009054906101000a900460ff1615151480610dc5575060011515600360000160019054906101000a900460ff161515145b15610dd35760009050610eb5565b6001600360000160016101000a81548160ff0219169083151502179055506001600460000160016101000a81548160ff0219169083151502179055507fe09e08ec59cf0d9bdcdb031f5a91ea7714431e695551cc094e4ece74081eac34604051808060200180602001838103835260088152602001807f537570706c6965720000000000000000000000000000000000000000000000008152506020018381038252600e8152602001807f72656365697665526571756573740000000000000000000000000000000000008152506020019250505060405180910390a1600190505b90565b6000801515600160000160009054906101000a900460ff1615151480610ef4575060011515600160000160019054906101000a900460ff161515145b15610f025760009050610fe3565b60018060000160016101000a81548160ff0219169083151502179055506001600260000160006101000a81548160ff0219169083151502179055507fb19faab88be3e9828c1e717ebbdb14e759b7c1fbc84ae23f0749ca3036c13b97604051808060200180602001838103835260098152602001807f4d6964646c656d616e00000000000000000000000000000000000000000000008152506020018381038252600c8152602001807f726563656976654f7264657200000000000000000000000000000000000000008152506020019250505060405180910390a1600190505b90565b6000600115156000800160009054906101000a900460ff161515141561100f57600090506110ef565b60016000800160006101000a81548160ff02191690831515021790555060018060000160006101000a81548160ff0219169083151502179055507f86fd44d56eb706a0347d453a45653b93d95e1b29d5e83e287bba7b172ac9962a6040518080602001806020018381038352600c8152602001807f4d616e75666163747572657200000000000000000000000000000000000000008152506020018381038252600d8152602001807f726563656976654f7264657241000000000000000000000000000000000000008152506020019250505060405180910390a1600190505b90565b6000801515600260000160009054906101000a900460ff161515148061112e575060011515600260000160029054906101000a900460ff161515145b1561113c576000905061121e565b6001600260000160026101000a81548160ff0219169083151502179055506001600360000160006101000a81548160ff0219169083151502179055507fdbc5d9887946f045bf5be4fea3ba1b7e694077485bc0df2c67a75e320283cd376040518080602001806020018381038352600e8152602001807f5370656369616c436172726965720000000000000000000000000000000000008152506020018381038252600c8152602001807f726563656976654f7264657200000000000000000000000000000000000000008152506020019250505060405180910390a1600190505b90565b60048060000160009054906101000a900460ff16908060000160019054906101000a900460ff16908060000160029054906101000a900460ff16908060000160039054906101000a900460ff16905084565b60018060000160009054906101000a900460ff16908060000160019054906101000a900460ff16908060000160029054906101000a900460ff16908060000160039054906101000a900460ff16908060000160049054906101000a900460ff16905085565b6000801515600360000160039054906101000a900460ff1615151480611314575060011515600360000160049054906101000a900460ff161515145b156113225760009050611403565b6001600360000160046101000a81548160ff02191690831515021790555060018060000160026101000a81548160ff0219169083151502179055507f744edc961659311093e0b4e8c0a5a225f37fb96a525f7a1ecf235661732d0aaa6040518080602001806020018381038352600c8152602001807f4d616e75666163747572657200000000000000000000000000000000000000008152506020018381038252600d8152602001807f726563656976654f7264657242000000000000000000000000000000000000008152506020019250505060405180910390a1600190505b905600a165627a7a723058201531c59e847399f7c9f73187513e6946e3b45225a22eba7db9d225f14a6abd0d0029";

var abiDefinition = [
	{
		"constant": false,
		"inputs": [],
		"name": "Mid_Sup_forwardOrder",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Sup_SC_provideWaybill",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BulkBuyerStates",
		"outputs": [
			{
				"name": "sendOrder",
				"type": "bool"
			},
			{
				"name": "receiveStart",
				"type": "bool"
			},
			{
				"name": "receiveProduct",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Sup_SC_provideDetails",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Manuf_BB_reportStart",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Manuf_BB_deliverProduct",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Init",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MiddlemanStates",
		"outputs": [
			{
				"name": "receiveOrder",
				"type": "bool"
			},
			{
				"name": "forwardOrder",
				"type": "bool"
			},
			{
				"name": "orderTransport",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "SpecialCarrierStates",
		"outputs": [
			{
				"name": "receiveOrder",
				"type": "bool"
			},
			{
				"name": "requestDetails",
				"type": "bool"
			},
			{
				"name": "receiveDetails",
				"type": "bool"
			},
			{
				"name": "receiveWaybill",
				"type": "bool"
			},
			{
				"name": "deliverOrder",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "SC_Sup_requestDetails",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Manuf_Mid_placeOrder",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "BB_Manuf_sendOrder",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Mid_SC_orderTransport",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "SupplierStates",
		"outputs": [
			{
				"name": "receiveOrder",
				"type": "bool"
			},
			{
				"name": "receiveRequest",
				"type": "bool"
			},
			{
				"name": "provideDetails",
				"type": "bool"
			},
			{
				"name": "provideWaybill",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ManufacturerStates",
		"outputs": [
			{
				"name": "receiveOrderA",
				"type": "bool"
			},
			{
				"name": "placeOrder",
				"type": "bool"
			},
			{
				"name": "receiveOrderB",
				"type": "bool"
			},
			{
				"name": "reportStart",
				"type": "bool"
			},
			{
				"name": "deliverProduct",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "SC_Manuf_deliverOrder",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "receiver",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "event_",
				"type": "string"
			}
		],
		"name": "BB_Manuf_sendOrderFinished",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "receiver",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "event_",
				"type": "string"
			}
		],
		"name": "Manuf_Mid_placeOrderFinished",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "receiver",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "event_",
				"type": "string"
			}
		],
		"name": "Mid_Sup_forwardOrderFinished",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "receiver",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "event_",
				"type": "string"
			}
		],
		"name": "Mid_SC_orderTransportFinished",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "receiver",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "event_",
				"type": "string"
			}
		],
		"name": "SC_Sup_requestDetailsFinished",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "receiver",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "event_",
				"type": "string"
			}
		],
		"name": "Sup_SC_provideDetailsFinished",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "receiver",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "event_",
				"type": "string"
			}
		],
		"name": "Sup_SC_provideWaybillFinished",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "receiver",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "event_",
				"type": "string"
			}
		],
		"name": "SC_Manuf_deliverOrderFinished",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "receiver",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "event_",
				"type": "string"
			}
		],
		"name": "Manuf_BB_reportStartFinished",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "receiver",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "event_",
				"type": "string"
			}
		],
		"name": "Manuf_BB_deliverProductFinished",
		"type": "event"
	}
];

var bpmnContract = web3.eth.contract(abiDefinition);
var deployAddr = web3.eth.accounts[0];

// 连接BulkBuyer工作流引擎的socket端口，收发消息
const net = require('net');
const server = net.createServer();
const port = 10000;

server.on('listening', function() {
    console.log('server listening: ' + server.address().port);
});


// 有客户端连接，进入以下代码
server.on('connection', function(client) {
	console.log('connect: ' + client.remoteAddress+ ':'+ client.remotePort);
	var myContractReturned;  // 记录返回的部署合约，注意作用域

  	client.on('data', function(data) {
    	console.log('receive instruction: ' + data); // 打印数据
    	var jobj = JSON.parse(data);  // 将JSON字符串解析为JSON对象 
    	if (jobj.instruction == 'deploy contract') 	{  //部署智能合约
      		myContractReturned = bpmnContract.new({
         		data: deployCode,
         		from: deployAddr,
         		gas: 3141592
      		}, function(err, myContract) {
        	if (!err) {
          		if (!myContract.address) {
            		console.log("contract deploy transaction hash: " + myContract.transactionHash) //部署合约的交易哈希值
          		} else {
					console.log("contract deploy address: " + myContract.address) // 合约的部署地址
					console.log("call Init()");

					client.write(myContract.address);  //先把合约地址传给引擎，以后所有操作都根据该地址进行，以免多进程混乱

            		//使用transaction方式调用，写入到区块链上
            		myContract.Init.sendTransaction({ //调用Init()
              			from: deployAddr,
              			gas: 3141592
					});

					var socket1 = net.connect('10001','127.0.0.1'); 
					socket1.on('connect',function () {   //连接成功
    					console.log('connect to Manuf Broker success');
    					socket1.write(myContract.address);  //发送合约地址到Manuf的代理

    					socket1.on('data',function (data) { //接收到数据的时候触发
							console.log(data.toString());
        					//socket1.end();
    					});
					});
					socket1.on('error',function () {
    					console.log("error: connect to Manuf Broker failed");
					})
					socket1.on('end',function () {
    					console.log('connect to Manuf Broker closed');
					});

					var socket2 = net.connect('10002','127.0.0.1'); 
					socket2.on('connect',function () {   //连接成功
    					console.log('connect to Mid Broker success');
						socket2.write(myContract.address);  //发送合约地址到Mid的代理
						
    					socket2.on('data',function (data) { //接收到数据的时候触发
							console.log(data.toString());
        					//socket2.end();
    					});
					});
					socket2.on('error',function () {
    					console.log("error: connect to Mid Broker failed");
					})
					socket2.on('end',function () {
    					console.log('connect to Mid Broker closed');
					});


					var socket3 = net.connect('10003','127.0.0.1'); 
					socket3.on('connect',function () {   //连接成功
    					console.log('connect to Sup Broker success');
    					socket3.write(myContract.address);  //发送合约地址到Manuf的代理

    					socket3.on('data',function (data) { //接收到数据的时候触发
							console.log(data.toString());
        					//socket3.end();
    					});
					});
					socket3.on('error',function () {
    					console.log("error: connect to Sup Broker failed");
					})
					socket3.on('end',function () {
    					console.log('connect to Sup Broker closed');
					});

					var socket4 = net.connect('10004','127.0.0.1'); 
					socket4.on('connect',function () {   //连接成功
    					console.log('connect to SC Broker success');
						socket4.write(myContract.address);  //发送合约地址到Mid的代理
						
    					socket4.on('data',function (data) { //接收到数据的时候触发
							console.log(data.toString());
							if (data.toString() == 'SC Broker: contract address recieved') {
								var jobj1 = {"result": 'Brokers ready'};
								var str1 = JSON.stringify(jobj1);
								client.write(str1); // 告知BB引擎各个代理及引擎已准备好，可以开始发送事件了
							}
        					//socket4.end();
    					});
					});
					socket4.on('error',function () {
    					console.log("error: connect to SC Broker failed");
					})
					socket4.on('end',function () {
    					console.log('connect to SC Broker closed');
					});

					var myevents = myContractReturned.allEvents(function(error, log) {
						if (!error) {
							if (log.args.receiver == 'BulkBuyer') {
								console.log(log);
								console.log('send ' + log.args.event_ + ' to BB Engine');
								var jobj = {"event": log.args.event_, "addr": log.address};
								var str = JSON.stringify(jobj);
								client.write(str);  //将收到的广播时间转发给BB引擎
							}
						}
					});
            	}
        	}
        	else {
        		console.log("error: deploy contract failed!");
        	}
      		});
		}

		if (jobj.instruction == 'call BB_Manuf_sendOrder()') { 
			myContractReturned.BB_Manuf_sendOrder.sendTransaction({
				from: deployAddr,
				gas: 3141592
			});
		}
  	});

  	client.on('error', function(exception) { 
    	console.log('socket error: ' + exception);
    	client.end();
 	});

  	client.on('close', function(data) { // client关闭
    	console.log('client close');
  	});
}).listen(port);

