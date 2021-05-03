sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/resource/ResourceModel",
    "logaligroup/SAPUI5/model/Models"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.ResourceModel} ResourceModel
     */
    function (UIComponent, ResourceModel, Models) {

        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            metadata: {
                manifest : "json"
            },

            init: function () {
                // Llamar funcion init
                UIComponent.prototype.init.apply(this, arguments);

                // Envia modelo Json 
                this.setModel(Models.crearRecipiente());

                // set i18n
                var i18Model = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n" });
                this.setModel(i18Model, "i18n");
            }
        });

    });