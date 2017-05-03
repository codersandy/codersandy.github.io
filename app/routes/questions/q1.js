import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('question', params.q1_id);
    },
    redirect(model, transition) {
        if (sessionStorage.getItem('name')) {
            return;
        } else {
            this.transitionTo('home');
        }
    }
});
