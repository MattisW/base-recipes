Meteor.subscribe("RecipesPub");

// INSTEAD OF USING THE REGULAR GENERIC SUBSCRIPTION
// EVERYWHERE WE SUBSCRIBE ONLY ON THE TEMPLATE LEVEL
// ON ITS CREATION. ONCE CREATED, WE SUBSCRIBE IN AN
// AUTORUN TO CALL THE SUBSCRIBTION EACH TIME THE
// TEMPLATE IS USED
Template.Recipes.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('RecipesPub');
    });
});

Template.Recipes.helpers({
    recipes: function(){
        return RecipesCol.find({});
    }
});
