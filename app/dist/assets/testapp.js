"use strict";



define('testapp/adapters/application', ['exports', 'ember-data-fixture-adapter'], function (exports, _emberDataFixtureAdapter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDataFixtureAdapter['default'];
    }
  });
});
define('testapp/app', ['exports', 'ember', 'testapp/resolver', 'ember-load-initializers', 'testapp/config/environment'], function (exports, _ember, _testappResolver, _emberLoadInitializers, _testappConfigEnvironment) {

    var App = undefined;

    _ember['default'].MODEL_FACTORY_INJECTIONS = true;

    App = _ember['default'].Application.extend({
        modulePrefix: _testappConfigEnvironment['default'].modulePrefix,
        podModulePrefix: _testappConfigEnvironment['default'].podModulePrefix,
        Resolver: _testappResolver['default']
    });

    (0, _emberLoadInitializers['default'])(App, _testappConfigEnvironment['default'].modulePrefix);

    exports['default'] = App;
});
define('testapp/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, _emberRadioButtonComponentsLabeledRadioButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadioButtonComponentsLabeledRadioButton['default'];
    }
  });
});
define('testapp/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, _emberRadioButtonComponentsRadioButtonInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadioButtonComponentsRadioButtonInput['default'];
    }
  });
});
define('testapp/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, _emberRadioButtonComponentsRadioButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadioButtonComponentsRadioButton['default'];
    }
  });
});
define('testapp/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('testapp/controllers/home', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			saveUser: function saveUser() {
				sessionStorage.setItem('name', this.get('firstName'));
				sessionStorage.setItem('totalScore', 0);
				console.log(this.get('firstName'));
				this.transitionToRoute('questions.q1', 1);
			} }

	});
});
define('testapp/controllers/questions/q1', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        actions: {
            saveAndShowResult: function saveAndShowResult() {
                if (this.get('model.answer') == this.get('selectedAnswer')) {
                    this.set('score', parseInt(this.get('score')) + 1);
                }
                sessionStorage.setItem('totalScore', this.get('score'));
                this.set('selected', false);
                this.transitionToRoute('results');
                console.log(this.get('score'));
                console.log('From Controller - show results');
            },
            dontSaveAndShowResult: function dontSaveAndShowResult() {

                sessionStorage.setItem('totalScore', this.get('score'));
                this.set('selected', false);
                this.transitionToRoute('results');
                console.log(this.get('score'));
                console.log('From Controller - show results');
            },
            saveAndShowNextQuestion: function saveAndShowNextQuestion(id) {
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
            dontSaveAndShowNextQuestion: function dontSaveAndShowNextQuestion(id) {
                console.log(sessionStorage.getItem('totalScore'));
                if (id == 2) {
                    this.set('score', sessionStorage.getItem('totalScore'));
                }
                this.set('selected', false);
                this.transitionToRoute('questions.q1', id);
                console.log(this.get('score'));
                console.log('From Controller - show next page');
            },
            goHome: function goHome() {
                sessionStorage.removeItem('name');
                sessionStorage.removeItem('totalScore');
                this.transitionToRoute('home');
                console.log('From Controller - go to home page');
            },
            setAnswer: function setAnswer(selectedAns) {
                console.log('From Controller - saving the option selected');
                this.set("selectedAnswer", selectedAns);
                this.set('selected', true);
            }
        }
    });
});
define('testapp/controllers/results', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			showFirstQuestion: function showFirstQuestion() {
				sessionStorage.setItem('totalScore', 0);
				console.log(sessionStorage.getItem('totalScore'));
				console.log('From Controller - show first question');
				this.transitionToRoute('questions.q1', 1);
			},
			goHome: function goHome() {
				sessionStorage.removeItem('name');
				sessionStorage.removeItem('totalScore');
				console.log('From Controller - go to home page');
				this.transitionToRoute('home');
			}
		}
	});
});
define('testapp/helpers/app-version', ['exports', 'ember', 'testapp/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _testappConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _testappConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('testapp/helpers/compare-int', ['exports', 'ember'], function (exports, _ember) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports.compareInt = compareInt;

    function compareInt(params /*, hash*/) {
        var _params = _slicedToArray(params, 3);

        var a = _params[0];
        var b = _params[1];
        var c = _params[2];

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

    exports['default'] = _ember['default'].Helper.helper(compareInt);
});
define('testapp/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('testapp/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('testapp/helpers/sum', ['exports', 'ember'], function (exports, _ember) {
    exports.sum = sum;

    function sum(params /*, hash*/) {
        return parseInt(params) + 1;
    }

    exports['default'] = _ember['default'].Helper.helper(sum);
});
define('testapp/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'testapp/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _testappConfigEnvironment) {
  var _config$APP = _testappConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('testapp/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('testapp/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('testapp/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('testapp/initializers/ember-simple-auth', ['exports', 'testapp/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _testappConfigEnvironment, _emberSimpleAuthConfiguration, _emberSimpleAuthInitializersSetupSession, _emberSimpleAuthInitializersSetupSessionService) {
  exports['default'] = {
    name: 'ember-simple-auth',

    initialize: function initialize(registry) {
      var config = _testappConfigEnvironment['default']['ember-simple-auth'] || {};
      config.baseURL = _testappConfigEnvironment['default'].rootURL || _testappConfigEnvironment['default'].baseURL;
      _emberSimpleAuthConfiguration['default'].load(config);

      (0, _emberSimpleAuthInitializersSetupSession['default'])(registry);
      (0, _emberSimpleAuthInitializersSetupSessionService['default'])(registry);
    }
  };
});
define('testapp/initializers/export-application-global', ['exports', 'ember', 'testapp/config/environment'], function (exports, _ember, _testappConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_testappConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _testappConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_testappConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('testapp/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('testapp/initializers/local-storage-adapter', ['exports', 'ember-local-storage/initializers/local-storage-adapter'], function (exports, _emberLocalStorageInitializersLocalStorageAdapter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter.initialize;
    }
  });
});
define('testapp/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('testapp/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("testapp/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('testapp/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _emberSimpleAuthInstanceInitializersSetupSessionRestoration) {
  exports['default'] = {
    name: 'ember-simple-auth',

    initialize: function initialize(instance) {
      (0, _emberSimpleAuthInstanceInitializersSetupSessionRestoration['default'])(instance);
    }
  };
});
define('testapp/models/q1', ['exports', 'ember-data'], function (exports, _emberData) {

    var Question = _emberData['default'].Model.extend({

        question: _emberData['default'].attr('string'),
        option1: _emberData['default'].attr('string'),
        option2: _emberData['default'].attr('string'),
        option3: _emberData['default'].attr('string'),
        answer: _emberData['default'].attr('string')

    });
    Question.reopenClass({
        FIXTURES: [{
            id: 1,
            question: "The world smallest country is",
            option1: "Canada",
            option2: "Maldives",
            option3: "Vatican City",
            answer: "Vatican City"
        }, {
            id: 2,
            question: "The headquarters of IMF is situated in",
            option1: "Washington",
            option2: "New York",
            option3: "Tokyo",
            answer: "Washington"
        }, {
            id: 3,
            question: "Who wrote Gandhi and Stalin?",
            option1: "Raj Narayan",
            option2: "Louis Fisher",
            option3: "V.S.Naipaul",
            answer: "Louis Fisher"
        }]
    });
    exports['default'] = Question;
});
define('testapp/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('testapp/router', ['exports', 'ember', 'testapp/config/environment'], function (exports, _ember, _testappConfigEnvironment) {

    var Router = _ember['default'].Router.extend({
        location: _testappConfigEnvironment['default'].locationType
    });

    Router.map(function () {
        this.route('home');
        this.route('help');

        this.route('questions', function () {
            this.route('q1', { path: ':q1_id' });
        });
        this.route('notfound', { path: "*:" });
        this.route('results');
    });

    exports['default'] = Router;
});
define('testapp/routes/application', ['exports', 'ember'], function (exports, _ember) {
  var Route = _ember['default'].Route;

  // Ensure the application route exists for ember-simple-auth's `setup-session-restoration` initializer
  exports['default'] = Route.extend();
});
define('testapp/routes/help', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('testapp/routes/home', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('testapp/routes/index', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		beforeModel: function beforeModel() {
			this.replaceWith('home');
		}
	});
});
define('testapp/routes/notfound', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('testapp/routes/questions', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('testapp/routes/questions/q1', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            return this.store.findRecord('q1', params.q1_id);
        },
        redirect: function redirect(model, transition) {
            if (sessionStorage.getItem('name')) {
                return;
            } else {
                this.transitionTo('home');
            }
        }
    });
});
define('testapp/routes/results', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        setupController: function setupController(controller, model) {
            var test = sessionStorage.getItem('totalScore');
            controller.set('totalScore', test);
        }
    });
});
define('testapp/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('testapp/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _emberCookiesServicesCookies) {
  exports['default'] = _emberCookiesServicesCookies['default'];
});
define('testapp/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _emberSimpleAuthServicesSession) {
  exports['default'] = _emberSimpleAuthServicesSession['default'];
});
define('testapp/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _emberSimpleAuthSessionStoresAdaptive) {
  exports['default'] = _emberSimpleAuthSessionStoresAdaptive['default'].extend();
});
define("testapp/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "MbYxHj2N", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"style\",\"text-align:center;\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"head\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"style\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\tbody {background-color:#99ccff;font-color:white}\\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"body\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"style\",\"font-family:trebuchet;color:white\"],[\"flush-element\"],[\"text\",\"QUIZ\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "testapp/templates/application.hbs" } });
});
define("testapp/templates/help", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "iTuw+ZWs", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"i\",[]],[\"flush-element\"],[\"text\",\"Help Document\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n\\tThis help document is to describe how to play the game. There are 3\\n\\tquestions, each having multiple answer choices.\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "testapp/templates/help.hbs" } });
});
define("testapp/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "S9tlveHm", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"username\"],[\"flush-element\"],[\"text\",\"Enter your name\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"size\"],[\"text\",[\"get\",[\"firstName\"]],\"50\"]]],false],[\"text\",\"\\n\\t\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"open-element\",\"style\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\tbutton {background-color:#3399ff;\\n\\t\\t\\t\\t\\tborder-radius:20px;\\n\\t\\t\\t\\t\\tborder-size:2px;\\n\\t\\t\\t\\t\\tcolor: black;\\n\\t\\t\\t\\t\\tfont-style: verdana;\\n\\t\\t\\t\\t\\tpadding: 12px 23px;\\n\\t\\t\\t\\t\\ttext-align: center;\\n\\t\\t\\t\\t\\ttext-decoration: none;\\n\\t\\t\\t\\t\\tdisplay: inline-block;\\n\\t\\t\\t\\t\\tfont-size: 15px;cursor:pointer}\\n\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveUser\"]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\tStart Game\\n\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\"],[\"open-element\",\"button\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"help\"],[[\"class\"],[\"help\"]],0],[\"text\",\"\\t\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\\t\\t\\t\\t\\tHelp\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "testapp/templates/home.hbs" } });
});
define("testapp/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "4gYXg3su", "block": "{\"statements\":[[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "testapp/templates/index.hbs" } });
});
define("testapp/templates/notfound", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "2lKq6ywD", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"You have entered an incorrect URL\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "testapp/templates/notfound.hbs" } });
});
define("testapp/templates/questions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "uglnmJOy", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n \\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "testapp/templates/questions.hbs" } });
});
define("testapp/templates/questions/q1", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "JQWcrTMX", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"title\"],[\"static-attr\",\"style\",\"font-size: 25px;\"],[\"flush-element\"],[\"text\",\"Question \"],[\"append\",[\"unknown\",[\"model\",\"id\"]],false],[\"text\",\". \"],[\"append\",[\"unknown\",[\"model\",\"question\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"style\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\tbutton {background-color:#3399ff;\\n\\t\\tborder-radius:20px;\\n\\t\\tborder-size:2px;\\n\\t\\tcolor: black;\\n\\t\\tfont-style: verdana;\\n\\t\\tpadding: 12px 23px;\\n\\t\\ttext-align: center;\\n\\t\\ttext-decoration: none;\\n\\t\\tdisplay: inline-block;\\n\\t\\tfont-size: 15px;cursor:pointer}\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"label\",[]],[\"static-attr\",\"style\",\"font-size: 20px;\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"radio\"],[\"static-attr\",\"name\",\"options\"],[\"static-attr\",\"value\",\"model.option1\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"setAnswer\",[\"get\",[\"model\",\"option1\"]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"append\",[\"unknown\",[\"model\",\"option1\"]],false],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"label\",[]],[\"static-attr\",\"style\",\"font-size: 20px;\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"radio\"],[\"static-attr\",\"name\",\"options\"],[\"static-attr\",\"value\",\"model.option2\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"setAnswer\",[\"get\",[\"model\",\"option2\"]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"append\",[\"unknown\",[\"model\",\"option2\"]],false],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"label\",[]],[\"static-attr\",\"style\",\"font-size: 20px;\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"radio\"],[\"static-attr\",\"name\",\"options\"],[\"static-attr\",\"value\",\"model.option3\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"setAnswer\",[\"get\",[\"model\",\"option3\"]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"append\",[\"unknown\",[\"model\",\"option3\"]],false],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"selected\"]]],null,4],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"compare-int\"],[[\"helper\",[\"sum\"],[[\"get\",[\"model\",\"id\"]]],null],\"<\",4],null]],null,1,0],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"goHome\"]],[\"flush-element\"],[\"text\",\" Quit \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"dontSaveAndShowResult\"]],[\"flush-element\"],[\"text\",\" Pass \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"dontSaveAndShowNextQuestion\",[\"helper\",[\"sum\"],[[\"get\",[\"model\",\"id\"]]],null]]],[\"flush-element\"],[\"text\",\" Pass\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveAndShowResult\"]],[\"flush-element\"],[\"text\",\" Next\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveAndShowNextQuestion\",[\"helper\",[\"sum\"],[[\"get\",[\"model\",\"id\"]]],null]]],[\"flush-element\"],[\"text\",\"Next\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"compare-int\"],[[\"helper\",[\"sum\"],[[\"get\",[\"model\",\"id\"]]],null],\"<\",4],null]],null,3,2]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "testapp/templates/questions/q1.hbs" } });
});
define("testapp/templates/results", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "GHDVv+vg", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"RESULTS\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\tCongratulations.\\n\\t\\t\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\" Your score is\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"append\",[\"unknown\",[\"totalScore\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"style\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\tbutton {background-color:#3399ff;\\n\\t\\t\\tborder-radius:20px;\\n\\t\\t\\tborder-size:2px;\\n\\t\\t\\tcolor: black;\\n\\t\\t\\tfont-style: verdana;\\n\\t\\t\\tpadding: 12px 23px;\\n\\t\\t\\ttext-align: center;\\n\\t\\t\\ttext-decoration: none;\\n\\t\\t\\tdisplay: inline-block;\\n\\t\\t\\tfont-size: 15px;cursor:pointer}\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showFirstQuestion\"]],[\"flush-element\"],[\"text\",\" Play Again\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"goHome\"]],[\"flush-element\"],[\"text\",\"New Game\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "testapp/templates/results.hbs" } });
});


define('testapp/config/environment', ['ember'], function(Ember) {
  var prefix = 'testapp';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("testapp/app")["default"].create({"name":"testapp","version":"0.0.0+aa751d82"});
}
//# sourceMappingURL=testapp.map
