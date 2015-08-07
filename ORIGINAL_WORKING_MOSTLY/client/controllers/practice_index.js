PracticeIndexController = RouteController.extend({
  waitOn:function() {
    Meteor.subscribe('practice_index');
  },
  
  action: function() {
    this.render();
  }
});