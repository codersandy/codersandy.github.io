import Ember from 'ember';

export function sum(params /*, hash*/ ) {
    return parseInt(params) + 1;
}

export default Ember.Helper.helper(sum);
