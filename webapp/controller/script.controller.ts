

import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import Router from "sap/ui/core/routing/Router";

/**
 * @namespace cmd.sap.cc.ztype.controller
 */

// Define an interface for the item structure
interface Item {
    name: string;
    age: number;
}

export default class Script extends Controller {
    
    private oModel!: JSONModel;

    public onInit(): void 
    {
        const data = 
        {
            items: this.getInitialData()
        };
        this.oModel = new JSONModel(data);
        this.getView().setModel(this.oModel);
    }

    private getInitialData(): Item[] 
    {
        return [
            { name: "Alice", age: 25 },
            { name: "Bob", age: 30 },
            { name: "Charlie", age: 35 },
        ];
    }

    public onNamePress(event: sap.ui.base.Event): void 
    {
        const item = event.getSource().getBindingContext().getObject();
       
        const router = this.getOwnerComponent().getRouter();
        router.navTo("Routetest", {
            name: item.name, 
            age: item.age // Pass other data as needed
        });
    }
}
