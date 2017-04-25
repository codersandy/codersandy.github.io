import Ember from 'ember';

export default Ember.Controller.extend({
actions: {
    login() {
        // Logging the user in and redirecting to homepage
        this.transitionToRoute('index');
      }
    }
  
});
