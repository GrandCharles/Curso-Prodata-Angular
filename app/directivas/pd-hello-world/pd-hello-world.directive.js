/**
 * Created by GrandCharles on 26/11/2016.
 */
(function () {
    /**  Expõe as exceções do seu código javascript, vendo os erros mais detalhadamente **/
    'use strict';

    angular.module('pdApp').directive('pdHelloWorld', pdHelloWorld);

    /* @ngInject */
    function pdHelloWorld() {
        return {
            restrict: 'E', /* Directiva de elemento */
            template: '<div> Esse é meu primeiro componente</div>'
        };

    }


})();

