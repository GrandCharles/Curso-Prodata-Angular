/**
 * Created by GrandCharles on 01/12/2016.
 */
(function () {

    angular.module('pdApp').controller('StorageController', StorageController);

    function StorageController(localStorageService) {
        var vm = this;

        vm.lista = [
            {nome: 'GrandCharles', sexo: 'M'}
        ];
        vm.listaAux = [];

        vm.setarInformacoesNoStorage = setarInformacoesNoStorage;

        iniciar();

        function iniciar() {
            verificarSuporteAoStorage();

            vm.listaAux = localStorageService.get('listaTeste');
        }

        function verificarSuporteAoStorage() {
            if (!localStorageService.isSupported) {
                alert('Desculpe, mas seu navegador não suporta nossa aplicação');
            }
        }

        function setarInformacoesNoStorage() {
            localStorageService.set('listaTeste', vm.lista);
        }
    }

})();


