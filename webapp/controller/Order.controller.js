sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.sap.ztable.controller.Order", {
        onInit: function () {

           // var oModel =  new sap.ui.model.json.JSONModel();
            var oDataModel = new sap.ui.model.odata.v2.ODataModel("https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/Northwind/Northwind.svc/");
            var that = this;
             oDataModel.read("/Orders", {
                success: function(oData, response){
                    var oOrderSales = new sap.ui.model.json.JSONModel();
                    oOrderSales.setData(oData.results);
                    that.getView().setModel(oOrderSales,"OrderSales" );

                },
                error: function(error){
                    var b=20;
                }
            })

        },


        fnClickOfButton: function(oEvent){
            sap.m.MessageToast.show("Presssed");

   
        this.getOwnerComponent().getRouter().navTo("RouteMaterial",{
            ordernumber: oEvent.getSource().getBindingContext("OrderSales").getObject().OrderID
        });


      

    },
    formatter: function(OrderID)
    {
     return 'OrderID: ' +OrderID;
    }
    });
});

