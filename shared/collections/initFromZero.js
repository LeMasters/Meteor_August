/*
 * Created by garrisonlemasters on 7/28/15.
 */
emailInbox = new Mongo.Collection("emailInbox");
multitaskingScript = new Mongo.Collection("multitaskingScript");
participantBase = new Mongo.Collection("participantBase");
instrumentLog = new Mongo.Collection("instrumentLog");
practiceInbox = new Mongo.Collection("practiceInbox");

myUserID = "KarateDave";
/*
Don't need permissions for now
emailInbox.allow({
	insert: function ()
	{
		return true;
	},
	update: function ()
	{
		return true;
	},
	remove: function ()
	{
		return true;
	}
});

multitaskingScript.allow({
	insert: function ()
	{
		return true;
	},
	update: function ()
	{
		return true;
	},
	remove: function ()
	{
		return true;
	}
});

participantBase.allow({
	insert: function ()
	{
		return true;
	},
	update: function ()
	{
		return true;
	},
	remove: function ()
	{
		return true;
	}
});

instrumentLog.allow({
	insert: function ()
	{
		return true;
	},
	update: function ()
	{
		return true;
	},
	remove: function ()
	{
		return true;
	}
});
*/
