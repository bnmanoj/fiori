sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.sap.s.zstudent.controller.student", {
        onInit: function () {

        },
        fnClickofButton: function(oEvent){
            sap.m.MessageToast.show("Login button is clicked");

            this.getOwnerComponent().getRouter().navTo("Routedetails",{
                sonumber: this.getView().byId("idInput").getValue()
            });


    }
});
});
