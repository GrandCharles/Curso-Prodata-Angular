/**
 * Created by GrandCharles on 24/11/2016.
 */
angular.module('pdApp').controller('PesquisaBairroController', PesquisaBairroController);

function PesquisaBairroController($scope, $rootScope) {
    $scope.nmBairro = $rootScope.dadosSalvos.nmBairro;
    $scope.nmCidade = $rootScope.dadosSalvos.nmCidade;
    $scope.nmEstado = $rootScope.dadosSalvos.nmEstado;

}