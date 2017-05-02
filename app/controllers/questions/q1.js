import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        saveAndShowResult() {
            if (this.get('model.answer') == this.get('selectedAnswer')) {
                this.set('score', parseInt(this.get('score')) + 1);

            }
            sessionStorage.setItem('totalScore', this.get('score'));
            sessionStorage.setItem('answered',parseInt(this.get('answeredQues')+1));
            this.set('selected', false);
            this.transitionToRoute('results');
            console.log(this.get('score'));
            console.log('From Controller - show results');
        },
        dontSaveAndShowResult() {

            sessionStorage.setItem('totalScore', this.get('score'));
            this.set('selected', false);
            this.transitionToRoute('results');
            console.log(this.get('score'));
            console.log('From Controller - show results');
        },
        saveAndShowNextQuestion(id) {
            console.log(sessionStorage.getItem('totalScore'));

            if (id == 2) {
              this.set('answeredQues', parseInt(sessionStorage.getItem('answered')) + 1);
                this.set('score', sessionStorage.getItem('totalScore'));
            }
            this.set('answeredQues', parseInt(this.get('answeredQues')+1));
            if (this.get('model.answer') == this.get('selectedAnswer')) {
                this.set('score', parseInt(this.get('score')) + 1);
            }
            this.set('selected', false);
            this.transitionToRoute('questions.q1', id);
            console.log(this.get('score'));
            console.log('From Controller - show next page');
        },
        dontSaveAndShowNextQuestion(id) {
            console.log(sessionStorage.getItem('totalScore'));
            if (id == 2) {
                this.set('score', sessionStorage.getItem('totalScore'));
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
        }
    }
});
