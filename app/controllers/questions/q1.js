import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        showResult() {
            if (this.get('model.answer') == this.get('selectedAnswer')) {
                this.set('score', parseInt(this.get('score')) + 1);

            }
            sessionStorage.setItem('totalScore', this.get('score'));
            this.set('selected', false);
            this.transitionToRoute('results');
            console.log(this.get('score'));
            console.log('From Controller - show results');
        },
        showNextQuestion(id) {
            console.log(sessionStorage.getItem('totalScore'));
            if (id == 2) {
                this.set('score', sessionStorage.getItem('totalScore'));
            }
            if (this.get('model.answer') == this.get('selectedAnswer')) {
                this.set('score', parseInt(this.get('score')) + 1);

            }
            this.set('selected', false);
            this.transitionToRoute('questions.q1', id);
            console.log(this.get('score'));
            console.log('From Controller - show next page');
        },
        goHome() {
            sessionStorage.removeItem('name');
            sessionStorage.removeItem('totalScore');
            this.transitionToRoute('home');
            console.log('From Controller - go to home page');
        },
        setAnswer(selectedAns) {
            console.log('From Controller - saving the option selected');
            this.set("selectedAnswer", selectedAns);
            this.set('selected', true);
        },
        checkSelect() {
            return this.get('selected');
        }

    }
});
