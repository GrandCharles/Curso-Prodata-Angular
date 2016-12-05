/**
 * Created by GrandCharles on 03/12/2016.
 */
(function () {
    'use strict';

    angular.module('pdApp').directive('directiveName', directiveName);

    directiveName.$inject = ['dependency'];

    /* @ngInject */
    function directiveName(dependency) {
        return {
            restrict: 'E',
            templateUrl: 'app/directivas/pd-super-crud/cadastro-produto.html',
            scope: {


            },
            link: link,
        };

        function link(scope, element, attrs) {

        }
    }


})();

