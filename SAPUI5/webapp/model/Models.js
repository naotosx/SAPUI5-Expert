sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (JSONModel) {
    "use strict";
    return {
        crearRecipiente: function () {
            var data = {
                recipient: {
                    name: ""
                }
            };
            return new JSONModel(data);
        }
    }
})