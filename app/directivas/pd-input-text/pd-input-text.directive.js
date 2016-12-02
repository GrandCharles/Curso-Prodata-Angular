/**
 * Created by GrandCharles on 26/11/2016.
 *
 * Invocação da diretiva
 * ‘A’ – <span hello-world></span>
 * ‘E’ – @ <hello-world></hello-world>
 * ‘C’ – = <span class=“hello-world”></span>
 * ‘M’ – <!– directive: hello-world –>
 */

(function () {
    'use strict';

    angular.module('pdApp').directive('pdInputText', pdInputText);

    /* @ngInject */
    function pdInputText() {
        return {
            restrict: 'E',
            templateUrl: 'app/directivas/pd-input-text/pd-input-text.html',
            scope: {
                label: '@',
                placeholder: '@',
                colSpan: '@',
                ngModel: '='
            },
            link: link /** Compilando **/
        };


        function link(scope, element, attrs) {
            scope.idInputText = 'pdInputText' + scope.$id;
            scope.classColsSpan = 'col-md-' + (scope.colSpan || '3');

        }
    }

})();


