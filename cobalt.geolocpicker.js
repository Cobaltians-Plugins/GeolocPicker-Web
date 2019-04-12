(function(cobalt){
    var plugin = {
        classe: {
        	ios: 'GeolocPickerPlugin',
			android: 'io.kristal.geolocpicker.GeolocPicker'
        }
        init: function () {
            // Create shortcuts
            cobalt.geolocPicker=this.selectLocation.bind(this);
        },
		selectLocation: function(params, callback){
			cobalt.plugins.send(this, 'selectLocation', params, callback)
		}
    };
    cobalt.plugins.register(plugin);
})(cobalt || {});
