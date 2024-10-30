// import Controller from "sap/ui/core/mvc/Controller";
// import JSONModel from "sap/ui/model/json/JSONModel";

// /**
//  * @namespace cmd.sap.cc.ztype.controller
//  */
// export default class script extends Controller {

//     /*eslint-disable @typescript-eslint/no-empty-function*/
//     public onInit(): void {
//         const data = {
//             items: [
//                 { name: "Alice", age: 25 },
//                 { name: "Bob", age: 30 },
//                 { name: "Charlie", age: 35 },
//             ]
//         };
//         const oModel = new sap.ui.model.json.JSONModel(data);
//         this.getView().setModel(oModel);

//     }
//     public onAfterRendering(oEvent): void {
//         debugger;
//     }
//     public onBeforeRendering(oEvent): void {
//      debugger;   
//     }
// }

import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace cmd.sap.cc.ztype.controller
 */

// Define an interface for the item structure
interface Item {
    name: string;
    age: number;
}

export default class Script extends Controller {
    
    // Private property to hold the data model
    private oModel!: JSONModel;

    public onInit(): void {
        const data = {
            items: this.getInitialData()
        };
        this.oModel = new JSONModel(data);
        this.getView().setModel(this.oModel);
    }

    // A method to initialize the data
    private getInitialData(): Item[] {
        return [
            { name: "Alice", age: 25 },
            { name: "Bob", age: 30 },
            { name: "Charlie", age: 35 },
        ];
    }

    public onAfterRendering(oEvent: Event): void {
        debugger;
    }

    public onBeforeRendering(oEvent: Event): void {
        debugger;   
    }
}
