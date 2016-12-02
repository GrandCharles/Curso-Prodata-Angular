/**
 * Created by GrandCharles on 26/11/2016.
 */
angular.module('pdApp').controller('Storage',Storage);

function Storage(){
    var vm = this;
    vm.lista = [{nome:'GrandCharles', sexo:'M'}];
    vm.listaAux = [];

    vm.setarInformacaoStorage = setarInformacaoStorage;

    iniciar();

    function iniciar() {
        verificaSuporteStorage();
        vm.listaAux = localStorageService.get('listaTeste');
    }

    function verificaSuporteStorage(){
        if (!localStorageService.isSupported){
            alert('Desculpe, seu navegador não suporta nossa aplicação');
        }
    }

    function setInformacaoStorage(){
        localStorageService.set('listaTeste', vm.lista);

    }
}