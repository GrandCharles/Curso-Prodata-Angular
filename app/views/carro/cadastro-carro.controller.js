/**
 * Created by GrandCharles on 19/11/2016.
 */
/**
 */
angular.module('pdApp').controller('CadastroCarroController', CadastroCarroController);

CadastroCarroController.$inject = ['$scope', '$rootScope','$state', 'AlertService', '$filter'];

function CadastroCarroController($scope, $rootScope, $state, AlertService, $filter) {
    var vm = this;
    var indice = 0;
    var incluir = true;

    vm.nome = "GrandCharles";

    vm.entidade = {};
    vm.listaCarro = $rootScope.listaDados;

    $rootScope.dadosSalvos = {};


    vm.tpCambio = [
        {valor:'A', descricao:'Automático'},
        {valor:'M', descricao:'Manual'}
    ];

    vm.tpPessoa = [
        {tipo:'F', nome:'Física'},
        {tipo:'J', nome:'Jurídica'}
    ];

    vm.novo = novo;
    vm.salvar = salvar;
    vm.fechar = fechar;

    vm.editar = editar;
    vm.excluir = excluir;
    vm.deletar = deletar;
    vm.consultar = consultar;

    vm.abrirPag = abrirPag;

    vm.gridOptions = {
        columnDefs: [
            {name: 'Marca', field: 'nmMarca', width: 150},
            {name: 'Nome', field: 'nmCarro', width: 300},
            {name: 'Cor', field: 'nmCor', width: 100},
            {name: 'Data lançamento', field: 'dtLanc', cellTemplate: 'app/template/grid/cell-template-date.html', width: 150},

            {name: 'E', field: 'editar', cellTemplate: 'app/template/grid/cell-template-editar.html', width: 35},
            {name: 'X', field: 'excluir', cellTemplate: 'app/template/grid/cell-template-excluir.html', width: 35},
            {name: 'C', field: 'consultar', cellTemplate: 'app/template/grid/cell-template-consultar.html', width: 35}
        ],
        data: 'vm.listaCarro',
        enableColumnMenus: false
    };

    function salvar() {
        if ($scope.carroForm.$invalid) {
            $scope.carroForm.nmMarca.$setTouched();
            $scope.carroForm.nmCarro.$setTouched();
            $scope.carroForm.nmCor.$setTouched();
            $scope.carroForm.dtLanc.$setTouched();

            AlertService.error('Formulário apresenta erros de preenchimento!');

            return;
        }

        if (incluir) {
            vm.entidade.nmMarca = $filter('maiusculo')(vm.entidade.nmMarca);
            vm.entidade.nmCarro = $filter('maiusculo')(vm.entidade.nmCarro);
            vm.entidade.nmCor = $filter('maiusculo')(vm.entidade.nmCor);

            vm.listaCarro.push(vm.entidade);

            AlertService.success('Salvo com Sucesso!');
        } else {

            AlertService.success('Alterado com sucesso!');
        }

        novo();
    }

    function novo() {
        $scope.carroForm.$setUntouched();

        vm.entidade = {};
        incluir = true;

        angular.element('#idNmMarca').focus();
    }

    function fechar() {
        $scope.carroForm.$setUntouched();
        $rootScope.dadosSalvos = [];

        abrirPag('blank');
    }

    function editar(linha) {
        indice = vm.listaCarro.indexOf(linha);

        vm.entidade = linha;

        incluir = false;

        angular.element('#idNmMarca').focus();
    }

    function excluir(linha) {
        var index = vm.listaCarro.indexOf(linha);

        vm.listaCarro.splice(index, 1)
    }

    function deletar() {
        AlertService.success('Deletado com sucesso!');
    }


    function consultar(linha) {
        $rootScope.dadosSalvos = linha;

        abrirPag('pesquisaCarro');
    }

    function abrirPag(nomeState) {
        $state.go(nomeState);
    }
}