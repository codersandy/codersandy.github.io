import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('q1', params.q1_id);
	}
});
