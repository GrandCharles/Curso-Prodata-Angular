/**
 * Created by GrandCharles on 24/11/2016.
 */
angular.module('pdApp').controller('CadastroBairroController', CadastroBairroController);

/* CadastroBairroController.$inject = ['$scope', 'AlertService', '$filter']; */

function CadastroBairroController($scope, $rootScope, $state, alertService, $filter) {
    $scope.entidade = {};
    $rootScope.dadosSalvos = {};

    $scope.listaBairro = $rootScope.listaDados;

    var indice = 0;

    $scope.incluir = true;

    $scope.salvar = salvar;
    $scope.novo = novo;
    $scope.fechar = fechar;

    $scope.editar = editar;
    $scope.excluir = excluir;

    $scope.consultar = consultar;
    $scope.abrirPag = abrirPag;

    $scope.gridOptions = {
        columnDefs: [
            {name: 'Bairro', field: 'nmBairro', width: 400},
            {name: 'Cidade', field: 'nmCidade', width: 150},
            {name: 'Estado', field: 'nmEstado', width: 150},

            {name: '', field: 'editar', cellTemplate: 'app/template/grid/cell-template-editar.html', width: 35},
            {name: ' ', field: 'excluir', cellTemplate: 'app/template/grid/cell-template-excluir.html', width: 35},
            {name: '  ', field: 'consultar', cellTemplate: 'app/template/grid/cell-template-consultar.html', width: 35}
        ],
        data: 'listaBairro',
        enableColumnMenus: false
    };

    function salvar() {
        if ($scope.bairroForm.$invalid) {
            $scope.bairroForm.nmBairro.$setTouched();
            $scope.bairroForm.nmCidade.$setTouched();
            $scope.bairroForm.nmEstado.$setTouched();

            alertService.error('Formulário apresenta erros de preenchimento!');

            return;
        }

        if ($scope.incluir) {
            /**  $scope.entidade.nmCidade = $filter('maiusculo')($scope.entidade.nmCidade); **/

            $scope.listaBairro.push($scope.entidade);

            alertService.success('Incluído com sucesso!');
        } else {

            $scope.listaBairro[indice] = $scope.entidade;

            alertService.success('Alterado com sucesso!');
        }

        novo();
    }

    function novo() {
        $scope.bairroForm.$setUntouched();
        $scope.entidade = {};
        $scope.incluir = true;

        angular.element('#nmBairro').focus();
    }
    function fechar() {
        $scope.bairroForm.$setUntouched();
        $rootScope.listaDados = [];
        abrirPag('blank');
    }


    function editar(linha) {
        indice = $scope.listaDados.indexOf(linha);

        $scope.entidade = linha;

        $scope.incluir = false;

        angular.element('#nmBairro').focus();
    }

    function excluir(linha) {
        var index = $scope.listaDados.indexOf(linha);

        $scope.listaBairro.splice(index, 1)

    }


    function consultar(linha) {
        $rootScope.dadosSalvos = linha;

        abrirPag('pesquisaBairro');
    }
    function abrirPag(nomeState) {
        $state.go(nomeState);
    }
}