var BaseModel = require('./base');

//Class SearchResultModel
module.exports = BaseModel.extend({
  url: function() {
    return '/api/movies/search/id/' + this.id;
  }
});
