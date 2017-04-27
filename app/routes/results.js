import Ember from 'ember';

export default Ember.Route.extend({
    setupController(controller, model) {
        var test = sessionStorage.getItem('totalScore');
        controller.set('totalScore', test);
    }
});
