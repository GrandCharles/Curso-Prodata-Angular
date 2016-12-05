/**
 * Created by GrandCharles on 24/11/2016.
 */
angular.module('pdApp').controller('PrincipalController', PrincipalController);

function PrincipalController($rootScope) {
    vm = this;
    vm.titulo = 'GrandCharles 2016';
    vm.direitos = '® 2016 - Copyright - GrandCharles';

    $rootScope.listaDados = [];

}
