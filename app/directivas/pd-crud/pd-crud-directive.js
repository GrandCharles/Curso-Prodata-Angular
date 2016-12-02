/**
 * Created by GrandCharles on 26/11/2016.
 */
(function () {
    'use strict';

    angular
        .module('pdApp')
        .directive('pdCrud', pdCrud);

    /* @ngInject */
    function pdCrud() {
        return {
            restrict: 'E',

            link: link
        };


        function link(scope, element, attrs) {


        }
    }


})();


