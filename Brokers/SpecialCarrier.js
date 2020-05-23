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
console.log('account: ' + web3.eth.accounts[4]);

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

// 连接BulkBuyer的代理，获取部署合约的地址
const net = require('net');
const server = net.createServer();
const port = 10004;

server.on('listening', function() {
    console.log('server listening: ' + server.address().port);
});

const servertoEngine = net.createServer();
const porttoEngine = 14000;
var bpmnContract = web3.eth.contract(abiDefinition);
var contractAddr;
var myContractInstance = bpmnContract.at(contractAddr);  //获取已部署合约对象

servertoEngine.on('listening', function() {  //服务器不能重复listen一个端口，要放在外面
	console.log('listen to SC Engine: ' + servertoEngine.address().port);
});


servertoEngine.on('connection', function (Enginesocket) {
	console.log('connect to SC Engine success, contract address: ' + contractAddr);
	const myAddr = contractAddr; //用局部变量记录这一次连接内操作所用的地址，需保证每次连接前地址有更新（BB先跑一段）
	const myInstance =  bpmnContract.at(myAddr);
	setTimeout(function(){
		Enginesocket.write(myAddr);  //先把合约地址传给引擎，以后所有操作都根据该地址进行，以免多进程混乱
	}, 1000);
	var events = myInstance.allEvents(function(error, log){
		if (!error) {
			//console.log(log);
			if (log.args.receiver == 'SpecialCarrier') {
				console.log(log);
				console.log('send ' + log.args.event_ + ' to SC Engine');
				var jobj = {"event": log.args.event_, "addr": log.address};
				var str = JSON.stringify(jobj);
				Enginesocket.write(str);  //将收到的广播时间转发给Manuf引擎
			}
		}
	});

	Enginesocket.on('data',function (data) { //接收到数据的时候触发
		console.log('receive instruction: ' + data); // 打印数据
		var jobj = JSON.parse(data);  // 将JSON字符串解析为JSON对象 
		console.log(myAddr);
		//console.log(myInstance);
		//myInstance = bpmnContract.at(myAddr);  //原先未获得地址，对象未定义，此时已有地址，生成instance 
		if (jobj.instruction == 'call SC_Sup_requestDetails()') { 
			myInstance.SC_Sup_requestDetails.sendTransaction({
				from: web3.eth.accounts[4],
				gas: 3141592
			});
		}
		if (jobj.instruction == 'call SC_Manuf_deliverOrder()') { 
			myInstance.SC_Manuf_deliverOrder.sendTransaction({
				from: web3.eth.accounts[4],
				gas: 3141592
			});
		}
		//Enginesocket.end();
	});
	Enginesocket.on('close', function(data) { // client关闭
		console.log('connection to SC Engine closed');
	});

}).listen(porttoEngine);

server.on('connection', function (socket) { //当一个新的连接建立时触发，可接收一个socket对象
	console.log('BulkBuyer Broker connected');

    socket.on('data',function (data) {
		contractAddr = data.toString()
		console.log('receive contract address: ' + contractAddr);
		setTimeout(function(){
			socket.write('SC Broker: contract address recieved');
		}, 8000);
    });
    socket.on('error', function(exception) { 
        console.log('socket error: ' + exception);
        client.end();
    });
    socket.on('close', function(data) { // client关闭
        console.log('client closed');
    });
}).listen(port);


