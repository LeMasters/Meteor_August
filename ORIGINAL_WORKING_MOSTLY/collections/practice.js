Practice = new Meteor.Collection('practice');

Practice.allow({
  update: function(userId, doc, fields, modifier) {
    return doc.owner === userId;
  }
});

