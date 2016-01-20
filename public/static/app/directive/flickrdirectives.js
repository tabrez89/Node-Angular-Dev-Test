/*Author : Tabrez Akhlaque
Date : 19th Jan 2016
Purpose : Generic directives to be used across App*/
define(['app/app'],function(){
return app.directive('ngEnter', function() {
        //On form Enter
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if (event.which === 13) {
                    scope.$apply(function() {
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    }).directive('showErrors', function() {
        //Validation on inputs blur
    return {
      restrict: 'A',
      require:  '^form',
      link: function (scope, el, attrs, formCtrl) {
        var inputEl   = el[0].querySelector("[name]");
        var inputNgEl = angular.element(inputEl);
        var inputName = inputNgEl.attr('name');
        inputNgEl.bind('blur', function() {
          el.toggleClass('has-error', formCtrl[inputName].$invalid);
        });
      }
    };
  });
  });
