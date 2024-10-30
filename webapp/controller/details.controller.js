sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.sap.s.zstudent.controller.details", {
        onInit: function () {
            var aNames = [
                { Name: "Nikita", address: "abc" },
                { Name: "Manoj", address: "def" },
                { Name: "Venu", address: "ghi" },
                { Name: " hello ", address: "xyz" }
            ];
            
             

            var oModel =  new sap.ui.model.json.JSONModel();
            oModel.setData(aNames);
            this.getView().setModel(oModel, "oNameModel");
        },
        _handleRouteMatched: function(oEvent){
            var sStudentDet = oEvent.getParameter("arguments").sonumber;
            var oModel = new sap.ui.model.json.JSONModel();
           oModel.setData({
               studentdet : sStudentDet   
           });
           this.getView().setModel(oModel, "oStudentDet");
           
           },
       
        fnClickofButton: function(oEvent){
            sap.m.MessageToast.show("Presssed");

            this.getOwnerComponent().getRouter().navTo("Routedata");

    }
    });
});
