Meteor.publish( 'RecipesPub', function() {
  return RecipesCol.find({});
});
