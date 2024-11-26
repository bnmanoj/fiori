sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("project2.controller.View3", {
        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteView3").attachPatternMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: function (oEvent) {
            // Get the user data passed from the previous view
            var userData = JSON.parse(oEvent.getParameter("arguments").userData);
            var oModel = new JSONModel(userData);
            this.getView().setModel(oModel, "oModel");
        }
            
    });
});


