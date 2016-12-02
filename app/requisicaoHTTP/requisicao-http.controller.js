/**
 * Created by GrandCharles on 01/12/2016.
 */
(function () {
    angular.module('pdApp').controller('HttpController', HttpController)

    function HttpController($http) {
        var vm = this;

        vm.listaDados = [];

        vm.gridOptions = {
            data: 'vm.listaDados'
        };

        //não faça isso em produção
        //coloque a chamada http no service
        vm.carregarDados = carregarDados;
        function carregarDados() {
            $http.get('https://jsonplaceholder.typicode.com/photos').then(onPesquisarResult, onPesquisarFault);
        }

        function onPesquisarResult(response) {
            vm.listaDados = response.data;
        }

        function onPesquisarFault(rejection) {

        }
    }

})();
