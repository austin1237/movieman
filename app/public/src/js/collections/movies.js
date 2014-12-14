var Backbone = require('backbone');
var Movie = require('../models/movie');

module.exports = Backbone.Collection.extend({

  model: Movie,

  url: '/api/movies/',

  parse: function(resp, opts) {
    return resp.data;
  }

});
