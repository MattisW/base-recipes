Template.Recipe.events({
    "click .toggle-menu": function(event, template){
        check(this.aufDerKarte, Boolean);
        Meteor.call("toggleMenu", this._id, this.aufDerKarte);
    }
});
