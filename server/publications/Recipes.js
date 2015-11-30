Meteor.publish( 'RecipesPub', function() {
  return RecipesCol.find({});
});
Meteor.publish("singleRecipe", function(id){
    check(id, String);
    return RecipesCol.find({_id: id});
});
