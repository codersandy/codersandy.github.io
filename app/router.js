import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('help');

  this.route('questions', function() {
      this.route('q1', {path: ':q1_id'});
  });
  this.route('notfound', {path: "*:"});
  this.route('results');
});

export default Router;
