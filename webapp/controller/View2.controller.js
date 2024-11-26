// // sap.ui.define([
// //     "sap/ui/core/mvc/Controller",
// //     "sap/ui/model/json/JSONModel",
// //     "sap/m/MessageToast"
// // ], function (Controller, JSONModel, MessageToast) {
// //     "use strict";

// //     return Controller.extend("project2.controller.View2", {
// //         onInit: function () {
// //             var oModel = new JSONModel({
// //                 data: [],
// //                 editable: false
// //             });
// //             this.getView().setModel(oModel);
// //         },

// //         onSubmit: function() {
// //             this._addDataToTable(false);
// //             // Set editable to false after submitting
// //             this.getView().getModel().setProperty("/editable", false);
// //         },

// //         onSave: function() {
// //             this._addDataToTable(true);
// //             // Set editable to true after saving
// //             this.getView().getModel().setProperty("/editable", true);
// //         },

// //         _addDataToTable: function(isEditable) {
// //             var oInputFields = this.getView().byId("dataInputFields").getItems();
// //             var oData = {};
// //             var valid = true;

// //             oInputFields.forEach(function(oInput, index) {
// //                 if (oInput instanceof sap.m.Input || oInput instanceof sap.m.TextArea) {
// //                     if (!oInput.getValue()) {
// //                         valid = false;
// //                         oInput.setValueState("Error");
// //                     } else {
// //                         oInput.setValueState("None");
// //                         switch (index) {
// //                             case 0:
// //                                 oData.firstName = oInput.getValue();
// //                                 break;
// //                             case 1:
// //                                 oData.lastName = oInput.getValue();
// //                                 break;
// //                             case 2:
// //                                 oData.email = oInput.getValue();
// //                                 break;
// //                             case 3:
// //                                 oData.phone = oInput.getValue();
// //                                 break;
// //                             case 4:
// //                                 oData.address = oInput.getValue();
// //                                 break;
// //                             case 5:
// //                                 oData.city = oInput.getValue();
// //                                 break;
// //                             case 6:
// //                                 oData.state = oInput.getValue();
// //                                 break;
// //                             case 7:
// //                                 oData.country = oInput.getValue();
// //                                 break;
// //                             case 8:
// //                                 oData.zip = oInput.getValue();
// //                                 break;
// //                             case 9:
// //                                 oData.comments = oInput.getValue();
// //                                 break;
// //                         }
// //                     }
// //                 }
// //             });

// //             if (valid) {
// //                 var oModel = this.getView().getModel();
// //                 var aData = oModel.getProperty("/data");
// //                 oData.editable = isEditable; // Keep editable state
// //                 aData.push(oData);
// //                 oModel.setProperty("/data", aData);

// //                 // Clear input fields
// //                 oInputFields.forEach(function(oInput) {
// //                     if (oInput instanceof sap.m.Input || oInput instanceof sap.m.TextArea) {
// //                         oInput.setValue("");
// //                     }
// //                 });

// //                 MessageToast.show(isEditable ? "Data saved successfully!" : "Data submitted successfully!");
// //             } else {
// //                 MessageToast.show("Please fill all required fields.");
// //             }
// //         }
// //     });
// // });


// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/json/JSONModel",
//     "sap/m/MessageToast"
// ], function (Controller, JSONModel, MessageToast) {
//     "use strict";

//     return Controller.extend("project2.controller.View2", {
//         onInit: function () {
//             var oModel = new JSONModel({
//                 data: [], // Initialize data array
//                 editable: false // Track whether the table is editable
//             });
//             this.getView().setModel(oModel);
//         },

//         onSubmit: function() {
//             this._addDataToTable(false); // Submit without editable
//             this.getView().getModel().setProperty("/editable", false); // Set editable to false
//         },

//         onSave: function() {
//             this._addDataToTable(true); // Save with editable
//             this.getView().getModel().setProperty("/editable", true); // Set editable to true
//         },

//         _addDataToTable: function(isEditable) {
//             var oInputFields = this.getView().byId("dataInputFields").getItems();
//             var oData = {};
//             var valid = true;

//             oInputFields.forEach(function(oInput, index) {
//                 if (oInput instanceof sap.m.Input || oInput instanceof sap.m.TextArea) {
//                     if (index < 5 && !oInput.getValue()) { // Validate required fields
//                         valid = false;
//                         oInput.setValueState("Error");
//                     } else {
//                         oInput.setValueState("None");
//                         // Collect data based on index
//                         switch (index) {
//                             case 0: oData.firstName = oInput.getValue(); break;
//                             case 1: oData.age = oInput.getValue(); break;
//                             case 2: oData.email = oInput.getValue(); break;
//                             case 3: oData.phone = oInput.getValue(); break;
//                             case 4: oData.address = oInput.getValue(); break;
//                             case 5: oData.city = oInput.getValue(); break;
//                             case 6: oData.state = oInput.getValue(); break;
//                             case 7: oData.country = oInput.getValue(); break;
//                             case 8: oData.zip = oInput.getValue(); break;
//                             case 9: oData.comments = oInput.getValue(); break;
//                         }
//                     }
//                 }
//             });

//             if (valid) {
//                 var oModel = this.getView().getModel();
//                 var aData = oModel.getProperty("/data");
//                 oData.editable = isEditable; // Add editable state
//                 aData.push(oData); // Push new data to model
//                 oModel.setProperty("/data", aData); // Update model

//                 // Clear input fields
//                 oInputFields.forEach(function(oInput) {
//                     if (oInput instanceof sap.m.Input || oInput instanceof sap.m.TextArea) {
//                         oInput.setValue("");
//                     }
//                 });

//                 MessageToast.show(isEditable ? "Data saved successfully!" : "Data submitted successfully!");
//             } else {
//                 MessageToast.show("Please fill all required fields.");
//             }
//         },

//         onNavToDetail: function(oEvent) {
//             var oSelectedItem = oEvent.getSource().getBindingContext().getObject();
           
//             var oRouter = this.getOwnerComponent().getRouter();
//             oRouter.navTo("RouteView3", {
//                 firstName: oSelectedItem.firstName,
//                 age: oSelectedItem.age,
//                 email: oSelectedItem.email,
//                 phone: oSelectedItem.phone,
//                 address: oSelectedItem.address,
//                 city: oSelectedItem.city,
//                 state: oSelectedItem.state,
//                 country: oSelectedItem.country,
//                 zip: oSelectedItem.zip,
//                 comments: oSelectedItem.comments
//             });
//         }
//     });
// });

// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/json/JSONModel",
//     "sap/m/MessageToast"
// ], function (Controller, JSONModel, MessageToast) {
//     "use strict";

//     return Controller.extend("project2.controller.View2", {
//         onInit: function () {
//             var oModel = new JSONModel({
//                 data: [], // Initialize data array
//                 editable: false // Track whether the table is editable
//             });
//             this.getView().setModel(oModel);
//         },

//         onSubmit: function() {
//             this._addDataToTable(false); // Submit without editable
//         },

//         onSave: function() {
//             this._addDataToTable(true); // Save with editable
//         },

//         _addDataToTable: function(isEditable) {
//             var oInputFields = this.getView().byId("dataInputFields").getItems();
//             var oData = {};
//             var valid = true;

//             // Collect input values
//             oInputFields.forEach(function(oInput, index) {
//                 if (oInput instanceof sap.m.Input || oInput instanceof sap.m.TextArea) {
//                     if (index < 9 && !oInput.getValue()) { // Validate required fields
//                         valid = false;
//                         oInput.setValueState("Error");
//                     } else {
//                         oInput.setValueState("None");
//                         switch (index) {
//                             case 0: oData.firstName = oInput.getValue(); break;
//                             case 1: oData.age = oInput.getValue(); break;
//                             case 2: oData.email = oInput.getValue(); break;
//                             case 3: oData.phone = oInput.getValue(); break;
//                             case 4: oData.address = oInput.getValue(); break;
//                             case 5: oData.city = oInput.getValue(); break;
//                             case 6: oData.state = oInput.getValue(); break;
//                             case 7: oData.country = oInput.getValue(); break;
//                             case 8: oData.zip = oInput.getValue(); break;
//                             case 9: oData.comments = oInput.getValue(); break;
//                         }
//                     }
//                 }
//             });

//             if (valid) {
//                 var oModel = this.getView().getModel();
//                 var aData = oModel.getProperty("/data");
//                 oData.editable = isEditable; // Set editable state
//                 aData.push(oData); // Push new data to model

//                 // Log the updated data for debugging
//                 console.log("Data before updating model:", aData);

//                 oModel.setProperty("/data", aData); // Update model

//                 // Clear input fields
//                 oInputFields.forEach(function(oInput) {
//                     if (oInput instanceof sap.m.Input || oInput instanceof sap.m.TextArea) {
//                         oInput.setValue("");
//                     }
//                 });

//                 MessageToast.show(isEditable ? "Data saved successfully!" : "Data submitted successfully!");
//             } else {
//                 MessageToast.show("Please fill all required fields.");
//             }
//         }
//     });
// });


// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/json/JSONModel"
// ], function (Controller, JSONModel) {
//     "use strict";

//     return Controller.extend("project2.controller.View2", {
//         onInit: function () {
//             var oModel = new JSONModel({
//                 data: []
//             });
//             this.getView().setModel(oModel);
//         },

//         onSubmit: function() {
//             this._addDataToTable();
//         },

//         onSave: function() {
//             this._addDataToTable();
//         },

//         _addDataToTable: function() {
//             var oInputFields = this.getView().byId("dataInputFields").getItems();
//             var oData = {};
//             var valid = true;

//             // Collect data from input fields and validate
//             oInputFields.forEach(function(oInput, index) {
//                 if (oInput instanceof sap.m.Input) {
//                     if (index < 5 && !oInput.getValue()) { // Only check first 5 for mandatory
//                         valid = false;
//                         oInput.setValueState("Error");
//                     } else {
//                         oInput.setValueState("None");
//                         switch (index) {
//                             case 0:
//                                 oData.name = oInput.getValue();
//                                 break;
//                             case 1:
//                                 oData.age = oInput.getValue();
//                                 break;
//                             case 2:
//                                 oData.email = oInput.getValue();
//                                 break;
//                             case 3:
//                                 oData.phone = oInput.getValue();
//                                 break;
//                             case 4:
//                                 oData.address = oInput.getValue();
//                                 break;
//                         }
//                     }
//                 }
//             });

//             if (valid) {
//                 // Push the collected data into the model
//                 var oModel = this.getView().getModel();
//                 var aData = oModel.getProperty("/data");
//                 aData.push(oData);
//                 oModel.setProperty("/data", aData);

//                 // Clear input fields after saving
//                 oInputFields.forEach(function(oInput) {
//                     if (oInput instanceof sap.m.Input) {
//                         oInput.setValue("");
//                     }
//                 });
//             }
//         }
//     });
// });


// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/json/JSONModel"
// ], function (Controller, JSONModel) {
//     "use strict";

//     return Controller.extend("project2.controller.View2", {
//         onInit: function () {
//             var oModel = new JSONModel({
//                 data: []
//             });
//             this.getView().setModel(oModel);
//         },

//         onSubmit: function() {
//             this._addDataToTable();
//         },

//         onSave: function() {
//             this._addDataToTable();
//         },

//         _addDataToTable: function() {
//             var oInputFields = this.getView().byId("dataInputFields").getItems();
//             var oData = {};
//             var valid = true;

//             // Collect data from input fields and validate
//             oInputFields.forEach(function(oInput, index) {
//                 if (oInput instanceof sap.m.Input) {
//                     if (index < 5 && !oInput.getValue()) { // Only check first 5 for mandatory
//                         valid = false;
//                         oInput.setValueState("Error");
//                     } else {
//                         oInput.setValueState("None");
//                         switch (index) {
//                             case 0:
//                                 oData.name = oInput.getValue();
//                                 break;
//                             case 1:
//                                 oData.age = oInput.getValue();
//                                 break;
//                             case 2:
//                                 oData.email = oInput.getValue();
//                                 break;
//                             case 3:
//                                 oData.phone = oInput.getValue();
//                                 break;
//                             case 4:
//                                 oData.address = oInput.getValue();
//                                 break;
//                         }
//                     }
//                 }
//             });

//             if (valid) {
//                 // Push the collected data into the model
//                 var oModel = this.getView().getModel();
//                 var aData = oModel.getProperty("/data");
//                 aData.push(oData);
//                 oModel.setProperty("/data", aData);

//                 // Clear input fields after saving
//                 oInputFields.forEach(function(oInput) {
//                     if (oInput instanceof sap.m.Input) {
//                         oInput.setValue("");
//                     }
//                 });
//             }
//         }
//     });
// });


// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/json/JSONModel",
//     "sap/m/MessageToast"
// ], function (Controller, JSONModel, MessageToast) {
//     "use strict";

//     return Controller.extend("project2.controller.View2", {
//         onInit: function () {
//             var oModel = new JSONModel({
//                 data: [] // Initialize data array
//             });
//             this.getView().setModel(oModel);
//         },

//         onSubmit: function() {
//             this._addDataToTable(false); // Set editable to false
//         },

//         onSave: function() {
//             this._addDataToTable(true); // Set editable to true
//         },

//         _addDataToTable: function(isEditable) {
//             var oInputFields = this.getView().byId("dataInputFields").getItems();
//             var oData = {};
//             var valid = true;

//             // Collect data from input fields and validate
//             oInputFields.forEach(function(oInput, index) {
//                 if (oInput instanceof sap.m.Input) {
//                     if (index < 5 && !oInput.getValue()) { // Only check first 5 for mandatory
//                         valid = false;
//                         oInput.setValueState("Error");
//                     } else {
//                         oInput.setValueState("None");
//                         switch (index) {
//                             case 0:
//                                 oData.firstName = oInput.getValue(); // Use firstName as the property name
//                                 break;
//                             case 1:
//                                 oData.age = oInput.getValue();
//                                 break;
//                             case 2:
//                                 oData.email = oInput.getValue();
//                                 break;
//                             case 3:
//                                 oData.phone = oInput.getValue();
//                                 break;
//                             case 4:
//                                 oData.address = oInput.getValue();
//                                 break;
//                             case 5:
//                                 oData.city = oInput.getValue();
//                                 break;
//                             case 6:
//                                 oData.state = oInput.getValue();
//                                 break;
//                             case 7:
//                                 oData.country = oInput.getValue();
//                                 break;
//                             case 8:
//                                 oData.zip = oInput.getValue();
//                                 break;
//                             case 9:
//                                 oData.comments = oInput.getValue();
//                                 break;
//                         }
//                     }
//                 }
//             });

//             if (valid) {
//                 // Push the collected data into the model
//                 var oModel = this.getView().getModel();
//                 var aData = oModel.getProperty("/data");
//                 oData.editable = isEditable; // Set editable state based on action
//                 aData.push(oData);
//                 oModel.setProperty("/data", aData);

//                 // Clear input fields after saving
//                 oInputFields.forEach(function(oInput) {
//                     if (oInput instanceof sap.m.Input) {
//                         oInput.setValue("");
//                     }
//                 });

//                 // Show a success message
//                 MessageToast.show(isEditable ? "Data saved successfully!" : "Data submitted successfully!");
//             } else {
//                 MessageToast.show("Please fill all required fields.");
//             }
//         }
//     });
// });


sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/routing/Router"
], function (Controller, JSONModel, MessageToast, Router) {
    "use strict";

    return Controller.extend("project2.controller.View2", {
        onInit: function () {
            var oModel = new JSONModel({
                data: [] // Initialize data array
            });
            this.getView().setModel(oModel);
        },

        onSubmit: function() {
            this._addDataToTable(false); // Set editable to false
        },

        onSave: function() {
            this._addDataToTable(true); // Set editable to true
        },

        onNav: function() {
            var oModel = this.getOwnerComponent().getModel("/data");
            var aData = oModel.getData().data; // Assuming your model structure has a data property
            var lastUser = aData[aData.length - 1]; // Get the last user
        
            // Navigate to RouteView3 and pass the last user's data
            this.getOwnerComponent().getRouter().navTo("RouteView3", {
                userData: JSON.stringify(lastUser) // Pass user data as a string
            });
        },
         
            _addDataToTable: function(isEditable) {
                            var oInputFields = this.getView().byId("dataInputFields").getItems();
                            var oData = {};
                            var valid = true;
                
                            // Collect data from input fields and validate
                            oInputFields.forEach(function(oInput, index) {
                                if (oInput instanceof sap.m.Input) {
                                    if (index < 5 && !oInput.getValue()) { // Only check first 5 for mandatory
                                        valid = false;
                                        oInput.setValueState("Error");
                                    } else {
                                        oInput.setValueState("None");
                                        switch (index) {
                                            case 0:
                                                oData.firstName = oInput.getValue(); // Use firstName as the property name
                                                break;
                                            case 1:
                                                oData.age = oInput.getValue();
                                                break;
                                            case 2:
                                                oData.email = oInput.getValue();
                                                break;
                                            case 3:
                                                oData.phone = oInput.getValue();
                                                break;
                                            case 4:
                                                oData.address = oInput.getValue();
                                                break;
                                            case 5:
                                                oData.city = oInput.getValue();
                                                break;
                                            case 6:
                                                oData.state = oInput.getValue();
                                                break;
                                            case 7:
                                                oData.country = oInput.getValue();
                                                break;
                                            case 8:
                                                oData.zip = oInput.getValue();
                                                break;
                                            case 9:
                                                oData.comments = oInput.getValue();
                                                break;
                                        }
                                    }
                                }
                            });
                
                            if (valid) {
                                // Push the collected data into the model
                                var oModel = this.getView().getModel();
                                var aData = oModel.getProperty("/data");
                                oData.editable = isEditable; // Set editable state based on action
                                aData.push(oData);
                                oModel.setProperty("/data", aData);
                
                                // Clear input fields after saving
                                oInputFields.forEach(function(oInput) {
                                    if (oInput instanceof sap.m.Input) {
                                        oInput.setValue("");
                                    }
                                });
                
                                // Show a success message
                                MessageToast.show(isEditable ? "Data saved successfully!" : "Data submitted successfully!");
                            } else {
                                MessageToast.show("Please fill all required fields.");
                            }
                        }
        
    });
});
