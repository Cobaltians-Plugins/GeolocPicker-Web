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
      cobalt.plugins.send(this, 'selectLocation', params, callback)
    }
  };
  cobalt.plugins.register(plugin);
})(cobalt || {});
