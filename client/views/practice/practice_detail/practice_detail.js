Template.practiceDetail.events({
  'click #inbox': function (event,tmpl) {
    CollPractice.update({_id: this._id}, {
      $set: {"Return to Index": true},
    }),
    Router.go('practiceIndex');
  }
}); 