sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
    
], 
/**
 * 
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 * @param {typeof sap.m.MessageToast} MessageToast 
 * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
 */
function(Controller, MessageToast, JSONModel, ResourceModel, Models) { //Models
    return Controller.extend("logaligroup.SAPUI5.controller.App", {
        onInit : function() {
            // set data model
            /*var data = {
                recipient: {
                    name: ""
                }
            };
            var jsonM = new JSONModel(data);*/
            
        }, 
        onshowHello: function() {
            // lee i18n el modelo
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            // lee propiedad del control
            var sRecipient = this.getView().getModel().getProperty("/recipient/name"); // obtenemos la porpiedad
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
        }
    });
})