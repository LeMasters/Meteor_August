Template.instructions.helpers({
});

Template.instructions.events({
  'click [name=next]': function(e, tmpl) {
    Router.go('practiceIndex');
  }
});