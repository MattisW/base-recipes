RecipesCol = new Mongo.Collection("recipes");

RecipesCol.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
});

Zutat = new SimpleSchema({
    name: {
        type: String
    },
    menge: {
        type: String
    }
});

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    desc: {
        type: String,
        label: 'Description'
    },
    zutaten: {
        type: [Zutat]
    },
    aufDerKarte: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    author: {
        type: String,
        label: 'Author',
        autoValue: function() {
            return this.userId
        },
        autoform: {
            type: 'hidden'
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date()
        },
        autoform: {
            type: 'hidden'
        }
    }
});

RecipesCol.attachSchema(RecipeSchema);

/*
Template.Recipes.events({
    "submit #insertRecipeForm": function(event, template){
         event.preventDefault();
    }
});
*/
