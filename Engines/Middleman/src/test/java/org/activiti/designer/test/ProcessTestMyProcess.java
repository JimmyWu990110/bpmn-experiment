package org.activiti.designer.test;

import static org.junit.Assert.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.awt.Robot;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

import org.activiti.engine.RepositoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.runtime.ProcessInstance;
import org.activiti.engine.task.Task;
import org.activiti.engine.test.ActivitiRule;
import org.json.JSONObject;
import org.junit.Rule;
import org.junit.Test;

class WfXML {
	//与服务端（代理）通信
	private Socket socket;
	private InputStream is;
	private OutputStream os;
	private String serverIP;
	private int port;
	private String contractAddress;
	
	public WfXML(int portNumber) {
		socket = null;
		is = null;
		os = null;
		serverIP = "127.0.0.1"; //服务器端IP地址
		port = portNumber; //端口号
	}
	
	public void CreateInstance() {  
		//发送内容（JSON格式）
        JSONObject jobj = new JSONObject();
        jobj.put("instruction", "deploy contract");
        System.out.println("send instruction 'deploy contract' to Broker");
        
        try {
        	//建立连接
            socket = new Socket(serverIP, port);   
            //发送数据
            os = socket.getOutputStream();
            os.write(jobj.toString().getBytes());  //需转换为字符串写进buffer
            
            //接收地址
            is = socket.getInputStream();
            byte[] b = new byte[1024];
            int n = is.read(b);
            contractAddress = new String(b,0,n);
            System.out.println("Address：" + contractAddress);
            
            //接收数据
            is = socket.getInputStream();
            b = new byte[1024];
            n = is.read(b);
            //解析收到的JSON格式字符串
            JSONObject reply = new JSONObject(new String(b,0,n)); 
            //输出反馈数据
            System.out.println("reply：" + reply.getString("result")); 
        } catch (Exception e) {
            e.printStackTrace(); //打印异常信息
        }
		
	}
	
	public void ChangeState(String instruction) {
		JSONObject jobj = new JSONObject();
        jobj.put("instruction", instruction);
        System.out.println("send instruction '" + instruction + "' to Broker");
        
        try {
             //发送数据
             os = socket.getOutputStream();
             os.write(jobj.toString().getBytes());
             
             if(instruction == "call BB_Manuf_sendOrder()")
            	 System.out.println("event [send order] sent at " + new Date().toString());
             
             if(instruction == "call Manuf_Mid_placeOrder()")
            	 System.out.println("event [place order] sent at " + new Date().toString());
             
             if(instruction == "call Manuf_BB_reportStart()")
            	 System.out.println("event [report start] sent at " + new Date().toString());
             
             if(instruction == "call Manuf_BB_deliverProduct()")
            	 System.out.println("event [deliver product] sent at " + new Date().toString());
             
             if(instruction == "call Mid_Sup_forwardOrder()")
            	 System.out.println("event [forward order] sent at " + new Date().toString());
             
             if(instruction == "call Mid_SC_orderTransport()")
            	 System.out.println("event [order transport] sent at " + new Date().toString());
             
             if(instruction == "call Sup_SC_provideDetails()")
            	 System.out.println("event [provide details] sent at " + new Date().toString());
             
             if(instruction == "call Sup_SC_provideWaybill()")
            	 System.out.println("event [provide waybill] sent at " + new Date().toString());
             
             if(instruction == "call SC_Sup_requestDetails()")
            	 System.out.println("event [request details] sent at " + new Date().toString());
             
             if(instruction == "call SC_Manuf_deliverOrder()")
            	 System.out.println("event [deliver order] sent at " + new Date().toString());
            
         } catch (Exception e) {
             e.printStackTrace(); //打印异常信息
         }
		
	}
	
	public void StateChanged() {
		 try {
			//接收数据
             is = socket.getInputStream();
             byte[] b = new byte[1024];
             int n = is.read(b);
             //输出
             System.out.println("Broker：" + new String(b,0,n));
             
             //解析收到的JSON格式字符串
             JSONObject reply = new JSONObject(new String(b,0,n));    
             System.out.println("event ["+ reply.getString("event") + "] received at " + new Date().toString());
             
         } catch (Exception e) {
             e.printStackTrace(); //打印异常信息
         }
	}
	
	public void receiveAddress() {
		 try {
			//建立连接
	        socket = new Socket(serverIP, port);
			//接收地址
            is = socket.getInputStream();
            byte[] b = new byte[1024];
            int n = is.read(b);
            
            contractAddress = new String(b,0,n);
            System.out.println("Address：" + contractAddress);
        } catch (Exception e) {
            e.printStackTrace(); //打印异常信息
        }
	}
}

public class ProcessTestMyProcess {

	private String filename = "C:\\Users\\Jimmy\\eclipse-workspace\\Middleman\\src\\main\\resources\\diagrams\\Middleman.bpmn";

	@Rule
	public ActivitiRule activitiRule = new ActivitiRule();

	@Test
	public void startProcess() throws Exception {
		//发布流程
		RepositoryService repositoryService = activitiRule.getRepositoryService();
		repositoryService.createDeployment().addInputStream("myProcess.bpmn20.xml",
				new FileInputStream(filename)).deploy();
		
		//启动一个流程实例
		RuntimeService runtimeService = activitiRule.getRuntimeService();
		Map<String, Object> variableMap = new HashMap<String, Object>();
		variableMap.put("name", "Activiti");
		ProcessInstance processInstance = runtimeService.startProcessInstanceByKey("myProcess", variableMap);
		assertNotNull(processInstance.getId());
		/*System.out.println("id " + processInstance.getId() + " "
				+ processInstance.getProcessDefinitionId());*/
		
		WfXML wf = new WfXML(12000);
		
		System.out.println("Mid process started at " + new Date().toString());
		wf.receiveAddress();  //接收合约地址

		wf.StateChanged();  //接收来自Broker的状态改变信息，对应receive order
		
		Robot r = new Robot(); 
        r.delay(10000); 
        
        wf.ChangeState("call Mid_Sup_forwardOrder()");  //向Broker发送指令，通知其调用函数
        r.delay(4000);
        
        wf.ChangeState("call Mid_SC_orderTransport()");  //向Broker发送指令，通知其调用函数
		
		//流程结束
		System.out.println("Mid process finished at " + new Date().toString());

	}
}