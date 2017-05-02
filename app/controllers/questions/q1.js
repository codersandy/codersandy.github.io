import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveAndShowNextQuestion(id) {
      console.log(sessionStorage.getItem('totalScore'));
      console.log(sessionStorage.getItem('answered'));
      this.set('selected', false);

      if (id == 2) {
        this.set('answeredQues', 1);
        this.set('score', sessionStorage.getItem('totalScore'));
      }
      else {
        this.set('answeredQues', parseInt(this.get('answeredQues') + 1));
      }
      if (this.get('model.answer') == this.get('selectedAnswer')) {
        this.set('score', parseInt(this.get('score')) + 1);
      }

      if (id == 4) {
        sessionStorage.setItem('totalScore', this.get('score'));
        sessionStorage.setItem('answered', this.get('answeredQues'));
        this.transitionToRoute('results');
      } else {
        this.transitionToRoute('questions.q1', id);
      }
      console.log(this.get('score'));
      console.log(this.get('answeredQues'));
      console.log('From Controller - show next page');
    },

    dontSaveAndShowNextQuestion(id) {
      console.log(sessionStorage.getItem('totalScore'));
      this.set('selected', false);
      if (id == 2) {
        this.set('answeredQues', 1);
        this.set('score', sessionStorage.getItem('totalScore'));
      }
      else {
        this.set('answeredQues', parseInt(this.get('answeredQues') + 1));
      }
      if (id == 4) {
        sessionStorage.setItem('totalScore', this.get('score'));
        sessionStorage.setItem('answered', this.get('answeredQues'));
        this.transitionToRoute('results');
      } else {
        this.transitionToRoute('questions.q1', id);
      }
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
    isSelected() {
      if (this.get('selected') == undefined) {
        return false;
      } else if (this.get('selected') == false) {
        return true;
      }
      return false;
    }
  }
});
