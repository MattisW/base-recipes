const authenticatedRedirect = () => {
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    FlowRouter.go( 'home' );
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});

authenticatedRoutes.route( '/', {
  name: 'main',
  action() {
    BlazeLayout.render( 'MainLayout', { yield: 'Recipes' } );
  }
});

authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboard' } );
  }
});

FlowRouter.route('/menu', {
    name: 'menu',
    action() {
        BlazeLayout.render('MainLayout', {yield: 'Menu'});
    }
});

FlowRouter.route('/recipe/:id', {
    name: 'recipe-single',
    action() {
        BlazeLayout.render('MainLayout', {yield: 'RecipeSingle'});
    }
});
