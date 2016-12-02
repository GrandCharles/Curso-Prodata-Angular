/**
 * Created by GrandCharles on 24/11/2016.
 */
angular.module('pdApp').controller('CadastroBairroController', CadastroBairroController);

/**
CadastroBairroController.$inject = [
    '$scope',
    '$rootScope',
    '$state',
    'AlertService',
    '$filter',
    'brCidadesEstados'];
**/

function CadastroBairroController($scope,
                                  $rootScope,
                                  $state,
                                  AlertService,
                                  $filter,
                                  brCidadesEstados) {
    var vm = this;
    var indice = 0;
    var incluir = true;

    vm.entidade = {};

    $rootScope.dadosSalvos = {};

    vm.listaBairro = $rootScope.listaDados;

    vm.gridOptions = {
        columnDefs: [
            {name: 'Bairro', field: 'nmBairro', width: 400},
            {name: 'Cidade', field: 'nmCidade', width: 150},
            {name: 'Estado', field: 'nmEstado', width: 150},

            {name: 'E', field: 'editar', cellTemplate: 'app/template/grid/cell-template-editar.html', width: 35},
            {name: 'X', field: 'excluir', cellTemplate: 'app/template/grid/cell-template-excluir.html', width: 35},
            {name: 'C', field: 'consultar', cellTemplate: 'app/template/grid/cell-template-consultar.html', width: 35}
        ],
        data: 'vm.listaBairro',
        enableColumnMenus: false
    };

    vm.salvar = salvar;
    function salvar() {
        if ($scope.bairroForm.$invalid) {
            $scope.bairroForm.nmBairro.$setTouched();
            $scope.bairroForm.nmCidade.$setTouched();
            $scope.bairroForm.nmEstado.$setTouched();

            AlertService.error('Formulário apresenta erros de preenchimento!');

            return;
        }

        if (incluir) {
            /**  vm.entidade.nmCidade = $filter('maiusculo')(vm.entidade.nmCidade); **/
            vm.listaBairro.push(vm.entidade);

            AlertService.success('Incluído com sucesso!');
        } else {

            AlertService.success('Alterado com sucesso!');
        }

        novo();
    }

    vm.novo = novo;
    function novo() {
        $scope.bairroForm.$setUntouched();

        vm.entidade = {};
        incluir = true;

        angular.element('#idNmBairro').focus();
    }

    vm.fechar = fechar;
    function fechar() {
        $scope.bairroForm.$setUntouched();
        $rootScope.dadosSalvos = [];
        abrirPag('blank');
    }


    vm.editar = editar;
    function editar(linha) {
        indice = vm.listaBairro.indexOf(linha);

        vm.entidade = linha;

        incluir = false;

        angular.element('#idNmBairro').focus();
    }

    vm.excluir = excluir;
    function excluir(linha) {
        var index = vm.listaBairro.indexOf(linha);

        vm.listaBairro.splice(index, 1)
    }


    vm.consultar = consultar;
    function consultar(linha) {
        $rootScope.dadosSalvos = linha;

        abrirPag('pesquisaBairro');
    }


    vm.abrirPag = abrirPag;
    function abrirPag(nomeState) {
        $state.go(nomeState);
    }


    $scope.lstEstados = brCidadesEstados.estados;

    $scope.getCidadesPorSigla = getCidadesPorSigla;
    function getCidadesPorSigla(sigla){
        $scope.lstCidades = brCidadesEstados.buscarCidadesPorSigla(sigla);
        vm.entidade.nmEstado = brCidadesEstados.buscarNomeEstadoPorSigla(sigla);
    }

    $scope.getNome = getNome;
    function getNome(nome){
        vm.entidade.nmCidade = nome;

    }


}