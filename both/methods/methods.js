Meteor.methods({
    toggleMenu:function(id, inMenu){
        check(id, String);
        check(inMenu, Boolean);
        RecipesCol.update(id, {
            $set: {
                aufDerKarte: !inMenu
            }
        });
    }
});
