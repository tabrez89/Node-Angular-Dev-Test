requirejs.config({
  "paths":{
        "angular": "/bower_components/angular/angular.min",
        "uiRouter": "lib/ui-router/angular-ui-router.min",
        'ui-bootstrap':'lib/bootstrap/ui-bootstrap-tpls-0.11.0.min',
        'app-directive':'app/directive/flickrdirectives',
        //'builtjs':'build/built.min', On Production
        'app': 'app'
    },
    "shim": {
    "angular": {
      "exports": "angular"
    },
        'ui-bootstrap': ['angular'],
    'uiRouter':{
            deps: ['angular']
        },
            'app': ['angular','ui-bootstrap','uiRouter','app-directive']
    }
});

require(['angular','app/app','app/controller/MainCtrl'], function (angular) {
    angular.bootstrap(document, ['app']);
});