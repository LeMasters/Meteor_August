Meteor.publish('messages_index', function() {
  return Messages.find({owner: this.userId});
});

Meteor.publish('messages_detail', function(id) {
  return Messages.find({_id: id});
});

Meteor.publish('practice_index', function() {
  return Practice.find({owner: this.userId});
});

Meteor.publish('practice_detail', function(id) {
  return Practice.find({_id:id});
})

