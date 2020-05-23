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
	//�����ˣ�����ͨ��
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
		serverIP = "127.0.0.1"; //��������IP��ַ
		port = portNumber; //�˿ں�
	}
	
	public void CreateInstance() {  
		//�������ݣ�JSON��ʽ��
        JSONObject jobj = new JSONObject();
        jobj.put("instruction", "deploy contract");
        System.out.println("send instruction 'deploy contract' to Broker");
        
        try {
        	//��������
            socket = new Socket(serverIP, port);   
            //��������
            os = socket.getOutputStream();
            os.write(jobj.toString().getBytes());  //��ת��Ϊ�ַ���д��buffer
            
            //���յ�ַ
            is = socket.getInputStream();
            byte[] b = new byte[1024];
            int n = is.read(b);
            contractAddress = new String(b,0,n);
            System.out.println("Address��" + contractAddress);
            
            //��������
            is = socket.getInputStream();
            b = new byte[1024];
            n = is.read(b);
            //�����յ���JSON��ʽ�ַ���
            JSONObject reply = new JSONObject(new String(b,0,n)); 
            //�����������
            System.out.println("reply��" + reply.getString("result")); 
        } catch (Exception e) {
            e.printStackTrace(); //��ӡ�쳣��Ϣ
        }
		
	}
	
	public void ChangeState(String instruction) {
		JSONObject jobj = new JSONObject();
        jobj.put("instruction", instruction);
        System.out.println("send instruction '" + instruction + "' to Broker");
        
        try {
             //��������
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
             e.printStackTrace(); //��ӡ�쳣��Ϣ
         }
		
	}
	
	public void StateChanged() {
		 try {
			//��������
             is = socket.getInputStream();
             byte[] b = new byte[1024];
             int n = is.read(b);
             //���
             System.out.println("Broker��" + new String(b,0,n));
             
             //�����յ���JSON��ʽ�ַ���
             JSONObject reply = new JSONObject(new String(b,0,n));    
             System.out.println("event ["+ reply.getString("event") + "] received at " + new Date().toString());
             
         } catch (Exception e) {
             e.printStackTrace(); //��ӡ�쳣��Ϣ
         }
	}
	
	public void receiveAddress() {
		 try {
			//��������
	        socket = new Socket(serverIP, port);
			//���յ�ַ
            is = socket.getInputStream();
            byte[] b = new byte[1024];
            int n = is.read(b);
            
            contractAddress = new String(b,0,n);
            System.out.println("Address��" + contractAddress);
        } catch (Exception e) {
            e.printStackTrace(); //��ӡ�쳣��Ϣ
        }
	}
}

public class ProcessTestMyProcess {

	private String filename = "C:\\Users\\Jimmy\\eclipse-workspace\\Middleman\\src\\main\\resources\\diagrams\\Middleman.bpmn";

	@Rule
	public ActivitiRule activitiRule = new ActivitiRule();

	@Test
	public void startProcess() throws Exception {
		//��������
		RepositoryService repositoryService = activitiRule.getRepositoryService();
		repositoryService.createDeployment().addInputStream("myProcess.bpmn20.xml",
				new FileInputStream(filename)).deploy();
		
		//����һ������ʵ��
		RuntimeService runtimeService = activitiRule.getRuntimeService();
		Map<String, Object> variableMap = new HashMap<String, Object>();
		variableMap.put("name", "Activiti");
		ProcessInstance processInstance = runtimeService.startProcessInstanceByKey("myProcess", variableMap);
		assertNotNull(processInstance.getId());
		/*System.out.println("id " + processInstance.getId() + " "
				+ processInstance.getProcessDefinitionId());*/
		
		WfXML wf = new WfXML(12000);
		
		System.out.println("Mid process started at " + new Date().toString());
		wf.receiveAddress();  //���պ�Լ��ַ

		wf.StateChanged();  //��������Broker��״̬�ı���Ϣ����Ӧreceive order
		
		Robot r = new Robot(); 
        r.delay(10000); 
        
        wf.ChangeState("call Mid_Sup_forwardOrder()");  //��Broker����ָ�֪ͨ����ú���
        r.delay(4000);
        
        wf.ChangeState("call Mid_SC_orderTransport()");  //��Broker����ָ�֪ͨ����ú���
		
		//���̽���
		System.out.println("Mid process finished at " + new Date().toString());

	}
}