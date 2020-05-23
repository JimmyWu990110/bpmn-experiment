运行方式：
首先启动区块链，我使用的是testrpc，需安装web3.js，
之后运行Manufacturer、Middleman、Supplier、SpecialCarrier四个代理（无顺序要求），
后者会通过本地端口连接到区块链并使用web3.js接口操作区块链。
接下来运行BulkBuyer代理，然后运行BulkBuyer引擎（run Engines\BulkBuyer\src\test\java\org\activiti\designer\test\ProcessTestMyProcess.java）
此时整个流程开启，相应智能合约会被部署
接下来运行Manufacturer、Middleman、Supplier、SpecialCarrier四个引擎（必须后于BulkBuyer，否则拿不到地址），流程自动执行至结束