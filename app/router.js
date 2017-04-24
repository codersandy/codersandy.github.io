import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('help');
  this.route('questions' , { path : '/questions/:questions_id'} );
});

export default Router;
