import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		showFirstQuestion() {
			sessionStorage.setItem('totalScore',0);
			sessionStorage.setItem('answered',0);
			console.log(sessionStorage.getItem('totalScore'));
			console.log('From Controller - show first question');
			this.transitionToRoute('questions.q1',1);
		},
		goHome() {
			sessionStorage.removeItem('name');
			sessionStorage.removeItem('totalScore');
			sessionStorage.removeItem('answered');
			console.log('From Controller - go to home page');
			this.transitionToRoute('home');

		}
	}
});
