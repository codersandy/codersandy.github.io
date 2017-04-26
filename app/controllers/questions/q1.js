import Ember from 'ember';

export default Ember.Controller.extend({
	setClicked() {
		this.set("selected",true);
	}
});
