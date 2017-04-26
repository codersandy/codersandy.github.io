import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
export default Ember.Controller.extend({
	//session: Ember.inject.service('session')
	score: storageFor('score'),
	actions: {
		countUp() {
			this.incrementProperty('score.totalScore');
		},
		resetCounter() {
			this.get('score').clear();
		}
	}
});
