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
			this.send('selectLocation', params, callback)
		},
        send:function(action, data, callback){
            cobalt.send({ type : "plugin", name : this.name, action : action, data : data }, callback);
        }
    };
    cobalt.plugins.register(plugin);
})(cobalt || {});
