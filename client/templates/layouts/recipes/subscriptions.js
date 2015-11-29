Meteor.subscribe("RecipesPub");

Template.Recipes.helpers({
    recipes: function(){
        return RecipesCol.find({});
    }
});
