/**
 * Created by GrandCharles on 19/11/2016.
 */
angular.module('pdApp').controller('PesquisaCarroController', PesquisaCarroController);

function PesquisaCarroController($scope, transportaObj) {
    var dados = [];

    $scope.entidade = {};

    dados = transportaObj.getItem();

    $scope.entidade = dados;

    $scope.texto = dados.nmCarro;

}