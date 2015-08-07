CollPractice = new Mongo.Collection('practiceCollection');
//CollPractice.attachBehaviour('timestampable');
// was field, now fieldNames ?
// see messages collection init for how this one used to be.
//CollPractice.allow({
//  update: function(userId, doc, fieldNames, modifier) {
//    return doc.owner === userId;
//  }
//});
/* unnecessary for the moment
CollPractice.allow({
	insert: function ()
	{
		return true;
	},
	update: function ()
	{
		return true;
	}
}); */
