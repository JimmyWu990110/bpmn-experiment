pragma solidity ^0.4.24;

contract bpmn {
    struct BulkBuyer{
        bool sendOrder;
        bool receiveStart;
        bool receiveProduct;
    }
    struct Manufacturer{
        bool receiveOrderA;
        bool placeOrder;
        bool receiveOrderB;
        bool reportStart;
        bool deliverProduct;
    }
    struct Middleman{
        bool receiveOrder;
        bool forwardOrder;
        bool orderTransport;
    }
    struct SpecialCarrier{
        bool receiveOrder;
        bool requestDetails;
        bool receiveDetails;
        bool receiveWaybill;
        bool deliverOrder;
    }
    struct Supplier{
        bool receiveOrder;
        bool receiveRequest;
        bool provideDetails;
        bool provideWaybill;
    }

    BulkBuyer public BulkBuyerStates;
    Manufacturer public ManufacturerStates;
    Middleman public MiddlemanStates;
    SpecialCarrier public SpecialCarrierStates;
    Supplier public SupplierStates;

    event BB_Manuf_sendOrderFinished(string receiver, string event_);
    event Manuf_Mid_placeOrderFinished(string receiver, string event_);
    event Mid_Sup_forwardOrderFinished(string receiver, string event_);
    event Mid_SC_orderTransportFinished(string receiver, string event_);
    event SC_Sup_requestDetailsFinished(string receiver, string event_);
    event Sup_SC_provideDetailsFinished(string receiver, string event_);
    event Sup_SC_provideWaybillFinished(string receiver, string event_);
    event SC_Manuf_deliverOrderFinished(string receiver, string event_);
    event Manuf_BB_reportStartFinished(string receiver, string event_);
    event Manuf_BB_deliverProductFinished(string receiver, string event_);

    function Init() {
        BulkBuyerStates.sendOrder = false;
        BulkBuyerStates.receiveStart = false;
        BulkBuyerStates.receiveProduct = false;   
        ManufacturerStates.receiveOrderA = false;
        ManufacturerStates.placeOrder = false;
        ManufacturerStates.receiveOrderB = false;
        ManufacturerStates.reportStart = false;
        ManufacturerStates.deliverProduct = false;
        MiddlemanStates.receiveOrder = false;
        MiddlemanStates.forwardOrder = false;
        MiddlemanStates.orderTransport = false;
        SpecialCarrierStates.receiveOrder = false;
        SpecialCarrierStates.requestDetails = false;
        SpecialCarrierStates.receiveDetails = false;
        SpecialCarrierStates.receiveWaybill = false;
        SpecialCarrierStates.deliverOrder = false;
        SupplierStates.receiveOrder = false;
        SupplierStates.receiveRequest = false;
        SupplierStates.provideDetails = false;
        SupplierStates.provideWaybill = false;
    }

    function BB_Manuf_sendOrder() returns (bool) {
        //这一步已完成，返回false
        if (BulkBuyerStates.sendOrder == true)
            return false;

        BulkBuyerStates.sendOrder = true;
        ManufacturerStates.receiveOrderA = true;
        emit BB_Manuf_sendOrderFinished('Manufacturer', 'receiveOrderA');
        return true;
    }

    function Manuf_Mid_placeOrder() returns (bool) {
        //上一步未完成或这一步已完成，返回false
        if (ManufacturerStates.receiveOrderA == false || ManufacturerStates.placeOrder == true)
            return false;

        ManufacturerStates.placeOrder = true;
        MiddlemanStates.receiveOrder = true;
        emit Manuf_Mid_placeOrderFinished('Middleman', 'receiveOrder');
        return true;
    }

    function Mid_Sup_forwardOrder() returns (bool) {
        //上一步未完成或这一步已完成，返回false
        if (MiddlemanStates.receiveOrder == false || MiddlemanStates.forwardOrder == true)
            return false;

        MiddlemanStates.forwardOrder = true;
        SupplierStates.receiveOrder = true;
        emit Mid_Sup_forwardOrderFinished('Supplier', 'receiveOrder');
        return true;
    }

    function Mid_SC_orderTransport() returns (bool) {
        //上一步未完成或这一步已完成，返回false
        if (MiddlemanStates.receiveOrder == false || MiddlemanStates.orderTransport == true)
            return false;

        MiddlemanStates.orderTransport = true;
        SpecialCarrierStates.receiveOrder = true;
        emit Mid_SC_orderTransportFinished('SpecialCarrier', 'receiveOrder');
        return true;
    }

    function SC_Sup_requestDetails() returns (bool) {
        //上一步未完成或这一步已完成，返回false
        if (SpecialCarrierStates.receiveOrder == false || SpecialCarrierStates.requestDetails == true)
            return false;

        SpecialCarrierStates.requestDetails = true;
        SupplierStates.receiveRequest = true;
        emit SC_Sup_requestDetailsFinished('Supplier', 'receiveRequest');
        return true;
    }

    function Sup_SC_provideDetails() returns (bool) {
        //上一步未完成或这一步已完成，返回false
        if (SupplierStates.receiveRequest == false || SupplierStates.provideDetails == true)
            return false;

        SupplierStates.provideDetails = true;
        SpecialCarrierStates.receiveDetails = true;
        emit Sup_SC_provideDetailsFinished('SpecialCarrier', 'receiveDetails');
        return true;
    }

    function Sup_SC_provideWaybill() returns (bool) {
        //上一步未完成或这一步已完成，返回false
        if (SupplierStates.provideDetails == false || SupplierStates.provideWaybill == true)
            return false;

        SupplierStates.provideWaybill = true;
        SpecialCarrierStates.receiveWaybill = true;
        emit Sup_SC_provideWaybillFinished('SpecialCarrier', 'receiveWaybill');
        return true;
    }

    function SC_Manuf_deliverOrder() returns (bool) {
        //上一步未完成或这一步已完成，返回false
        if (SpecialCarrierStates.receiveWaybill == false || SpecialCarrierStates.deliverOrder == true)
            return false;

        SpecialCarrierStates.deliverOrder = true;
        ManufacturerStates.receiveOrderB = true;
        emit SC_Manuf_deliverOrderFinished('Manufacturer', 'receiveOrderB');
        return true;
    }

    function Manuf_BB_reportStart() returns (bool) {
        //上一步未完成或这一步已完成，返回false
        if (ManufacturerStates.receiveOrderB == false || ManufacturerStates.reportStart == true)
            return false;

        ManufacturerStates.reportStart = true;
        BulkBuyerStates.receiveStart = true;
        emit Manuf_BB_reportStartFinished('BulkBuyer', 'receiveStart');
        return true;
    }

    function Manuf_BB_deliverProduct() returns (bool) {
        //上一步未完成或这一步已完成，返回false
        if (ManufacturerStates.reportStart == false || ManufacturerStates.deliverProduct == true)
            return false;

        ManufacturerStates.deliverProduct = true;
        BulkBuyerStates.receiveProduct = true;
        emit Manuf_BB_deliverProductFinished('BulkBuyer', 'receiveProduct');
        return true;
    }
}