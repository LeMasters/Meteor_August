var numberTimes = participantBase.find(myUserID).count();
if(numberTimes===0) {
    participantBase.insert({
        participant: myUserID,
        serialNumber: '101982111',
        number: 0
    });
} else {
    var tempObj = participantBase.findOne(myUserID).fetch();
    tempObj.update({number: number+1})
}

var count = practiceInbox.find({author: "Mary", owner: myUserID}).count();
if(count === 0) {
    practiceInbox.insert(
        {author: "Mary", subject: "Availability for mtg re Strategic Plan", time: "9:35AM", details: "I can be there Friday morning or anytime on Thursday. Thanks for scheduling this!", priority: 1, owner: myUserID, has_read: false}
    );
} else {
    practiceInbox.update(//{_id:idSelector}, {$set:{
        {$set: {has_read: false}}
    );
}
