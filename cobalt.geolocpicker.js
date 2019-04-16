(function(cobalt) {
  var plugin = {
    name: 'CobaltGeolocPickerPlugin',
    classes: {
      ios: 'GeolocPickerPlugin',
      android: 'io.kristal.geolocpicker.GeolocPicker'
    },
    init: function() {
      cobalt.geolocPicker = this.selectLocation.bind(this);
    },
    selectLocation: function(params, callback) {
      cobalt.geolocPickerCallback = callback;
      cobalt.plugins.send(this, 'selectLocation', params)
    },
    handleEvent: function(json) {
      if (typeof cobalt.geolocPickerCallback === 'function') {
        cobalt.geolocPickerCallback(json.data)
      }
    }
  };
  cobalt.plugins.register(plugin);
})(cobalt || {});
