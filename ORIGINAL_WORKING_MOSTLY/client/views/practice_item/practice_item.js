Template.PracticeItem.events({
  'click .list-group-item': function(e, tmpl) {
    Practice.update({_id: this._id}, {
      $set: {"has_read": true}
    });
  }
});

Template.PracticeItem.helpers({
  hasReadClass: function() {
    return this.has_read? 'read': '';
  },
  
  hasBeenReadIcon: function() {
    if(this.has_read) {
      return "glyphicon glyphicon-check";
    } else {
      return "glyphicon glyphicon-unchecked";
    }
  }
});