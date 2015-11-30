Template.RecipeSingle.onCreated(function() {
    var self = this;
    self.autorun(function() {
        let id = FlowRouter.getParam('id');
        self.subscribe('singleRecipe',id);
    });
});

Template.RecipeSingle.helpers({
    recipes: ()=> {
        let id = FlowRouter.getParam('id');
        return RecipesCol.findOne({_id: id});
    }
});
