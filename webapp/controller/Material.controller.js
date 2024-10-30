sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.sap.ztable.controller.Material", {
        onInit: function () {
            this.router = this.getOwnerComponent().getRouter();
            this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
            
        },
        _handleRouteMatched: function(oEvent){
            var sOrderDetail = oEvent.getParameter("arguments").ordernumber;
            // var oModel = new sap.ui.model.json.JSONModel();
            // oModel.setData({
            //     OrderDetail : sOrderDetail   
            // });
            // this.getView().setModel(oModel, "oOrderDetail");
         //   this.getSource().getBindingContext("OrderSales").getObject().OrderID;
         var oDataModel = new sap.ui.model.odata.v2.ODataModel("https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/Northwind/Northwind.svc/");
         var that = this;
        //  var aFilters=[];
        //  aFilters.push(new sap.ui.model.Filter("OrderID", sap.ui.model.FilterOperator.Contains, sOrderDetail));
          oDataModel.read(`/Orders(${sOrderDetail})/Order_Details`, {
            // filters: aFilters,
             success: function(oData, response){
                 var oOrderSales = new sap.ui.model.json.JSONModel();
                 oOrderSales.setData(oData.results);
                 that.getView().setModel(oOrderSales,"OrderDetails" );

             },
             error: function(error){
                 var b=20;
             }
         })
        
        }
        
    });
});
