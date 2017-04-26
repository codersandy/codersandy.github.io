import Ember from 'ember';

export default Ember.Component.extend({
	selected : false,
	actions: {	setClicked() {
		this.set("selected",true);
	}
	}
});
