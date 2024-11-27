import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

export default class Test extends Controller {
    public onInit(): void {
        const oRoute = this.getOwnerComponent().getRouter().getRoute("Routetest");
        oRoute.attachPatternMatched(this._onPatternMatched, this);
    }

    private _onPatternMatched(oEvent): void {
      
        const sName = oEvent.getParameter("arguments").name;
        const sAge = oEvent.getParameter("arguments").age;
 
        const sPhone = "555-0123"; 
        const sAddress = "456 Elm Street, Springfield"

    
        const data = {
            name: sName,
            age: sAge,
            phone: sPhone,
            address: sAddress
        };

       
        const oModel = new JSONModel(data);
        
       
        this.getView().byId("nameText").setText(data.name);
        this.getView().byId("ageText").setText(data.age);
        this.getView().byId("phoneText").setText(data.phone);
        this.getView().byId("addressText").setText(data.address);
    }
}
