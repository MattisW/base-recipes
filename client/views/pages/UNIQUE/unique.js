Meteor.subscribe("tasks");
// counter starts at 0
Template.pageTables.helpers({
    tasks: function() {
        return Tasks.find();
    }
});
Template.taskAdd.helpers({
    rendered: function() {

    }
});
Template.taskAdd.events({
    "submit .task-new": function(event) {
        event.preventDefault();

        var t = event.target.desc.value;
        console.log(t);
        Meteor.call("addTask", t);

        event.target.desc.value = "";
        return false;
    }
});

Template.taskSingle.helpers({
    /*tasks: function() {
      return Tasks.find();
    },*/
    editing: function() {
        if (Session.get("selectedTask") === this._id) {
            $('.edit-task').focus();
            return true;
        }
    },
    private: function() {
        if (Meteor.userId() === this.owner && this.private === true) {
            return true;
        }
    }
});
Template.taskSingle.events({
    "click .delete": function() {
        var id = this._id;
        if (confirm("do you wanna delete this?")) {
            Meteor.call("deleteTask", id);
        }
    },
    "click .taskCheck": function() {
        var id = this._id;
        var checked = this.checked;
        var owner = this.owner;
        console.log("CHECKBOX CLICKED");
        Meteor.call("checkTask", id, checked, owner);
    },
    "click .edit, dblclick .taskDesc": function() {
        var id = this._id;

        if (Session.get("selectedTask") === id) {
            /*console.log("onEdit IF #1: + ID" + id);
            console.log('onEdit IF #2:' + Session.get("selectedTask"));
            Session.set("selectedTask", null);
            console.log('onEdit IF #3:' + Session.get("selectedTask"));*/
        } else {
            Session.set("selectedTask", id);
            console.log('onEdit ELSE:' + Session.get("selectedTask"));
        }
    },
    "mouseup .endEdit": function() {
        Session.set("selectedTask", null);
    },
    /*"blur .edit-task": function(event) {
        var id = this._id;
        var newTitle = event.target.value;
        Meteor.call("saveEditing", id, newTitle);
        Session.set("selectedTask", null);
    },*/
    "click .changePrivacy": function() {
        var id = this._id;
        var privacy = !this.private;
        Meteor.call("togglePrivacy", id, privacy);
    }
});
