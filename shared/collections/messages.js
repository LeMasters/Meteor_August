Messages = new Mongo.Collection('messageCollection');
//Messages.attachBehaviour('timestampable');

/*
Messages.allow({
  update: function(userId, doc, fields, modifier) {
    return doc.owner === userId;
  }
});
*/
/* not needed for now
Messages.allow({
	insert: function ()
	{
		return true;
	},
	update: function ()
	{
		return true;
	}
});
*/
