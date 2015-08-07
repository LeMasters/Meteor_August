Template.PracticeIndex.helpers({
  practices: function() {
    return Practice.find({},
                        {
                          sort: {priority: 1}
                        });
  }
});
