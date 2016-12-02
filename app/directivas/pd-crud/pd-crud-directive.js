/**
 * Created by GrandCharles on 26/11/2016.
 */
(function () {
    'use strict';

    angular.module('pdApp').directive('pdCrud', pdCrud);

    /* @ngInject */
    function pdCrud(AlertService) {
        return {
            restrict: 'E',
            templateUrl: 'app/directivas/pd-crud/pd-crud.html',
            transclude: true,
            scope: {
                titulo: '@',
                salvar: '&',
                limpar: '&',
                deletar: '&',
                exibirBotaoExcluir: '='
            },
            link: link
        };

        function link(scope, element, attrs) {
            scope.formName = 'pdCrudForm' + scope.$id;

            iniciar();

            function iniciar() {
                if (!attrs.salvar) {
                    AlertService.error('Programador, você não informou a função salvar');
                }
            }
        }
    }

})();


