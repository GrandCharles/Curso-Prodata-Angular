/**
 * Created by GrandCharles on 26/11/2016.
 */

(function () {
    'use strict';

    angular
        .module('pdApp').directive('pdInputText', pdInputText);

    /* @ngInject */
    function pdInputText() {
        return {
            restrict: 'E',
            template: 'app/arquitetura/directivas/pd-input-text/pd-input-text.html',
            scope: {
                label: '@',
                placeholder: '@',
                ngModel: '=',
                colSpan: '@'
            },
            link:link
        };

        function link(scope, element, attrs) {
            scope.idInputText = 'pdInputText' + scope.$id;
            scope.classColsSpan = 'col-md-' + (scope.colSpan || '3');

        }
    }

})();


