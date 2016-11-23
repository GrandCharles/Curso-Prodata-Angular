/**
 * Created by GrandCharles on 14/11/2016.
 */
angular.module('pdApp').controller('HelloController', HelloController);

function HelloController($scope) {
    $scope.nome = 'Hello Word - GrandCharles';

    $scope.$on('testeEnvioEvento', onTesteEnvioEvento);
    function onTesteEnvioEvento(event, data) {
        var teste = data;

        console.log('Nome: ', event.currentScope.teste)
    }
}