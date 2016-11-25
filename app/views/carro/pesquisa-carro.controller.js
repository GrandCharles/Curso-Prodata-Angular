/**
 * Created by GrandCharles on 19/11/2016.
 */
angular.module('pdApp').controller('PesquisaCarroController', PesquisaCarroController);

function PesquisaCarroController($scope, $rootScope) {
    $scope.nmCarro = $rootScope.dadosSalvos.nmCarro;
    $scope.nmCor = $rootScope.dadosSalvos.nmCor;
    $scope.dtLanc = $rootScope.dadosSalvos.dtLanc;

}