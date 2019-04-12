(function(cobalt){
    var plugin = {
        'name': 'geolocPicker',
        init: function () {
            // Create shortcuts
            cobalt.geolocPicker=this.selectLocation.bind(this);
        },
        handleEvent:function(json){
            cobalt.log(this.name, ' plugin : unknown event received :', json)
        },
		selectLocation: function(params, callback){
			cobalt.plugins.send(this, 'selectLocation', params, callback)
		}
    };
    cobalt.plugins.register(plugin);
})(cobalt || {});
