import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    var score = sessionStorage.getItem('totalScore');
    controller.set('totalScore', score);
    var questionsAns = sessionStorage.getItem('answered');
    controller.set('answered', questionsAns);
    var username = sessionStorage.getItem('name');
    controller.set('username', username);
  }
});
