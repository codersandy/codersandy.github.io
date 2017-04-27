import Ember from 'ember';

export function compareInt(params /*, hash*/ ) {
    let [a, b, c] = params;
    switch (b) {
        case '<=':
            return parseInt(a) <= c;
            break;
        case '<':
            return parseInt(a) < c;
            break;
        default:
            return false;
    }

}

export default Ember.Helper.helper(compareInt);
