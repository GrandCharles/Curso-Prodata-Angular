/**
 * Created by GrandCharles on 22/11/2016.
 */
angular.module('pdApp').controller('WatchController', WatchController);

WatchController.$inject = ['$scope'];

function WatchController($scope) {
    $scope.corDigitada  = '';
    $scope.classeCss = '';

    $scope.styleDiv = {
        width: '396px',
        height: '150px'
    };

    $scope.$watch('corDigitada', onWatchCor);
    function onWatchCor(valorNovo, valorAntigo) {
        if(valorNovo === valorAntigo){
            return;
        }

        $scope.styleDiv.backgroundColor = valorNovo;
    }

    $scope.dispararEvento = dispararEvento;
    function dispararEvento() {
        $scope.$emit('testeEnvioEvento', {valor:'***  Enviando evento! ***'})
    }


}