/**
 * Created by GrandCharles on 22/11/2016.
 */
angular.module('pdApp').controller('RouterController', RouterController);

function RouterController($scope, $state) {
    $scope.abrirPagina = abrirPagina;

    function abrirPagina(nomeState) {
        $state.go(nomeState);
    }
}