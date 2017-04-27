import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		saveUser() {
			sessionStorage.setItem('name', this.get('firstName'));
			sessionStorage.setItem('totalScore',0);
			console.log(this.get('firstName'));
			this.transitionToRoute('questions.q1',1);
		}}

});
